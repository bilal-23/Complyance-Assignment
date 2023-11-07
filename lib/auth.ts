
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

                const user = {
                    id: "1",
                    name: "John Smith",
                    email: "john@smith.com",
                    image: "https://robohash.org/mail@ashallendesign.co.uk",
                    expiresIn: 5 * 60 * 1000,
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
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.expiresIn = 60 * 5 * 1000; // 5 minutes
            }
            return token;
        },
        async session({ session, token }) {
            session.user.expiresIn = token.expiresIn as number;
            return session;
        },
    },

};
