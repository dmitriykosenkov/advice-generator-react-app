import axios from 'axios';
import { useEffect, useState } from 'react';
import s from './App.module.scss';
import icon from './assets/icon-dice.svg'
import divider from './assets/pattern-divider-desktop.svg'

function App() {
   const [advice, setAdvice] = useState("");
   const [fetching, setFetching] = useState(false);
   useEffect(() => {
      const fetchData = async () => {
         const data = await axios.get("https://api.adviceslip.com/advice")
         setAdvice(data.data.slip);
         setFetching(false)
      }
      fetchData()
   }, [fetching]);
   console.log(advice);
   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <div className={s.card}>
               <div className={s.cardInner}>
                  <div className={s.cardSubtitle}>Advice #{advice.id}</div>
                  <div className={s.cardTitle}>{advice.advice}</div>
                  <div className={s.cardDivider}><img src={divider} alt="" /></div>
                  <div className={s.cardIcon} onClick={() => setFetching(true)}>
                     <img src={icon} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
