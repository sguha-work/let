import { useState, useEffect } from "react";
import PaymentTypeService from './../../services/PaymentTypeService';
function PaymentTypeDropdown() {
    const [paymentTypes, setPaymentTypes] = useState([]);
    const paymentTypeService = PaymentTypeService.getInstance();
    useEffect(() => {
        (async () => {
            const types = await paymentTypeService.get();
            if(typeof types!=='undefined') {
                setPaymentTypes(types);
            } else {
                setPaymentTypes([]);
            }
        })();
    }, []);
    window.addEventListener(paymentTypeService.dbUpdatedEventName, async () => {
        const types = await paymentTypeService.get();
        setPaymentTypes(types);
    });
    return (
        <select>
            {paymentTypes.map((type) => (
                <option value={type.value} key={(type.id?type.id:"xxx")}>{type.name}</option>
            ))}
        </select>
    );
}
export default PaymentTypeDropdown;