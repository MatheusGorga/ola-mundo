import { useParams } from 'react-router-dom';

function Post() {
  const parametros = useParams();

  return <h1>Ola mundo</h1>;
}

export default Post;
