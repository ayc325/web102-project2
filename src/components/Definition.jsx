import React from "react";

const mineralList = [
    {
      id: 1,
      hardness: '3',
      streak: 'White',
    },
    {
      id: 2,
      hardness: '5.5-6.5',
      streak: 'Black',
    },
    {
      id: 3,
      hardness: '7',
      streak: 'White',
    },
    {
      id: 4,
      hardness: '9',
      streak: 'White',
    },
    {
      id: 5,
      hardness: '6-6.5',
      streak: 'Greenish-black to brownish-black',
    },
    {
      id: 6,
      hardness: '3.5-4',
      streak: 'Greenish-black',
    },
    {
      id: 7,
      hardness: '2.5',
      streak: 'Lead gray',
    },
    {
      id: 8,
      hardness: '5.5-6.5',
      streak: 'Red to brown',
    },
    {
      id: 9,
      hardness: '4',
      streak: 'White',
    },
    {
      id: 10,
      hardness: '2.5',
      streak: 'White',
    },
    {
      id: 11,
      hardness: '2.5-3',
      streak: 'Copper-red',
    },
    {
      id: 12,
      hardness: '1-2',
      streak: 'Black',
    },
    {
      id: 13,
      hardness: '3.5-4',
      streak: 'Green',
    },
    {
      id: 14,
      hardness: '3.5-4',
      streak: 'Light blue',
    },
    {
      id: 15,
      hardness: '1.5-2.5',
      streak: 'Yellow',
    },
    {
      id: 16,
      hardness: '3.5-4',
      streak: 'White',
    },
  ];

function getCurrentMineral(count) {
    return mineralList[count - 1];
}
const Definition = ({count}) => {
    const currentMineral = getCurrentMineral(count);
    
    return(
        <div className = {'Definition '}>
            <ul>
                <h4>Guess the mineral</h4>
                <h5>Hardness: {currentMineral.hardness}</h5>
                <h5>Streak: {currentMineral.streak}</h5>
            </ul>
        </div>
    )
}
export default Definition;