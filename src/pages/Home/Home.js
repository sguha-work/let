import './Home.css';
import AddExpenceForm from './../../components/AddExpenseForm/AddExpenseForm';
function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <AddExpenceForm />
                </div>
                <div className="col">
                    2 of 2
                </div>

            </div>
        </div>
    );
}
export default Home;