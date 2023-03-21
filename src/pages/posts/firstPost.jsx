import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <h1>first post</h1>
      <Link href="/">ホームに戻る</Link>
    </div>
  );
};

export default firstPost;
