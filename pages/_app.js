import "../styles/globals.css";
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            serverUrl="https://tofwtfk0saku.usemoralis.com:2053/server"
            appId="CrbAI7AvaxbLrSImNnmrLY0yOlhSzQQRi3cWAkyx"
        >
            <TinderProvider>
                <Component {...pageProps} />
            </TinderProvider>
        </MoralisProvider>
    );
}

export default MyApp;
