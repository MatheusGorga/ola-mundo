import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo</h1>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          vulputate lacinia turpis, nec placerat metus aliquam ut. Nunc eleifend
          arcu sit amet odio maximus, id tristique sem cursus.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt='circulo'
          aria-hidden={true}
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Rick' />
      </div>
    </div>
  );
}

export default Banner;
