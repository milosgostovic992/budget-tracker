import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const ExpenseList = () => {

    const { expenses} = useContext(AppContext)

    return ( 
        <ul>
            {expenses.map((expense) => 
                <ExpenseItem 
                id={expense.id} 
                name={expense.name}
                cost={expense.cost}
                key={expense.id}/>
            )}
        </ul>
     );
}
 
export default ExpenseList;