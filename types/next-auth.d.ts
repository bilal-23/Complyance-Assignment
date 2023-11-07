import NextAuth from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            name: string;
            email: string;
            image: string;
            expiresAt: number;
            access_token: string;
            refresh_token: string;
        }
    }

    interface User {
        name: string;
        email: string;
        image: string;
        expiresAt: number;
        access_token: string;
        refresh_token: string;
    }
}