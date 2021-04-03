import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}