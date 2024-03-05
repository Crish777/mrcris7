import React, {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';
import { NextFont } from '@next/font/dist/types';

interface ContactProps {
  audiowide: NextFont;
  setLoader: Dispatch<SetStateAction<boolean>>;
  setThanksView: Dispatch<SetStateAction<boolean>>;
  setIsPopUpOpen?: Dispatch<SetStateAction<boolean>> | null;
  isPopUp?: boolean | null;
}

export const Contact = ({
  audiowide,
  setLoader,
  setThanksView,
  setIsPopUpOpen,
  isPopUp,
}: ContactProps) => {
  const [animatePopUp, setAnimatePopUp] = useState(false);
  const section = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimatePopUp(true);
    }, 100);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    setThanksView(true);

    setTimeout(() => {
      if (
        !textarea.current ||
        !name.current ||
        !phone.current ||
        !email.current ||
        !form.current
      ) {
        return;
      }
      textarea.current.value = `-------Nombre: ${name.current.value} --------Mensaje: ${textarea.current.value} ----Teléfono: ${phone.current.value} ----- Email: ${email.current.value}----`;
      emailjs
        .sendForm(
          'service_7cf0vnn',
          'template_iizcgft',
          form.current,
          'Pu_NKH-w4e0Ya29xz'
        )
        .then(
          () => {
            if (
              !textarea.current ||
              !name.current ||
              !phone.current ||
              !email.current ||
              !form.current
            ) {
              return;
            }
            textarea.current.value = '';
            phone.current.value = '';
            email.current.value = '';
            name.current.value = '';
            setTimeout(() => {
              setLoader(false);
              setTimeout(() => {
                setAnimatePopUp(false);
                setTimeout(() => {
                  if (setIsPopUpOpen) {
                    setIsPopUpOpen(false);
                  }
                }, 600);
              }, 500);
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, 1000);
  };

  const closePopUp = () => {
    setAnimatePopUp(false);
    setTimeout(() => {
      if (setIsPopUpOpen) {
        setIsPopUpOpen(false);
      }
    }, 600);
  };

  return (
    <section
      className={`${styles['contact-section']} ${
        isPopUp ? styles.popUpContact : ''
      } ${animatePopUp ? styles.active : ''}`}>
      {isPopUp && (
        <div
          onClick={() => closePopUp()}
          className={`${styles.closeContactPopUp} bg-ct`}></div>
      )}
      <div
        className={styles.bgImage}
        style={{ 'backgroundImage': 'url(/images/city.jpg)' }}
        ref={section}></div>
      <div className={`container ${styles['container-contact']}`}>
        <h2
          className={`${audiowide.className} ${styles['title-contact']}`}
          data-aos="fade-up"
          data-aos-duration="1500">
          Contáctame!
        </h2>

        <form
          className={styles['site-form']}
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          data-aos-duration="1600">
          <label htmlFor="user_name" className={styles['label-contact']}>
            <input
              type="text"
              required
              id="user_name"
              name="user_name"
              className={styles['input-contact']}
              placeholder="*Nombre"
              ref={name}
            />
          </label>

          <label htmlFor="user_email" className={styles['label-contact']}>
            <input
              type="email"
              required
              id="user_email"
              name="user_email"
              className={styles['input-contact']}
              placeholder="*Email"
              ref={email}
            />
          </label>

          <label htmlFor="phone" className={styles['label-contact']}>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles['input-contact']}
              placeholder="Teléfono"
              ref={phone}
            />
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="*¿Cómo puedo ayudarte?"
            required
            ref={textarea}></textarea>

          <button className={`${styles['submit-btn']} ${audiowide.className}`}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
