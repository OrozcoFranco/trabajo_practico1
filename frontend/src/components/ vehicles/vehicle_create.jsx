/* import { useState } from 'react'

function CreateVehicle({ onVehicleAdded }) {
    const [formData, setFormData] = useState({ patente: '', marca: '', modelo: '', año: '' })
    const [message, setMessage] = useState(null)

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:5021/api/add_vehicle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setMessage(data.error)
            } else {
                setMessage('Vehículo agregado con éxito')
                onVehicleAdded(data.vehicle) // notificar al padre
                setFormData({ patente: '', marca: '', modelo: '', año: '' })
            }
        })
    }

    return (
        <div style={{ color: 'green' }}>
            <h3>Agregar Vehículo</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="patente"
                    placeholder="Patente"
                    value={formData.patente}
                    onChange={handleChange}
                    required
                />
                <input
                    name="marca"
                    placeholder="Marca"
                    value={formData.marca}
                    onChange={handleChange}
                    required
                />
                <input
                    name="modelo"
                    placeholder="Modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    required
                />
                <input
                    name="año"
                    placeholder="Año"
                    value={formData.año}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Agregar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default CreateVehicle
 */

import { useState } from 'react'

function CreateVehicle({ onVehicleAdded }) {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        patente: '',
        year_vehicles: '',
        cost: '',
        id_client: ''
    });
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación para asegurarse de que todos los campos estén completos
        if (!formData.brand || !formData.model || !formData.patente || !formData.year_vehicles || !formData.cost || !formData.id_client) {
            setError('Por favor, completá todos los campos');
            return;
        }

        fetch('http://localhost:5021/api/add_vehicle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setMessage(data.error);
                setError('');
            } else {
                setMessage('Vehículo agregado con éxito');
                setError('');
                onVehicleAdded(data.vehicle); // notificar al padre
                setFormData({ 
                    brand: '', 
                    model: '', 
                    patente: '', 
                    year_vehicles: '', 
                    cost: '', 
                    id_client: '' 
                });
            }
        })
        .catch(err => {
            setMessage('');
            setError('Error en la solicitud, intente nuevamente');
        });
    };

    return (
        <div style={{ color: 'green' }}>
            <h3>Agregar Vehículo</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="brand"
                    placeholder="Marca"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                />
                <input
                    name="model"
                    placeholder="Modelo"
                    value={formData.model}
                    onChange={handleChange}
                    required
                />
                <input
                    name="patente"
                    placeholder="Patente"
                    value={formData.patente}
                    onChange={handleChange}
                    required
                />
                <input
                    name="year_vehicles"
                    placeholder="Año"
                    type="number"
                    value={formData.year_vehicles}
                    onChange={handleChange}
                    required
                />
                <input
                    name="cost"
                    placeholder="Costo"
                    type="number"
                    value={formData.cost}
                    onChange={handleChange}
                    required
                />
                <input
                    name="id_client"
                    placeholder="ID del Cliente"
                    type="number"
                    value={formData.id_client}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Agregar</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default CreateVehicle;
