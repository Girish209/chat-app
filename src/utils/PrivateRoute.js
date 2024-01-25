import {Route, Navigate} from "react-router-dom"
import {useContext} from "react"
import AuthContext from "../context/AuthContext"
import Welcome from "../Pages/Welcome"


const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return user ? <Welcome /> : <Navigate to="/login" />
}

export default PrivateRoute