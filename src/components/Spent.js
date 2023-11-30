import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const Spent = () => {

    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return ( total += item.cost)
    }, 0)
    
    return ( 
        <div className="alert alert-link alert-secondary">
            <span>Spent so far: {totalExpenses} din</span>
        </div>
     );
}
 
export default Spent;