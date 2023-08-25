import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { ChakraProvider } from "@chakra-ui/react";
import "~/styles/globals.css";
import Footer from "./components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <ChakraProvider>
                <Component {...pageProps}  />
                <Footer />
            </ChakraProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
