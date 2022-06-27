import { createClient } from '../prismicio'
import "../styles/index.scss";
import Link from 'next/link'
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content="Demo create app with Next.js and Prismic/Slicemashine CMS" />
        <title>prismic-sm-demo</title>
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
          <Layout data={pageProps.data}>
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
    let page = await client.getByUID('layout', 'layout')
    pageProps["data"] = page.data.slices;
  } catch (error) {}
  return { pageProps };
};
