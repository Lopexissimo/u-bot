'use client'

import { useState } from "react";
import SendEmailStyle from "./SendEmail.module.css";

export default function SendEmailModal({ closeModal }) {
    const [formState, setFormState] = useState({
        Email: "",
        Nome: "",
        Oggetto: "",
        Categoria: "",
        Note: "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className={SendEmailStyle.modalbackground}
            onClick={() => {
                closeModal();
            }}
        >
            <div className={SendEmailStyle.modal}>
                <h2>Inizia a comunicare con il nostro team</h2>
                <hr></hr>
                <div className={SendEmailStyle.form}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="Email" value={formState.Email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="Nome" value={formState.Nome} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Oggetto</label>
                        <input type="text" name="Oggetto" value={formState.Oggetto} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Categoria</label>
                        <input type="text" name="Categoria" value={formState.Categoria} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Note</label>
                        <textarea name="Note" value={formState.Note} onChange={handleChange} />
                    </div>
                    <div>
                        <button>Invia</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
