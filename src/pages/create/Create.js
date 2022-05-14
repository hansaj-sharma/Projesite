//styles
import './Create.css'

import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]
export default function Create() {

    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])
    const [formError, setFormError] = useState(null)
    const { documents } = useCollection('users')
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (documents) {
            setUsers(documents.map(user => {
                return { value: { ...user, id: user.id }, label: user.displayName }
            }))
        }
    }, [documents])



    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError(null)

        if (!category) {
            setFormError('Please select a project category')
            return
        }
        if (assignedUsers.length < 1) {
            setFormError('please assign project ro atleast one user')
            return
        }

        console.log(category, dueDate, assignedUsers)
    }
    return (
        <div className="create-form">
            <h2 className="page-title">
                Create new Project
            </h2>

            <form onSubmit={handleSubmit}>
                <label >
                    <span>Project name:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                </label>
                <label >
                    <span>Project details:</span>
                    <textarea
                        required
                        type="text"
                        onChange={(e) => setDetails(e.target.value)}
                        value={details} />
                </label>
                <label >
                    <span>Project due date:</span>
                    <input
                        required
                        type="date"
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate} />
                </label>
                <label>
                    <span>Project category:</span>
                    <Select
                        options={categories}
                        onChange={(option) => {
                            setCategory(option)
                        }} />
                </label>
                <label>
                    <span>Assign to:</span>
                    <Select
                        onChange={(option) => setAssignedUsers(option)}
                        options={users}
                        isMulti
                    />
                </label>
                <button className="btn">Add Project</button>
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}
