import { createClient } from '../prismicio';
import { linkResolver, repositoryName } from '../prismicio';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Link from 'next/link';
import Head from "next/head";


import Layout from "../components/Layout/Layout";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const {google_analytics_id} = pageProps.data;

  return <>
    <Head className="head">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>        
    </Head>    
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        (<Link href={href} {...props}>
          {children}
        </Link>)
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Layout data={pageProps.data.slices}>
          <GoogleAnalytics measurementId={google_analytics_id} />
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  </>;
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
