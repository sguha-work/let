import { useState } from "react";
import './AddPaymentTypeForm.css';
import PaymentTypeService from './../../services/PaymentTypeService';
function AddPaymentTypeForm() {
    const [paymentType, setPaymentType] = useState([]);
    const paymentTypeService = PaymentTypeService.getInstance();
    const paymentTypeInputboxChangeHandler = (event)=>{
        setPaymentType(event.target.value);
    }
    const addPaymentType = async(event)=>{
        event.preventDefault();
        try {
        await paymentTypeService.set({
            name: paymentType,
            value: paymentType.toLowerCase()
        });
        alert(`Payment type: ${paymentType} added successfully!`);
    } catch(error) {
        alert('Adding data failed');
    }
    }
    return (
        <>
            <form onSubmit={addPaymentType}>
                <div className="row">
                    <div className="col">
                        <input type="text" id="paymentType" name="paymentType" placeholder="Payment type name.." value={paymentType} onChange={paymentTypeInputboxChangeHandler}/>
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
export default AddPaymentTypeForm;