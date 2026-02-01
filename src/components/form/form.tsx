import { useState } from "react";
import type { Department } from "../../Pages/EmployeesPage";

function FormComponent({
    departments,
    setDepartments
}: {
    departments: Department[];
    setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}) {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (name.trim().length < 3) {
            setError("First name must be at least 3 characters.");
            return;
        }

        if (!department) {
            setError("Please select a department.");
            return;
        }

        const newDepartments = departments.map(d =>
            d.name === department
                ?{...d,employees: [
                    ...d.employees,
                        { firstName: name.trim() }
                    ]
                }: d
        );

        setDepartments(newDepartments);
        setName("");
        setDepartment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="First Name"
            />

            <br />

            <label>
                Pick Department:
                <select
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {departments.map(d => (
                        <option key={d.name} value={d.name}>
                            {d.name}
                        </option>
                    ))}
                </select>
            </label>

            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
