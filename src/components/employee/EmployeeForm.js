import React, { useContext, useRef, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({})

    const name = useRef()
    const location = useRef()
    const rate = useRef()
    const manager = useRef()
    const fullTime = useRef()

    const handleInputChange = event => {
        const newEmployee = { ...employee }
        let newValue;
        if (event.target.value === "true") {
            newValue = true
        } else {
            newValue = false
        }
        newEmployee[event.target.name] = newValue
        setEmployee(newEmployee)
    }

    const constructNewEmployee = () => {
        if (location.value === "0") {
            alert("Please choose a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: parseInt(location.current.value),
                isManager: employee.isManager,
                isFullTime: employee.isFullTime,
                rate: parseInt(rate.current.value)
            })
            .then(() => history.push("/employees"))
        }
    }

    useEffect(() => {
        getLocations()
    }, [])

    const history = useHistory()
    

    return (
        <section>
            <h2>New Employee</h2>
            <fieldset>
                <label htmlFor="employeeName">Name: </label>
                <input type="text" id="employeeName" ref={name} required autoFocus placeholder="Full Name..." />
            </fieldset>
            <fieldset>
                <label htmlFor="employeeLocation">Assign to Location: </label>
                <select id="employeeLocation" ref={location} placeholder="Location..." > 
                    <option value="0" hidden>Select a Location</option>
                    {
                        locations.map(location => {
                            return <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        })
                    }
                </select>
            </fieldset>
            <fieldset>
                <div>
                    <h4>Are you a Manager?</h4>
                    <input type="radio" id="true" name="isManager" value="true" onChange={handleInputChange} />
                    <label htmlFor="true">Yes</label><br />
                    <input type="radio" id="false" name="isManager" value="false" onChange={handleInputChange} />
                    <label htmlFor="false">No</label>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <h4>Are you Full Time?</h4>
                    <input type="radio" id="yes" name="isFullTime" value="true" onChange={handleInputChange} />
                    <label htmlFor="yes">Yes</label><br />
                    <input type="radio" id="no" name="isFullTime" value="false" onChange={handleInputChange} />
                    <label htmlFor="no">No</label>
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="employeeRate">Rate: </label>
                <input type="number" id="employeeName" ref={rate} placeholder="Hourly Rate..." />
            </fieldset>
            <button type="submit" onClick={event => {
                event.preventDefault()
                constructNewEmployee()
            }}>Add Employee</button>
        </section>
    )
}