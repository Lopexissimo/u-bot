import classes from './Futuro.module.css'
import ContactButton from '../Elements/ContactButton'

export default function Futuro() {
    return (
        <>
            <h1>Scegli il futuro</h1>
            <div className={classes.container}>
                <div className={classes.infos}>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                </div>
                <div className={classes.mezzo}>
                    <p>vs<br /> 3 <br />anni</p>
                </div>
                <div className={classes.infos}>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                    <p>+20% produzione </p>
                </div>
            </div>
            <ContactButton />
        </>
    )
}