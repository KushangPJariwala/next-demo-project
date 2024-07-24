import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import blogImg from "../../../public/blog.png";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {
          // post.img &&
          <div className={styles.imgContainer}>
            <Image src={blogImg} alt="image" className={styles.img} width={20}/>
          </div>
        }
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
