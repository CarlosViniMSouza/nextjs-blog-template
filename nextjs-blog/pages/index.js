import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Carlos Souza (at web, I'm @CarlosViniMSouza)</p>
        <p>
          On moment, studing and working with Python for BackEnd and A.I. models.
        </p>
        <p>
          (This is a sample site building with) {' '}
          <a href="https://nextjs.org/learn"> Next.js </a>
        </p>
      </section>
    </Layout>
  )
}
