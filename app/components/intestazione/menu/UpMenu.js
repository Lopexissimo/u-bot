import classes from './UpMenu.module.css'
import { useState } from 'react';
import Image from 'next/image';
import Menu from '@/public/static/img/Menu.png'
import { CiMenuBurger } from "react-icons/ci";

export default function UpMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.dropdown}>
            <button onClick={toggleDropdown} >
                <CiMenuBurger className={classes.menuIcon}/>
            </button>
            {isOpen && (
                <div className={classes.contenuto}>
                    <a href='#CosaFacciamo'>Cosa Facciamo</a>
                    <a href='#Contact'>Contattaci</a>

                </div>
            )}
        </div>
    );
}