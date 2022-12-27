import styles from './rodape.module.css';
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg';
function Rodape() {
  return (
    <div className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Alura.
    </div>
  );
}

export default Rodape;
