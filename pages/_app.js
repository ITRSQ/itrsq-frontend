import "../styles/globals.css";
import "../styles/responsive.css";
import "../styles/rewamp.css";
import "../styles/reset.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
