import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction'
export const TransactionList = () => {
  const {transactions} =useContext(GlobalContext);
//  console.log(transections.transections)
  // let data[] = Array.from(transections);
  // console.log(data)
    return (
        <>
            <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
     
        
      </ul>
        </>
    )
}
