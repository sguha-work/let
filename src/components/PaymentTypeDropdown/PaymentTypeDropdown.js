function PaymentTypeDropdown(){
    return (
        <select name="paymentType">
                            <option value="upi">UPI</option>
                            <option value="creadit_card">Credit card</option>
                            <option value="cash">Cash</option>
                        </select>
    );
}
export default PaymentTypeDropdown;