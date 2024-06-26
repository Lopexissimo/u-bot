import { useState } from "react";
import classes from "./SideMenu.module.css";
import { useEffect } from "react";

export default function SideMenu() {
    const [Content, setContent] = useState([
        { id: 0, content: "esempio1", isOpen: true },
        { id: 1, content: "esempio2", isOpen: false },
        { id: 2, content: "esempio3", isOpen: false },
        { id: 3, content: "esempio4", isOpen: false },
    ]);

    let effectCounter = 1;
    const maxEffectCounter = 3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleOpenSlider(effectCounter);

            if (effectCounter < maxEffectCounter) {
                effectCounter++;
            } else {
                effectCounter = 0;
            }
        }, 300);

        return () => clearInterval(intervalId);
    }, []);

    const handleOpenSlider = (index) => {
        setContent((prev) => {
            const newVal = prev.map((c) => {
                if (index == c.id) {
                    return {
                        ...c,
                        isOpen: !c.isOpen,
                    };
                } else {
                    return {
                        ...c,
                        isOpen: false,
                    };
                }
            });
            return newVal;
        });
    };

    return (
        <div className={classes.extContainer}>
            {Content &&
                Content.map((caso, index) => (
                    <div key={caso.id} className={classes.intContainer}>
                        {!caso.isOpen ? (
                            <div className={classes.titoloCaso}>
                                <h2>Soluzioni</h2>
                            </div>
                        ) : (
                            <></>
                        )}

                        <div className={caso.isOpen ? classes.contenutoCasoOpen : classes.contenutoCasoClosed}>
                            <p>{caso.content}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
