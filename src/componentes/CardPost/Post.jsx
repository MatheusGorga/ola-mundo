import BotaoPrincipal from 'componentes/BotaoPrincipal/BotaoPrincipal';
import { Link } from 'react-router-dom';
import styles from './post.module.css';
function CardPost({ post }) {
  console.log(post);
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt='teste'
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}

export default CardPost;
