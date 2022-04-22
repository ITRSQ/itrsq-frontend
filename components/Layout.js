import Header from "./Header";
import Footer from "./Footer";
import WhatsApp from "./Communication/WhatsApp";

import Head from "next/head";
import Script from "next/script";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>ITRSQ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A London-based company focused on helping and assisting clients bring their vision or business online, from design to deployment"
          data-react-helmet="true"
        />

        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="S_xmw4KVLwwBiH4XRPrORopV2GXIUDPv-olDatEx_P8"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="keywords"
          content="ITRSQ, HTML, CSS, JavaScript, Web design, Websites, Make a website, website builder, website design, website checker, website maker, make a website uk, make a website for business, websites for business"
          data-react-helmet="true"
        />
        <meta name="author" content="ITRSQ" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        id="google-tag"
        dangerouslySetInnerHTML={`(function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              (h.hj.q = h.hj.q || []).push(arguments);
            };
          h._hjSettings = { hjid: 2689849, hjsv: 6 };
          a = o.getElementsByTagName("head")[0];
          r = o.createElement("script");
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")`}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-211821472-1"
      />
      <Script
        id="google-tag-1"
        dangerouslySetInnerHTML={`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-211821472-1");`}
      />

      <Header />
      <WhatsApp />
      <main>{children}</main>
    </>
  );
}
