
'use client';

import Upmenu from './menu/UpMenu'
import Image from 'next/image'
import Logo from '@/public/static/img/logo.png'
import classes from './Intestazione.module.css'

export default function Intestazione() {
    return (
        <div className={classes.container}>
            <Image src={Logo} alt='logo' className={classes.logo} />
            <Upmenu className={classes.menu} />
        </div>
    )
}