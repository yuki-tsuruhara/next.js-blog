import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import Airticle from "@/components/Article";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>
          私はフロントエンドエンジニアです。
        </p>
      </section>

      <section>
        <h2>🗒 エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <Airticle
              key={id}
              id={id}
              title={title}
              date={date}
              imageUrl={thumbnail}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
