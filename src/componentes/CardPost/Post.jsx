import styles from './post.module.css';
function CardPost({ post }) {
  console.log(post);
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/fotos/${post.id}/capa.png`}
        alt='teste'
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}

export default CardPost;
