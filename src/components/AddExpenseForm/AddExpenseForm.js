import './AddExpenseForm.css';
function AddExpenseForm() {
    return (
        <>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Amaount</label>
                    </div>
                    <div className="col-75">
                        <input type="number" name="amount" placeholder="Amaount" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Category</label>
                    </div>
                    <div className="col-75">
                    <select name="category">
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="country">Payment type</label>
                    </div>
                    <div className="col-75">
                        <select name="paymentType">
                            <option value="upi">UPI</option>
                            <option value="creadit_card">Credit card</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">Description</label>
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