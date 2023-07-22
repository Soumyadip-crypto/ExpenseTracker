import React from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../UI/Card';
import '../UI/Card.css';

const ExpenseItem=(props)=> {
 //lec16 const [title, setTitle] = useState(props.title);
 //lec16 console.log('ExpenseItem evaluated by React');
  //const [amount, setAmount] = useState(props.amount);lec 5
  
 //lec16 const clickhandler=() =>{
 //lec16  // title='updated!'; lec4
 //lec16  setTitle('Updated!');
 //lec16   console.log(title);
 //lec16 };
  //1const changeAmountHandler = () => {
    //setAmount(100);
  //};
  //<div className="expense-item__price">${amount}</div>
  //1<button onClick={changeAmountHandler}>Change Amount to $100</button> lec 5
 // const deleteHandler = () => { lec3
    // DOM manipulation to delete the expense
    //const expenseItem = document.querySelector('.expense-item');
    //expenseItem.remove();
  //};
  // <button onClick={deleteHandler}>Delete Expense</button> it should be in return
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        
        
       
      </div>
    </Card>
  );
}

export default ExpenseItem;

