const ViewBudget = ({ budget, handleEditClick }) => {
    return ( 
        <>
            <span>Salary: {budget} din</span>
            <button type="button" className="btn btn-primary" onClick={handleEditClick}>Edit</button>
        </>
     );
}
 
export default ViewBudget;