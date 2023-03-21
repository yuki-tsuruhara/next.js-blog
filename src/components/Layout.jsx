import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";
const name = "shin code";
export const siteTitle = "Next.js Blog";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <img
              src="/images/profile.png"
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1>{name}</h1>
          </div>
        ) : (
          <div>
            <img
              src="/images/profile.png"
              className={`${utilsStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1>{name}</h1>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link className={utilsStyles.linkText} href="/">
            ホームへ戻る →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
