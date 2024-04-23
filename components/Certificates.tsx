import { NextFont } from "@next/font/dist/types";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from '../styles/Certificates.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CertificateProps {
    audiowide: NextFont;
}

const Certificates = ({ audiowide }: CertificateProps) => {
    const [nav1, setNav1] = useState<any | null>();
    const [nav2, setNav2] = useState<any | null>();
    let sliderRef1 = useRef<Slider>(null);
    let sliderRef2 = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef1) {
            setNav1(sliderRef1);
        }
        if (sliderRef2) {
            setNav2(sliderRef2);
        }
    }, []);

    return (
        <section id="briefcase">
            <div className={`container `}>
                <div className={`${styles.infoWork}`}>
                    <div className={`${styles.innerInfoWork}`}>
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className={`${styles.infoWorkTitle} ${audiowide.className}`}>
                            Certificados
                        </h2>
                    </div>
                </div>

                <Slider asNavFor={nav2} ref={(slider: any) => (sliderRef1 = slider)}>
                    <div className={styles.contIframe}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/172490e8c00d"> </iframe>
                    </div>
                    <div className={styles.contIframe}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/33a474c27690"> </iframe>
                    </div>
                    <div className={styles.contIframe}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/a27152a6cf2a"> </iframe>
                    </div>
                    <div className={styles.contIframe}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/d4a8f78bf502"> </iframe>
                    </div>
                </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={(slider: any) => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    centerPadding={"50px"}
                >
                    <div className={styles.contIframeSmall}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/172490e8c00d"> </iframe>
                    </div>
                    <div className={styles.contIframeSmall}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/33a474c27690"> </iframe>
                    </div>
                    <div className={styles.contIframeSmall}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/a27152a6cf2a"> </iframe>
                    </div>
                    <div className={styles.contIframeSmall}>
                        <iframe src="https://www.hackerrank.com/certificates/iframe/d4a8f78bf502"> </iframe>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Certificates