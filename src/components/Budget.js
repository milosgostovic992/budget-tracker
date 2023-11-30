import { AppContext } from "../context/AppContext";
import React, { useState, useContext } from 'react';
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {

    const { budget, dispatch} = useContext(AppContext); 
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = (e) => {
        setIsEditing(true);
    };

    const saveHandler = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
        setIsEditing(false);
     };

    return ( 
        <div className="alert alert-success alert-link p-3 d-flex align-items-center justify-content-between">
            {isEditing ? (
                <EditBudget handleSaveClick={saveHandler} budget={budget} />
            ) : (
                <ViewBudget handleEditClick={editHandler} budget={budget} />
            )}
        </div>
     );
};
 
export default Budget;