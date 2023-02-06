import BlogCard from "../components/BlogCard";
import styles from "../styles/Blog.module.css";
import Footer from "../components/Footer";
import { Amatic_SC } from "@next/font/google";
import { Audiowide } from "@next/font/google";


const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const amaticsc = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"] });

const Blog = ({blogs}) => {
  return (
    <>
      <section
        className={`${styles.sectionBlog} sectionPage`}
        data-scroll-section
      >
        <div className={`container ${styles.containerBlog}`}>
          {blogs.map(blog => (
            <BlogCard key={blog.id} amaticsc={amaticsc} data={blog}/>
          ))}
        </div>
        <Footer audiowide={audiowide}/>
      </section>
    </>
  );
};


export async function getServerSideProps() {
  const url = `${process.env.STRAPI_URL}/blogs`;
  const response = await fetch(url);
  const blogs = await response.json();

  return {
    props: {
      blogs
    }
  }
}
// 1-Introducción a las herramientas de desarrollo frontend populares, como React y Next.js.
// 2-Cómo optimizar el rendimiento de un sitio web utilizando técnicas de optimización de rendimiento frontend con HTML, CSS y JavaScript.
// 3-Creando una interfaz de usuario atractiva utilizando solo HTML, CSS y JavaScript.
// 4-Implementando un diseño adaptable para dispositivos móviles utilizando solo HTML y CSS.
// 5-Utilizando JavaScript para proporcionar una experiencia personalizada al usuario mediante la manipulación del DOM.
// 6-Integrando un servicio de pago en una aplicación web utilizando JavaScript y alguna librería o framework de pago.
// 7-Creando una aplicación de comercio electrónico utilizando solo HTML, CSS y JavaScript.
// 8-Utilizando el almacenamiento local (localStorage) para crear aplicaciones web progresivas con JavaScript.
// 9-Implementando un sistema de autenticación y autorización en una aplicación web con JavaScript.
// 10-Creando una aplicación de chat en tiempo real utilizando WebSockets y JavaScript.
// 11-Utilizando la API de redes sociales para integrar funciones de redes sociales en una aplicación web con JavaScript.
// 12-Creando una aplicación de mapas interactivos utilizando solo JavaScript y alguna librería o framework de mapas.
// 13-Utilizando el JavaScript para proporcionar funciones básicas de inteligencia artificial en una aplicación web.
// 14-Creando una aplicación de realidad virtual o aumentada utilizando solo JavaScript y alguna librería o framework.
// 15-Utilizando la integración con algún servicio en la nube para crear aplicaciones web escalables con JavaScript.
// 16-Creando una aplicación de colaboración en tiempo real utilizando solo JavaScript y alguna librería o framework.
// 17-Utilizando JavaScript para proporcionar funciones de análisis de datos en una aplicación web.
// 18-Creando una aplicación de aprendizaje automático utilizando solo JavaScript y alguna librería o framework.
// 19-Utilizando JavaScript para proporcionar funciones básicas de análisis de datos en una aplicación web.
// 20-Creando una aplicación de juegos utilizando solo JavaScript y alguna librería o framework.
// 21-Utilizando JavaScript para proporcionar funciones básicas de generación de contenido en una aplicación web.
// 22-Creando una aplicación de realidad aumentada para dispositivos móviles utilizando solo JavaScript y alguna librería o framework.

export default Blog;
