import React from "react";

const mineralList = [
    {
        id: 1,
        mineral: 'calcite', 
        details: 'fizzes'
    },
    {
        id: 2,
        mineral: 'magnetite', 
        details: 'magnetic'
    },
    {
        id: 3,
        mineral: 'quartz', 
        details: 'glass-like and conchoidal fracture'
    },
    {
        id: 4,
        mineral: 'conrundum', 
        details: 'hardness at 9'
    },
    {
        id: 5,
        mineral: 'pyrite', 
        details: 'like gold but with black streak'
    },
    {
        id: 6,
        mineral: 'chalcopyrite', 
        details: 'like pyrite but softer'
    },
    {
        id: 7,
        mineral: 'galena', 
        details: 'dense metal, very heavy'
    },
    {
        id: 8,
        mineral: 'hematite', 
        details: 'red streak'
    },
    {
        id: 9,
        mineral: 'fluorite', 
        details: 'various colors and can be transparent'
    },
    {
        id: 10,
        mineral: 'halite', 
        details: 'soft, salty'
    },
    {
        id: 11,
        mineral: 'copper', 
        details: 'metallic, holes'
    },
    {
        id: 12,
        mineral: 'graphite', 
        details: 'write on paper'
    },
    {
        id: 13,
        mineral: 'malachite', 
        details: 'rounded growth teal + copper'
    },
    {
        id: 14,
        mineral: 'azurite', 
        details: 'blue + copper'
    },
    {
        id: 15,
        mineral: 'sulfur', 
        details: 'rotten egg smell'
    },
    {
        id: 16,
        mineral: 'dolomite', 
        details: 'fizzes like calcite but more slowly'
    },
]
function getCurrentMineral(count) {
    return mineralList[count - 1];
}
const Term = ({count}) => {
    const currentMineral = getCurrentMineral(count);

    return(
        <div className = {'Term '}>
            <h4>{currentMineral.mineral}</h4>
            <h5>Fun Fact: {currentMineral.details}</h5>
        </div>
    )
}
export default Term;