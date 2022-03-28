import "../styles/globals.css";
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            serverUrl="https://skmxjh45aiax.usemoralis.com:2053/server"
            appId="BYyRqkluVSgdIoBcHIOfkSnxOxgPqfxnfFaCBOwQ"
        >
            <TinderProvider>
                <Component {...pageProps} />
            </TinderProvider>
        </MoralisProvider>
    );
}

export default MyApp;
