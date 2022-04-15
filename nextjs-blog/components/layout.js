import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Carlos Souza'
export const siteTitle = 'NextJS Simple Page'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href='/favicon.ico' />
        <meta name='description'
          content='My personal website with NextJS' /
        >
        <meta property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card'
          content='summary_large_img' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Foto_Perfil_1.jpeg"
              className={utilStyles.borderCircle}
              height={133}
              width={133}
              alt={name}
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
