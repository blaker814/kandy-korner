import React, { useEffect } from "react"
import { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history=useHistory()
    
    return (
        <>
            <h2>Employees</h2>
            <button type="button" onClick={() => {
                history.push("/employees/create")
            }}>New Employee</button>
            <div className="employees">
                {
                    employees.map(employee => { 
                        return <EmployeeCard key={employee.id} employee={employee} />
                    })
                }
            </div>
        </>
    )
}