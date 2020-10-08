export const EmployeeCard = ({ employee }) => {
    <section className="employee">
        <h3>{employee.name}</h3>
        <p>{employee.manager}</p>
        <p>{employee.fullTime}</p>
        <p>{employee.rate}</p>
        <p>{employee.location.name}</p>
    </section>
}