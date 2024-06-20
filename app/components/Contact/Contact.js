import ContactButton from "../Elements/ContactButton";
import classes from './Contact.module.css'
import Map from '../Elements/Mappa'

export default function Contact() {
    return (
        <>
            <h1 className={classes.titolo}>Contatti</h1>
            <a name={'Contact'} />
            <div className={classes.container}>
                <div className={classes.contatti}>
                    <p> +344543243554</p>
                    <p> rvbetjkrf@gmail.com</p>
                </div>
                <div className={classes.bottone}>
                    <button> CONTATTACI</button>
                </div>
                <div className={classes.mappa}>
                    <Map/>
                </div>

            </div>
        </>
    )
}