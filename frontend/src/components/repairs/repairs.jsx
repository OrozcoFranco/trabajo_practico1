import { useState } from 'react'
import ReloadRepairs from './repair_reload.jsx'
import CreateRepair from './repair_create.jsx'
import DeleteRepair from './repair_delete.jsx'
import UpdateRepair from './repair_update.jsx'

function Repair() {
    const [activeSection, setActiveSection] = useState('list') // por defecto lista

    const renderSection = () => {
        switch (activeSection) {
            case 'create':
                return <CreateRepair />
            case 'list':
                return <ReloadRepairs />
            case 'delete':
                return <DeleteRepair />
            case 'update':
                return <UpdateRepair />
            default:
                return null
        }
    }

    return (
        <div style={{ padding: '1rem', color: 'white' }}>
            <h1 style={{ color: 'lightblue', textAlign: 'center', marginBottom: '2rem' }}>REPARACIONES</h1>
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                <button onClick={() => setActiveSection('create')}>Crear Reparación</button>
                <button onClick={() => setActiveSection('list')}>Lista de Reparaciones</button>
                <button onClick={() => setActiveSection('delete')}>Eliminar Reparación</button>
                <button onClick={() => setActiveSection('update')}>Actualizar Reparación</button>
            </nav>

            <div>
                <h3 style={{ color: 'lightblue', textTransform: 'uppercase' }}>
                    {activeSection === 'create' && 'Crear Reparación'}
                    {activeSection === 'list' && 'Lista de Reparaciones'}
                    {activeSection === 'delete' && 'Eliminar Reparación'}
                    {activeSection === 'update' && 'Actualizar Reparación mediante ID'}
                </h3>
                {renderSection()}
            </div>
        </div>
    )
}

export default Repair
