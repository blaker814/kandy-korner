import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3>{employee.name}</h3>
        <p>Manager: {employee.isManager ? "Yes" : "No"}</p>
        <p>Full Time: {employee.isFullTime ? "Yes" : "No"}</p>
        <p>Hourly Rate: ${employee.rate}</p>
        <p>Location: {employee.location.name}</p>
    </section>
)