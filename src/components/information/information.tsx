import type { Department } from "../../page/EmployeesPage";

function Information({ departments }: { departments: Department[] }) {
    return (
        <>
            {departments.map((dept) => (
                <section key={dept.name}>
                    <h2>{dept.name}</h2>
                    <ul>
                        {dept.employees.map((emp, idx) => (
                            <li key={idx}>{emp.firstName}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}

export default Information;
