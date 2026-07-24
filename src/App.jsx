import {Navigate, Route, Routes} from 'react-router-dom'
import './styles/App.css'

import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Ledger from './pages/Ledger.jsx'
import Goals from './pages/Goals.jsx'
import Reports from './pages/Reports.jsx'

export default function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/ledger' element={<Ledger/>}/>
                <Route path='/goals' element={<Goals/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </>
    )
}