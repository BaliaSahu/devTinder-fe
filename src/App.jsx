import {BrowserRouter,Routes, Route} from "react-router-dom"
import{Provider}from 'react-redux'
import './App.css'
// import Navbar from './Navbar'
import Body from "./components/Body"
import Login from "./components/Login"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Profile from "./components/Profile"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Premium from "./components/Premium"
import Pm from "./components/Pm"

function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Feed></Feed>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/connections" element={<Connections></Connections>}></Route>
            <Route path="/requests" element={<Requests></Requests>}></Route>
            <Route path="/Premium" element={<Premium></Premium>}></Route>
            <Route path="/pm" element={<Pm></Pm>}></Route>
           </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
