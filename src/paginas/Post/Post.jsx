import PostModelo from 'componentes/PostModelo/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import posts from '../../assets/json/posts.json';
import styles from './post.module.css';
function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    <h1>Post Nao encontrado</h1>;
  }
  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className={styles.postMarkdownContainer}>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
}

export default Post;
