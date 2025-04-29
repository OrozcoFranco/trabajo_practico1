import { useEffect, useState } from 'react'

function ReloadVehicles({ onVehiclesLoaded }) {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5021/api/vehicles')
        .then(res => {
            if (!res.ok) throw new Error('Error al obtener vehículos')
            return res.json()
        })
        .then(data => {
            setVehicles(data)
            onVehiclesLoaded(data)
        })
        .catch(err => console.error(err.message))
    }, [])

    return (
        <div>
            <ul>
                {vehicles.map(vehicle => (
                    <li style={{ color: 'white' }} key={vehicle.patente}>
                        {vehicle.patente} - {vehicle.marca} {vehicle.modelo} - Año: {vehicle.año}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReloadVehicles
