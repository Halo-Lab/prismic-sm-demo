import { createClient } from '../prismicio';
import { linkResolver, repositoryName } from '../prismicio';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Link from 'next/link'
import Head from "next/head";
import Script from 'next/script';

import Layout from "../components/Layout/Layout";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const {pageTitle, pageDescription, google_analytics_id} = pageProps.data;

  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content={pageDescription} />
        <title>{pageTitle}</title>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
          strategy="afterInteractive"
        />        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_analytics_id}');
          `}
        </Script> 
      </Head>    
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Layout data={pageProps.data.slices}>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

App.getInitialProps = async () => {
  let pageProps = {};
  const client = createClient()
  try {
    let page = await client.getByUID('layout', 'layout');    
    pageProps["data"] = page.data;    
  } catch (error) {}
  return { pageProps };
};
