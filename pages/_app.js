import "../styles/index.scss";
import Link from 'next/link'
import Head from "next/head";
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content="Demo create next app with Prismic/Slicemashine CMS" />
        <title>Slicemachine-Demo</title>
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
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}
