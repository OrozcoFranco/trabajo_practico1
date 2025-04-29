import { useState } from 'react'

function UpdateVehicle() {
    const [patente, setPatente] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [año, setAño] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!patente || !marca || !modelo || !año) {
            setError('Por favor, completá todos los campos')
            return
        }

        fetch(`http://localhost:5021/api/up_vehicle/${patente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marca, modelo, año })
        })
        .then(res => {
            if (!res.ok) throw new Error('No se pudo actualizar el vehículo')
            return res.json()
        })
        .then(data => {
            setMessage(data.message)
            setError('')
        })
        .catch(err => {
            setMessage('')
            setError(err.message)
        })
    }

    return (
        <div style={{ color: 'white' }}>
            <h2>Actualizar Vehículo</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Patente del vehículo:</label>
                    <input type="text" value={patente} onChange={e => setPatente(e.target.value)} />
                </div>
                <div>
                    <label>Marca:</label>
                    <input type="text" value={marca} onChange={e => setMarca(e.target.value)} />
                </div>
                <div>
                    <label>Modelo:</label>
                    <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} />
                </div>
                <div>
                    <label>Año:</label>
                    <input type="text" value={año} onChange={e => setAño(e.target.value)} />
                </div>
                <button type="submit">Actualizar</button>
            </form>

            {message && <p style={{ color: 'lightgreen' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default UpdateVehicle
