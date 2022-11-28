import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/LayOut';
import Home from './pages/Home/Home';
import PaymentType from './pages/PaymentType/PaymentType';
import ExpenseCategory from './pages/ExpenseCategory/ExpenseCategory';
import NoPage from './pages/NoPage/NoPage';
function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pt" element={<PaymentType />} />
          <Route path="ec" element={<ExpenseCategory />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
