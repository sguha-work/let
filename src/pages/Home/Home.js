import './Home.css';
import AddExpenceForm from './../../components/AddExpenseForm/AddExpenseForm';
import ListExpense from '../../components/ListExpense/ListExpense';
import AddExpenseTypeForm from '../../components/AddExpenseTypeForm/AddExpenseTypeForm';
import AddPaymentTypeForm from '../../components/AddPaymentTypeForm/AddPaymentTypeForm';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3>Add new expense</h3>
                    <AddExpenceForm />
                </div>
                <div className="col">
                    <h3>Today's expenses</h3>
                    <ListExpense />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Add new expense category</h3>
                    <AddExpenseTypeForm />
                </div>
                <div className="col">
                    <h3>Add new payment type</h3>
                    <AddPaymentTypeForm />
                </div>
            </div>
        </div>
    );
}
export default Home;