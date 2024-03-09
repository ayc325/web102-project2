import React, { useState } from "react";
import Term from './Term';
import Definition from './Definition';

const Cards = ({ count }) => {
    const [showTerm, setShowTerm] = useState(false);
  
    const toggleView = () => {
      setShowTerm(!showTerm);
    };
  
    return (
        <div className='center-container'>
            <div className={'Cards'} onClick={toggleView}>
                {showTerm ? (
                <Term count={count} />
                ) : (
                <Definition count={count} />
                )}
            </div>
        </div>
    );
  };

export default Cards;