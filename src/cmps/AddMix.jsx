import { useState } from "react"

export const AddMix = ({ onAddMix }) => {

    const [name, setName] = useState('')

    const handleChange = (ev) => {
        const { value } = ev.target
        setName(value)
    }

    return (
        <div className="add-mix">
            <form className="flex" onSubmit={(ev) => {
                ev.preventDefault()
                onAddMix(name)
                setName('')
            }}>
                <input className="full" type="text" placeholder="Mix name" value={name} name="name" required onChange={handleChange} />
                <button>Save</button>
            </form>
        </div>
    )
}
