import { useState } from 'react'

function UpdateRepair() {
    const [id, setId] = useState('')
    const [description_repair, setDescriptionRepair] = useState('')
    const [work_done, setWorkDone] = useState('')
    const [cost, setCost] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!id || !description_repair || !work_done || !cost) {
            setError('Por favor, completá todos los campos')
            return
        }

        fetch(`http://localhost:5021/api/up_repair/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description_repair, work_done, cost })
        })
        .then(res => {
            if (!res.ok) throw new Error('No se pudo actualizar la reparación')
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
            <h2>Actualizar Reparación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID de reparación:</label>
                    <input type="number" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label>Descripción de la reparación:</label>
                    <input type="text" value={description_repair} onChange={e => setDescriptionRepair(e.target.value)} />
                </div>
                <div>
                    <label>Trabajo realizado:</label>
                    <input type="text" value={work_done} onChange={e => setWorkDone(e.target.value)} />
                </div>
                <div>
                    <label>Costo:</label>
                    <input type="number" value={cost} onChange={e => setCost(e.target.value)} />
                </div>
                <button type="submit">Actualizar</button>
            </form>

            {message && <p style={{ color: 'lightgreen' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default UpdateRepair
