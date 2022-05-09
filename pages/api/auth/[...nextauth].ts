import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import dotenv from 'dotenv';
import {session} from "next-auth/core/routes";

dotenv.config();

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 60 * 60
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.accessToken = user.access_token as string
            }

            user && (token.id = user.id);

            return token
        },
        async session({session, token, user}) {
            session.accessToken = token.accessToken
            session.id = token.id;
            return session
        }
    }
})