// interface Department {
// 	name: string;
//   	employees: Employee[];
// }

// interface Employee {
// 	firstName: string;
//   	lastName?: string;
// }

document.addEventListener("DOMContentLoaded", () => {
    
    const footer = document.getElementById("footerText");
    const currentYear = new Date().getFullYear();
    footer.textContent = `Copyright Pixell River Financial ${currentYear}.`;
});
