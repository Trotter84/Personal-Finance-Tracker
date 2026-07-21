// import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import Transactions from './components/Transactions.jsx'
import Goals from './components/Goals.jsx'
import Reports from './components/Reports.jsx'

function App() {
    // const location = useLocation()

    return (
        <>
            {/*<TopBar />*/}
            <div>
                <Routes>
                    <Route exact path='/' element={<Dashboard/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/transactions' element={<Transactions/>}/>
                    <Route path='/goals' element={<Goals/>}/>
                    <Route path='/reports' element={<Reports/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
