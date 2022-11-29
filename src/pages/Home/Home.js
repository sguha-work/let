import './Home.css';
import AddExpenceForm from './../../components/AddExpenseForm/AddExpenseForm';
import ListExpense from '../../components/ListExpense/ListExpense';
function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <AddExpenceForm />
                </div>
                <div className="col">
                    <h3>Today's expenses</h3>
                    <ListExpense></ListExpense>
                </div>

            </div>
        </div>
    );
}
export default Home;