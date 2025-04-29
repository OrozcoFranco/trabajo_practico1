import React, { useState } from 'react';

function DeleteVehicle({ onDeleted }) {
    const [patente, setPatente] = useState('');

    const handleDelete = () => {
        if (!patente) {
            alert('Por favor ingrese una patente válida');
            return;
        }
        
        fetch(`http://localhost:5021/api/del_vehicle/${patente}`, {
            method: 'DELETE',
        })
        .then(async (res) => {
            const data = await res.json();
            if (res.ok) {
                onDeleted(patente);
                alert('Vehículo eliminado correctamente');
                setPatente('');
            } else {
                alert(data.message || data.error || 'Error al eliminar vehículo');
            }
        })
        .catch(err => {
            console.error('Error:', err);
            alert('Refresque la página para mostrar cambios');
        });
    };

    return (
        <div>
            <input
                type="text"
                name="patente"
                placeholder="INGRESE PATENTE DEL VEHÍCULO A ELIMINAR"
                value={patente}
                onChange={(e) => setPatente(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
}

export default DeleteVehicle;
