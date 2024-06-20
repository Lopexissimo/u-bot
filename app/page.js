import classes from "./page.module.css";

import Intestazione from "./components/intestazione/Intestazione";
import Primo from "./components/Primo/Primo"
import Futuro from "./components/Futuro/Futuro"
import Scopri from './components/Scopri/Scopri'
import Programma from "./components/Programma/Programma";
import Contact from "./components/Contact/Contact";


export default function Home() {
  return (
    <main className={classes.main}>
      <Intestazione/>
      <Primo/>
      <Futuro/>
      <Scopri/>
      <Programma/>
      <Contact/>


    </main>
  );
}
