import styles from './inicio.module.css';
import posts from 'assets/json/posts.json';
import CardPost from 'componentes/CardPost/Post';

function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return <CardPost key={post.id} post={post} />;
      })}
    </ul>
  );
}

export default Inicio;
