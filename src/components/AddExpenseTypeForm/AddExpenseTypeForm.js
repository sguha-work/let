import { useState } from "react";
import './AddExpenseTypeForm.css';
import ExpenseTypeService from '../../services/ExpenseTypeService';
function AddExpenseTypeForm() {
    const [expenseType, setExpenseType] = useState([]);
    const expenseTypeService = ExpenseTypeService.getInstance();
    const expenseTypeInputboxChangeHandler = (event)=>{
        setExpenseType(event.target.value);
    }
    const addExpenseType = async(event)=>{
        event.preventDefault();
        try {
        await expenseTypeService.set({
            name: expenseType,
            value: expenseType.toLowerCase()
        });
        alert(`Expense type: ${expenseType} added successfully!`);
    } catch(error) {
        alert('Adding data failed');
    }
    }
    return (
        <>
            <form onSubmit={addExpenseType}>
                <div className="row">
                    <div className="col">
                        <input type="text" id="expenseType" name="expenseType" placeholder="Expense type name.." value={expenseType} onChange={expenseTypeInputboxChangeHandler}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className='col-50'>
                        <input type="submit" value="Submit" />
                    </div>
                    <div className='col-50'>
                    </div>
                </div>
            </form>
        </>
    );
}
export default AddExpenseTypeForm;