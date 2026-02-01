import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "../src/Layout/Layout";
import EmployeesPage  from "./Pages/EmployeesPage"
import OrganizationPage from "./Pages/OrganizationPage";


function App() {

    return (
        <>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/organization" element={<OrganizationPage />} />
                </Route>
            </Routes>
        </Router>
        </>
    );

}

export default App;
