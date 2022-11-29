import './AddExpenseForm.css';
import ExpenseCategoryDropdown from '../ExpenseTypeDropdown/ExpenseTypeDropdown';
import PaymentTypeDropdown from '../PaymentTypeDropdown/PaymentTypeDropdown';
function AddExpenseForm() {
    return (
        <>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                        <label>Amaount</label>
                    </div>
                    <div className="col-75">
                        <input type="number" name="amount" placeholder="Amaount" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Category</label>
                    </div>
                    <div className="col-75">
                    <ExpenseCategoryDropdown></ExpenseCategoryDropdown>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Payment type</label>
                    </div>
                    <div className="col-75">
                        <PaymentTypeDropdown></PaymentTypeDropdown>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Description</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write description.." style={{ "height": "200px" }}></textarea>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    );
}
export default AddExpenseForm;