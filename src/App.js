import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar.js';
import Footer1 from "./Components/Footer1.js";
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom'

import Home from "./Pages/Home.js";
import CupFlavour from './Pages/CupFlavour.js'
import ConeFlavour from "./Pages/ConeFlavour.js";
import ContactUs from "./Pages/ContactUs.js";
import Receipt from "./Pages/Receipt.js";
import ClickContext from './context/ClickContext'
import Signin from "./Pages/Signin.js";
import Login from "./Pages/Login.js";
import { app } from './Components/Firebase.js'
import About from './Pages/About.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


function App() {
    const [databs, setDatabs] = useState({})
    const [findUser,setFindUser]=useState(null)
    const auth=getAuth(app)
    const fromCup = (name, price, grand, tax, count) => {
        setDatabs({
            name: name,
            tax: tax,
            price: price,
            grand: grand,
            count: count
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFindUser(user)
            }
          
        });
    }, [auth])

    return (
        <>
            <ClickContext.Provider value={databs}>

                <div>
                    <Router>
                        <div className="top-things">

                            <Navbar user={findUser} />
                        </div>
                        <Routes>
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Signin" element={<Signin />} />
                          
                            <Route path="/" element={<Home />} />
                            <Route path="/Receipt" element={<Receipt />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/ContactUs" element={<ContactUs />} />
                            <Route path="/Cupflavour" element={<CupFlavour data={fromCup} />} />
                            <Route path="/Coneflavour" element={<ConeFlavour data={fromCup} />} />
                         
                        </Routes>
                        <div className="bottom-things">
                            <Footer1 />
                        </div>

                    </Router>
                </div>
            </ClickContext.Provider>
        </>
    );
}
export default App;