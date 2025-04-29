import { useEffect, useState } from 'react'

function ReloadRepairs({ onRepairsLoaded }) {
    const [repairs, setRepairs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5021/api/repairs')
        .then(res => {
            if (!res.ok) throw new Error('Error al obtener reparaciones')
            return res.json()
        })
        .then(data => {
            setRepairs(data)
            onRepairsLoaded && onRepairsLoaded(data)
        })
        .catch(err => console.error(err.message))
    }, [])

    return (
        <div>
            <ul>
                {repairs.map(repair => (
                    <li style={{ color: 'white' }} key={repair.id_repair}>
                        Vehículo: {repair.vehicle_patente} - Fecha: {repair.date_repair} - Trabajo: {repair.work_done} - Costo: ${repair.cost}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReloadRepairs
