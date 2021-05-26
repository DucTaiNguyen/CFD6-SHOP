import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../hook/useAuth'
export default function PrivateRoute(prop) {
    // let { login } = useAuth()
    let { login } = useSelector(store => store.auth)
    if (!login) {
        console.log(login)
        return <Route>
            <Redirect to='/' />
        </Route>
    }

    return <Route {...prop} />
}