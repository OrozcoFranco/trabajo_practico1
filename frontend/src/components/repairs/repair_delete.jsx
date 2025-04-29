import { useState } from 'react'

function DeleteRepair({ onDeleted }) {
    const [idRepair, setIdRepair] = useState('')

    const handleDelete = () => {
        if (!idRepair) {
            alert('Por favor ingrese un ID de reparación válido')
            return
        }
        
        fetch(`http://localhost:5021/api/del_repair/${idRepair}`, {
            method: 'DELETE',
        })
        .then(async (res) => {
            const data = await res.json()
            if (res.ok) {
                onDeleted && onDeleted(idRepair)
                alert('Reparación eliminada correctamente')
                setIdRepair('')
            } else {
                alert(data.message || data.error || 'Error al eliminar reparación')
            }
        })
        .catch(err => {
            console.error('Error:', err)
            alert('Refresque la página para mostrar cambios')
        })
    }

    return (
        <div>
            <input
                type="number"
                name="id_repair"
                placeholder="Ingrese ID de reparación a eliminar"
                value={idRepair}
                onChange={(e) => setIdRepair(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    )
}

export default DeleteRepair
