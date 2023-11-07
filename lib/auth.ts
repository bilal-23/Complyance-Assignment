
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string };
                const jwt = require('jsonwebtoken');
                const access_token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: 5 * 60 });
                const refresh_token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "30d" });

                const user = {
                    id: "1",
                    name: "John Smith",
                    email: "john@smith.com",
                    image: "https://robohash.org/mail@ashallendesign.co.uk",
                    expiresAt: 5 * 60 * 1000 + Date.now(),
                    access_token,
                    refresh_token,
                }
                if (user.email === email && password === "123456") {
                    return user;
                }
                else {
                    throw new Error("Invalid credentials");
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "RefreshToken",
            credentials: {
                refresh_token: { label: "Refresh Token", type: "text", placeholder: "jsmith" },
                email: { label: "email", type: "text", placeholder: "jsmith" },
                name: { label: "name", type: "text", placeholder: "jsmith" },
            },
            async authorize(credentials) {
                const { refresh_token, email, name } = credentials as { refresh_token: string, email: string, name: string };
                const jwt = require('jsonwebtoken');
                //make your calls to api to get new token by the refresh token;

                const access_token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: 5 * 60 });
                const new_refresh_token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "30d" });


                const user = {
                    id: "1",
                    name: "John Smith",
                    email: "john@smith.com",
                    image: "https://robohash.org/mail@ashallendesign.co.uk",
                    expiresAt: 5 * 60 * 1000 + Date.now(),
                    access_token,
                    refresh_token: new_refresh_token,
                }

                return user;
            },
        }),

    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.expiresAt = user.expiresAt; // 5 minutes
                token.access_token = user.access_token;
                token.access_token = user.refresh_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.expiresAt = token.expiresAt as number;
            session.user.access_token = token.accessToken as string;
            session.user.access_token = token.refreshToken as string;
            return session;
        },
    },

};
