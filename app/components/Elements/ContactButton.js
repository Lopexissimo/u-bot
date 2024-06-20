import Link from 'next/link'
import classes from './ContactButton.module.css'

export default function ContactButton(){
    return (
        <button className={classes.contactButton}>
            <a href='#Contact'>CONTACT</a>
            </button>
    )
}