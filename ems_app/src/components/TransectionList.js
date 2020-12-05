import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transection} from './Transection'
export const TransectionList = () => {
  const {transections} =useContext(GlobalContext);
//  console.log(transections.transections)
  // let data[] = Array.from(transections);
  // console.log(data)
    return (
        <>
            <h3>History</h3>
      <ul id="list" className="list">
        {transections.transections.map(transection =>(<Transection key={transection.id} transection={transection}/>))}
     
        
      </ul>
        </>
    )
}
