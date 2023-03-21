import Link from "next/link";
import styles from "./article.module.css";
import utilsStyle from "../styles/utils.module.css";

const Article = ({ id, imageUrl, title, date }) => {
  return (
    <div>
      <article>
        <Link href={`/posts/${id}`}>
          <div
            className={styles.article}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className={styles.articleCover}>
              <p className={utilsStyle.whiteText}>{title}</p>
              <p className={utilsStyle.whiteText}>{date}</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default Article;
