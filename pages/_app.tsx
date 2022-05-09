import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Classic from '../components/Layout/Classic';

export default ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Classic>
                <Component {...pageProps} />
            </Classic>
        </SessionProvider>
    );
};
