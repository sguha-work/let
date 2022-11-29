import './ListExpense.css';
function ListExpense(props) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Mark</th>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default ListExpense;