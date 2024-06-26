"use client";

import Upmenu from "./menu/UpMenu";
import Image from "next/image";
import Logo from "@/public/static/img/logo.png";
import classes from "./Intestazione.module.css";

export default function Intestazione() {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Image
                    src={Logo}
                    fill
                    alt="logo"
                    sizes="(max-width: 500px) 200px, 500px"                    
                />
            </div>
            <Upmenu className={classes.menu} />
        </div>
    );
}

// 
