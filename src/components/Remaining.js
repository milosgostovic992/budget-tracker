import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Remaining = () => {

    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {

        return (total = total + item.cost);
    }, 0)

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-warning';


    return ( 
        <div className={`alert alert-link ${alertType}`}>
            <span>Remaining: {budget - totalExpenses} din</span>
        </div>
     );
}
 
export default Remaining;