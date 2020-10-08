import React, { useEffect } from "react"
import { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            {
                employees.map(employee => { 
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
    )
}