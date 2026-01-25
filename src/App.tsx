import { useState } from "react";
import "./App.css"
import Information from "./components/information";
import FormComponent from "./components/form";

export interface Employee {
    firstName: string;
}

export interface Department {
    name: string;
    employees: Employee[];
}

const initialDepartments: Department[] = [
    {
        name: "Finance",
        employees: [
            { firstName: "Alice" },
            { firstName: "Mark" }
        ]
    },
    {
        name: "HR",
        employees: [
            { firstName: "Sarah" }
        ]
    },
    {
        name: "IT",
        employees: [
            { firstName: "Joe" }
        ]
    }
];


function App() {
    const [departments, setDepartments] = useState<Department[]>(initialDepartments);

    return (
        <>
            <div className="info">
                <Information departments={departments} />
            </div>

            <div className="form-container">
                <FormComponent departments={departments} setDepartments={setDepartments} />
            </div>
        </>
    );
}

export default App;
