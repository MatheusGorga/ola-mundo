import CardPost from 'componentes/CardPost/Post';
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

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice((0, 3));

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className={styles.postMarkdownContainer}>
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
              </PostModelo>
              <h1 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h1>
              <div className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => {
                  return (
                    <li key={post.id}>
                      <CardPost post={post} />
                    </li>
                  );
                })}
              </div>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default Post;
