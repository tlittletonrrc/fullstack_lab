import "./App.css";

interface Employee {
  firstName: string;
  lastName?: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

const departments: Department[] = [
  {
    name: "Finance",
    employees: [
      { firstName: "Alice", lastName: "Jones" },
      { firstName: "Mark" }
    ]
  },
  {
    name: "HR",
    employees: [{ firstName: "Sarah", lastName: "Chen" }]
  }
];

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <h1><img src="../1Capture.PNG" alt="Pixell River Logo"/>Pixell River Employee Directory</h1>

        <p>Welcome to pixell river directory</p>
      </header>
      
        {departments.map(dept => (
          <section key={dept.name}>
            <h2>{dept.name}</h2>
            <ul>
              {dept.employees.map((emp, idx) => (
                <li key={idx}>
                  {emp.firstName} {emp.lastName ?? ""}
                </li>
              ))}
            </ul>
          </section>
        ))}

      <footer>
        Copyright Pixell River Financial {year}.
      </footer>
    </>
  );
}

export default App;
