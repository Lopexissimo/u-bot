import classes from "./Programma.module.css";
import ContactButton from "../Elements/ContactButton";
import RobotImg from "@/public/static/img/robot_1.png";
import Image from "next/image";

export default function Programma() {
    return (
        <>
            <h1>Programma Nome Azienda</h1>
            <div className={classes.container}>
                <div className={classes.img}>
                    <Image src={RobotImg} alt="Robot" />
                </div>
                <div className={classes.text}>
                    <span className={classes.hiddenbtn}>
                        <ContactButton />
                    </span>
                    <p>We make impactful experiences by fueling new energy between brands and people.</p>
                </div>
            </div>
        </>
    );
}
