import organizationData from "../Data/organization.json";
import type { Role } from "../Types/Role";

function OrganizationPage() {
    const roles: Role[] = organizationData;

    return (
        <main>
            <h2>Organization</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((r, index) => (
                        <tr key={index}>
                            <td>{r.firstName} {r.lastName}</td>
                            <td>{r.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default OrganizationPage;