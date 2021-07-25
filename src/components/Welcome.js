import React, { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee"
import dmkLogo from '../logo.svg'
import sctImage from '../styles/images/stc.svg'

function Welcome() {
  const words = ['welcome to', 'welcome to'];
  const appname = 'digital muda kreatif';
  const marqueeName = 'digitalmudakreatifdigitalmudakreatifdigitalmudakreatifdigitalmudakreatifdigitalmudakreatifdigitalmudakreatifdigitalmudakreatif';
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return(
    <div className="welcome">
      <div className="typedText">
        {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
      </div>
      <div className="brand">
        <img className="brandLogo" src={dmkLogo}/>
        <div className="brandName">{appname}</div>
      </div>
      <img src={sctImage} className="scrollIcon"/>
      {/* <div className="scrollIcon">scroll to continue</div> */}
      <Marquee speed={48} gradient={false} style={{
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: '0'
      }}>
        <div className="theMarqueeText">{marqueeName}</div>
      </Marquee>
    </div>
  );
}
export default Welcome;