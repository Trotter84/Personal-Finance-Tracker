// import {useState} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'

import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Transactions from './pages/Transactions.jsx'
import Goals from './pages/Goals.jsx'
import Reports from './pages/Reports.jsx'

function App() {
    // const location = useLocation()

    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='/goals' element={<Goals/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </>
    )
}

export default App
