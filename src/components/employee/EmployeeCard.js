import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3>{employee.name}</h3>
        <div>Manager: {employee.isManager ? "Yes" : "No"}</div>
        <div>Full Time: {employee.isFullTime ? "Yes" : "No"}</div>
        <div>Hourly Rate: ${employee.rate}</div>
        <div>Location: {employee.location.name}</div>
    </section>
)