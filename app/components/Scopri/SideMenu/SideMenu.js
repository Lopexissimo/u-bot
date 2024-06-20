import { useState } from "react";
import classes from './SideMenu.module.css'

export default function SideMenu() {

    const [Content, setContent] = useState([
        { id: 0, content: 'esempio1', isOpen: false },
        { id: 1, content: 'esempio2', isOpen: false },
        { id: 2, content: 'esempio3', isOpen: false },
        { id: 3, content: 'esempio4', isOpen: false },
    ]);

    const handleOpenSlider = (index) => {
        setContent(prev => {
            const newVal = prev.map(c => {
                if (index == c.id) {
                    return {
                        ...c,
                        isOpen: !c.isOpen
                    }
                }
                else {
                    return {
                        ...c,
                        isOpen: false
                    }
                }
            })
            return newVal;
        })

    }

    return (
        <div className={classes.extContainer}>
            {Content && Content.map((caso, index) => (
                <div key={caso.id} className={classes.intContainer}>
                    <div className={classes.titoloCaso}>
                        <button onClick={() => {
                            handleOpenSlider(index)
                        }}>
                            <h2>Soluzioni</h2>
                        </button>
                    </div>
                    <div className={caso.isOpen ? classes.contenutoCasoOpen : classes.contenutoCasoClosed}>
                            <p>{caso.content}</p>
                        </div>
                </div>
            ))}
        </div>
    )
}