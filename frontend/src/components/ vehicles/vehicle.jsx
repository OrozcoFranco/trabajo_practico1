import { useState } from 'react'
import ReloadVehicles from './vehicle_reload.jsx'
import CreateVehicle from './vehicle_create.jsx'
import DeleteVehicle from './vehicle_delete.jsx'
import UpdateVehicle from './vehicle_update.jsx'

function Vehicle() {
    const [activeSection, setActiveSection] = useState('list') // por defecto lista

    const renderSection = () => {
        switch (activeSection) {
            case 'create':
                return <CreateVehicle />
            case 'list':
                return <ReloadVehicles />
            case 'delete':
                return <DeleteVehicle />
            case 'update':
                return <UpdateVehicle />
            default:
                return null
        }
    }

    return (
        <div style={{ padding: '1rem', color: 'white' }}>
            <h1 style={{ color: 'lightblue', textAlign: 'center', marginBottom: '2rem' }}>VEHÍCULOS</h1>
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                <button onClick={() => setActiveSection('create')}>Crear Vehículo</button>
                <button onClick={() => setActiveSection('list')}>Lista de Vehículos</button>
                <button onClick={() => setActiveSection('delete')}>Eliminar Vehículo</button>
                <button onClick={() => setActiveSection('update')}>Actualizar Vehículo</button>
            </nav>

            <div>
                <h3 style={{ color: 'LIGHTBLUE', textTransform: 'uppercase' }}>
                    {activeSection === 'create' && 'Crear Vehículo'}
                    {activeSection === 'list' && 'Lista de Vehículos'}
                    {activeSection === 'delete' && 'Eliminar Vehículo'}
                    {activeSection === 'update' && 'Actualizar Vehículo mediante Patente'}
                </h3>
                {renderSection()}
            </div>
        </div>
    )
}

export default Vehicle
