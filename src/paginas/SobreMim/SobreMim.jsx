import PostModelo from 'componentes/PostModelo/PostModelo';
import styles from './sobreMim.module.css';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobreMim from '../../assets/sobre_mim_foto.png';

function SobreMim() {
  return (
    <PostModelo titulo='Sobre mim' fotoCapa={fotoCapa}>
      <h3 className={styles.subtitulo}>Ola, eu sou Matheus!</h3>
      <img className={styles.fotoSobreMim} src={fotoSobreMim} alt='foto rick' />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris
        massa, ultricies a magna vel, condimentum semper dui. Cras quis pretium
        sapien. Phasellus eleifend luctus augue, et varius ipsum aliquam sed.
        Etiam mattis turpis at cursus pulvinar. Duis nec consectetur dui.
        Phasellus at ornare nulla. In hac habitasse platea dictumst. Nullam
        tincidunt, odio nec pulvinar semper, mi quam commodo sem, vel laoreet
        dui nunc in augue. Phasellus molestie urna quis felis sodales, quis
        pretium felis pharetra. Nunc dui erat, tempus ac varius bibendum,
        sollicitudin vitae turpis.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris
        massa, ultricies a magna vel, condimentum semper dui. Cras quis pretium
        sapien. Phasellus eleifend luctus augue, et varius ipsum aliquam sed.
        Etiam mattis turpis at cursus pulvinar. Duis nec consectetur dui.
        Phasellus at ornare nulla. In hac habitasse platea dictumst. Nullam
        tincidunt, odio nec pulvinar semper, mi quam commodo sem, vel laoreet
        dui nunc in augue. Phasellus molestie urna quis felis sodales, quis
        pretium felis pharetra. Nunc dui erat, tempus ac varius bibendum,
        sollicitudin vitae turpis.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris
        massa, ultricies a magna vel, condimentum semper dui. Cras quis pretium
        sapien. Phasellus eleifend luctus augue, et varius ipsum aliquam sed.
        Etiam mattis turpis at cursus pulvinar. Duis nec consectetur dui.
        Phasellus at ornare nulla. In hac habitasse platea dictumst. Nullam
        tincidunt, odio nec pulvinar semper, mi quam commodo sem, vel laoreet
        dui nunc in augue. Phasellus molestie urna quis felis sodales, quis
        pretium felis pharetra. Nunc dui erat, tempus ac varius bibendum,
        sollicitudin vitae turpis.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris
        massa, ultricies a magna vel, condimentum semper dui. Cras quis pretium
        sapien. Phasellus eleifend luctus augue, et varius ipsum aliquam sed.
        Etiam mattis turpis at cursus pulvinar. Duis nec consectetur dui.
        Phasellus at ornare nulla. In hac habitasse platea dictumst. Nullam
        tincidunt, odio nec pulvinar semper, mi quam commodo sem, vel laoreet
        dui nunc in augue. Phasellus molestie urna quis felis sodales, quis
        pretium felis pharetra. Nunc dui erat, tempus ac varius bibendum,
        sollicitudin vitae turpis.
      </p>
    </PostModelo>
  );
}

export default SobreMim;
