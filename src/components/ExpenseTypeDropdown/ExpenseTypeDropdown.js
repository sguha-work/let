import { useState, useEffect } from "react";
import ExpenseTypeService from './../../services/ExpenseTypeService';
function ExpenseTypeDropdown() {
    const [expenseTypes, setExpenseTypes] = useState([]);
    const expenseTypeService = ExpenseTypeService.getInstance();
    useEffect(() => {
        (async () => {
            const types = await expenseTypeService.get();
            if(typeof types!=='undefined') {
                setExpenseTypes(types);
            } else {
                setExpenseTypes([]);
            }
        })();
    }, []);
    window.addEventListener(expenseTypeService.dbUpdatedEventName, async () => {
        const types = await expenseTypeService.get();
        setExpenseTypes(types);
    });
    return (
        <select>
            {expenseTypes.map((type) => (
                <option value={type.value} key={(type.id?type.id:"xxx")}>{type.name}</option>
            ))}
        </select>
    );
}
export default ExpenseTypeDropdown;