'use client'
import classes from './Scopri.module.css'
import ContactButton from '../Elements/ContactButton'
import SideMenu from './SideMenu/SideMenu'

export default function Scropi() {

    return (
        <>
            <a name={'CosaFacciamo'} />
            <h1 className={classes.titolo}>Scopri cosa facciamo</h1>
            <div className={classes.container}>
                <div className={classes.text}>
                    <p>we make impactufl experiencies by fueling</p>
                    <ContactButton className={classes.contactButton} />
                </div>
                <div className={classes.menuContainer}>
                    <SideMenu />
                </div>
            </div>
        </>
    )
}