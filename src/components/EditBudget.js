import { useState } from "react";

const EditBudget = ({ budget, handleSaveClick }) => {

const [value, setValue] = useState(budget);
    const changeHandler = (e) => {
        setValue(e.target.value);
    }


    return ( 
        <>
            <input
                required='required'
                type='number'
                className='form-control mr-3'
                id='name'
                value={value}
                onChange={changeHandler}
            />
            <button
                type='button'
                className='btn btn-primary'
                onClick={() => handleSaveClick(value)}
            >
                Save
            </button>
        </>
     );
}
 
export default EditBudget;