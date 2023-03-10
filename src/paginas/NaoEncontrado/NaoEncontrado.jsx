import styles from './naoEncontrado.module.css';
import errorImg from '../../assets/erro_404.png';
import BotaoPrincipal from 'componentes/BotaoPrincipal/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';
function NaoEncontrado() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}> 404 </span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando? Aguarde uns
        </p>
        <p className={styles.paragrafo}>
          instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div onClick={() => navegar('/')} className={styles.botaoContainer}>
          <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={errorImg}
          alt='imagem de cachorro vestido de humano'
        />
      </div>

      <div className={styles.espacoEmBranco} />
    </>
  );
}

export default NaoEncontrado;
