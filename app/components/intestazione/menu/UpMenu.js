import classes from "./UpMenu.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "@/public/static/img/Menu.png";
import { CiMenuBurger } from "react-icons/ci";

export default function UpMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!e.target.closest(`.${classes.dropdown}`)) {
                setIsOpen(false);
            }
        });
    });

    return (
        <div className={classes.dropdown}>
            <button onClick={toggleDropdown}>
                <CiMenuBurger className={classes.menuIcon} />
            </button>
            <div className={isOpen ? classes.contenuto : classes.contenutoclose}>
                <div>
                    <h3>CHI SIAMO</h3>
                    <a href="#CosaFacciamo">Cosa Facciamo</a>
                    <a href="#Contact">Contattaci</a>
                </div>
            </div>
        </div>
    );
}
