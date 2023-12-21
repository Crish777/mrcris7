import { Audiowide } from '@next/font/google';
import Footer from '../components/Footer';
import styles from '../styles/Terms.module.css';
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const Index = () => {
  return (
    <div data-scroll-section>
      <section>
        <div className={`container ${styles['container-terms']}`}>
          <h2
            className={`${audiowide.className} ${styles['title-terms']} subtitleSection`}>
            Términos y Condiciones
          </h2>
          <p className={`siteParagraph ${styles['paragraph-terms']}`}>
            Bienvenido a mi Portafolio en línea. Al acceder y utilizar este
            sitio web, aceptas cumplir con estos términos y condiciones. Si no
            estás de acuerdo con alguna parte de estos términos, te solicitamos
            que no utilices este sitio.
          </p>
          <ol>
            <li>
              <h3>Uso del Sitio:</h3>
              <p>
                Este sitio web y su contenido son propiedad de Cristhian Felipe
                Herrera. El uso no autorizado del sitio puede dar lugar a
                reclamaciones por daños y perjuicios y/o ser considerado un
                delito.
              </p>
            </li>
            <li>
              <h3>Formulario de Contacto:</h3>
              <p>
                Al utilizar nuestro formulario de contacto, entiendes y aceptas
                que los datos proporcionados serán recopilados y procesados a
                través de un servicio de terceros. Nos comprometemos a proteger
                tu privacidad y utilizar esta información solo con fines
                comerciales relacionados con tus consultas o proyectos.
              </p>
            </li>
            <li>
              <h3>Proyectos y Enlaces:</h3>
              <p>
                Los proyectos presentados en este sitio son ejemplos de trabajos
                previos realizados por Cristhian Felipe Herrera. Los enlaces a
                sitios web de clientes son proporcionados con su consentimiento
                y con el propósito de mostrar mi experiencia en desarrollo web.
              </p>
            </li>
            <li>
              <h3>Propiedad Intelectual:</h3>
              <p>
                Todo el contenido, incluidos el diseño y el código, es propiedad
                de Cristhian Felipe Herrera. No está permitido copiar,
                reproducir o utilizar de ninguna manera sin el consentimiento
                explícito.
              </p>
            </li>
            <li>
              <h3>Responsabilidad del Contenido:</h3>
              <p>
                No nos responsabilizamos por el contenido de enlaces externos o
                proyectos de clientes. La información proporcionada enlazando a
                terceros es responsabilidad de dichos terceros.
              </p>
            </li>
            <li>
              <h3>Imágenes y Datos Personales:</h3>
              <p>
                El uso de imágenes y datos personales se realiza con el
                consentimiento de las partes involucradas. Nos comprometemos a
                manejar esta información con la mayor confidencialidad posible.
              </p>
            </li>
            <li>
              <h3>Modificaciones:</h3>
              <p>
                Nos reservamos el derecho de realizar cambios en estos términos
                y condiciones en cualquier momento. Los cambios serán efectivos
                inmediatamente después de la publicación en el sitio.
              </p>
            </li>
          </ol>
          Al utilizar este sitio, aceptas estos términos y condiciones. Si
          tienes alguna pregunta o inquietud, contáctanos a través del
          formulario proporcionado.
        </div>
      </section>
      <Footer audiowide={audiowide} />
    </div>
  );
};

export default Index;
