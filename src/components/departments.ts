export interface Employee {
    firstName: string;
}

export interface Department {
    name: string;
    employees: Employee[];
}

export const departments: Department[] = [
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
