import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-text">
                <p className="about-p">
                    Autorem niniejszej aplikacji jest <b className="about-b">Bartłomiej Banach</b>.
                </p>
                <p className="about-p">
                    Aplikacja stanowi integralną część pracy licencjackiej (kierunek: Elektroniczne Przetwarzanie Informacji)
                    przygotowanej pod kierunkiem <b className="about-b">prof. dra hab. Jerzego Koniora</b> na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
                </p>
            </div>
        </div>
    )
}


export default About;