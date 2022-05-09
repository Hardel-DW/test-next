import {DefaultSession} from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken: string,
        id: string
            & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string;
        id: string;
    }
}
