import "../styles/globals.css";
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            serverUrl="https://ebxe7bhjfoie.usemoralis.com:2053/server"
            appId="2qZh5y5tqIsx64o4rub5g92aZ8yVnJKFksbpFtHo"
        >
            <TinderProvider>
                <Component {...pageProps} />
            </TinderProvider>
        </MoralisProvider>
    );
}

export default MyApp;
