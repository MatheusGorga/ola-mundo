import Banner from '../../componentes/Banner/Banner';
import styles from './inicio.module.css';
import posts from 'assets/json/posts.json';
import CardPost from 'componentes/CardPost/Post';

function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => {
          return <CardPost key={post.id} post={post} />;
        })}
      </ul>
    </main>
  );
}

export default Inicio;
