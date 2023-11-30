import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid'; 

const AddExpenseForm = () => {

const {dispatch} = useContext(AppContext);

const [name, setName] = useState('');
const [cost, setCost] = useState('');

const submitHandler = (e) => {
   e.preventDefault();
   
   const expense = {
    id: uuidv4(),
    name,
    cost: parseInt(cost)
   }

   dispatch({
    type: 'ADD_EXPENSE',
    payload: expense,
   })
   setName('');
   setCost('');
};

const nameChangeHandler = (e) => {
    setName(e.target.value)
};

const costChangeHandler = (e) => {
    setCost(e.target.value)
    console.log(cost);
};

    return ( 
        <form onSubmit={submitHandler}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" 
                    type="text" 
                    required 
                    id="name"
                    value={name}
                    onChange={nameChangeHandler}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input className="form-control" 
                    type="number" 
                    required 
                    id="cost"
                    value={cost}
                    onChange={costChangeHandler}/>
                </div>
                <div className="col-sm">
                    <button type="subbmit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
     );
}
 
export default AddExpenseForm;