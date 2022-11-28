// importing stylesheets
import './App.css';

// importing library dependencies
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing self dependencies
import Layout from './pages/Layout/LayOut';
import Home from './pages/Home/Home';
import PaymentType from './pages/PaymentType/PaymentType';
import ExpenseCategory from './pages/ExpenseCategory/ExpenseCategory';
import NoPage from './pages/NoPage/NoPage';// this is the 404 page
function App() {
  return (
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
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
