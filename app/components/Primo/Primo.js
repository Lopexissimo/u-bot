import Image from "next/image"
import RobotImg from '@/public/static/img/robot_1.png'
import classes from './Primo.module.css'

export default function Primo() {
    return (
        <div className={classes.container}>
            <Image src={RobotImg} alt="RobotImg" className={classes.img} />
            <div className={classes.text}>
                <p> We make impactful experiences by fueling new energy between brands and people.</p>
            </div>
            <div className={classes.text}>
                <p> We make impactful experiences by fueling new energy between brands and people.</p>
            </div>
        </div>
    )

}