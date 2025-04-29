import { useState } from 'react'

function CreateRepair({ onRepairAdded }) {
    const [formData, setFormData] = useState({ vehicle_patente: '', date_repair: '', description_repair: '', work_done: '', cost: '' })
    const [message, setMessage] = useState(null)

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:5021/api/add_repair', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setMessage(data.error)
            } else {
                setMessage('Reparación agregada con éxito')
                onRepairAdded && onRepairAdded(data.repair) // opcional
                setFormData({ vehicle_patente: '', date_repair: '', description_repair: '', work_done: '', cost: '' })
            }
        })
    }

    return (
        <div style={{ color: 'green' }}>
            <h3>Agregar Reparación</h3>
            <form onSubmit={handleSubmit}>
                <input name="vehicle_patente" placeholder="Patente del Vehículo" value={formData.vehicle_patente} onChange={handleChange} required />
                <input name="date_repair" type="date" value={formData.date_repair} onChange={handleChange} required />
                <input name="description_repair" placeholder="Descripción de la reparación" value={formData.description_repair} onChange={handleChange} required />
                <input name="work_done" placeholder="Trabajo realizado" value={formData.work_done} onChange={handleChange} required />
                <input name="cost" type="number" placeholder="Costo" value={formData.cost} onChange={handleChange} required />
                <button type="submit">Agregar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default CreateRepair
