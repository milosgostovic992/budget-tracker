import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const ExpenseItem = ({name, cost, id}) => {

const {dispatch} = useContext(AppContext);

const deleteHandler = () => {
    dispatch({
        type: 'DELETE_EXPENSE',
        payload: id
    })
};

    return ( 
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>{cost} din</span>
                <TiDelete className='button-delete' size='1.5em' onClick={deleteHandler}/>
            </div>
        </li>
     );
}
 
export default ExpenseItem;