"use client";

import React, { useState } from "react";
import classes from "./Contact.module.css";
import Map from "../Elements/Mappa";
import SendEmailModal from "./Modal/SendEmail";

export default function Contact() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <h1 className={classes.titolo}>Contatti</h1>
            <a name={"Contact"} />
            <div className={classes.container}>
                <div className={classes.contatti}>
                    <p> +344543243554</p>
                    <p> rvbetjkrf@gmail.com</p>
                </div>
                <div className={classes.bottone}>
                    <button
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        CONTATTACI
                    </button>
                    {openModal && (
                        <SendEmailModal
                            closeModal={() => {
                                setOpenModal(false);
                            }}
                        ></SendEmailModal>
                    )}
                </div>
                <div className={classes.mappa}>
                    <Map />
                </div>
                <div className={classes.address}>
                    <h6>Via di prova 95, Reggio (RE) 41120</h6>
                </div>
            </div>
        </>
    );
}
