import { useState } from "react";
import Information from "../components/information/information";
import FormComponent from "../components/form/form";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

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


function EmployeesPage () {
    const [departments, setDepartments] = useState<Department[]>(initialDepartments);

    return (
        <>
            <Information departments={departments} />
            
            <FormComponent departments={departments} setDepartments={setDepartments} />
        </>
    );
}

export default EmployeesPage ;