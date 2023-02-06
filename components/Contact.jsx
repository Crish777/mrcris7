import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

export const Contact = ({ audiowide, setLoader, setThanksView }) => {
  const form = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const textarea = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    setThanksView(true);

    setTimeout(() => {
      textarea.current.value = `-------Nombre: ${name.current.value} --------Mensaje: ${textarea.current.value} ----Teléfono: ${phone.current.value} ----- Email: ${email.current.value}----`;
      emailjs
        .sendForm(
          "service_r7uatoq",
          "template_iizcgft",
          form.current,
          "Pu_NKH-w4e0Ya29xz"
        )
        .then(
          (result) => {
            console.log(result);
            console.log(result.text);
            textarea.current.value = '';
            phone.current.value = '';
            email.current.value = '';
            name.current.value = '';
            setTimeout(() => {
              setLoader(false);              
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, 1000);
  };
  return (
    <section className={styles["contact-section"]}>
      <div className={`${styles["container"]} ${styles["container-contact"]}`}>
        <h2 className={`${audiowide.className} ${styles["title-contact"]}`}>
          Contáctame!
        </h2>

        <form className={styles["site-form"]} ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name" className={styles["label-contact"]}>
            <input
              type="text"
              required
              id="user_name"
              name="user_name"
              className={styles["input-contact"]}
              placeholder="*Nombre"
              ref={name}
            />
          </label>

          <label htmlFor="user_email" className={styles["label-contact"]}>
            <input
              type="email"
              required
              id="user_email"
              name="user_email"
              className={styles["input-contact"]}
              placeholder="*Email"
              ref={email}
            />
          </label>

          <label htmlFor="phone" className={styles["label-contact"]}>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles["input-contact"]}
              placeholder="Teléfono"
              ref={phone}
            />
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="*¿Cómo puedo ayudarte?"
            required
            ref={textarea}
          ></textarea>

          <button className={`${styles["submit-btn"]} ${audiowide.className}`}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
