import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import PostModelo from 'componentes/PostModelo/PostModelo';
import NaoEncontrado from 'paginas/NaoEncontrado/NaoEncontrado';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../assets/json/posts.json';
import styles from './post.module.css';
function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NaoEncontrado />;
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className={styles.postMarkdownContainer}>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}

export default Post;
