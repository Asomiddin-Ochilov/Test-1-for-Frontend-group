import React from "react";
import {Switch , Route } from "react-router-dom"
import SingUp from "./cabinet/Singup";
import Cabinet from "./cabinet/cabinat";
import "./app.css"
import useLocalStorage from "use-local-storage";
function App() {

    const [username, setUsername] = useLocalStorage("name", "");
    const [lastname, setLastname] = useLocalStorage("na", "");
    return(
        <div className={'container-fluid'}>
        <Switch>
            <Route  path={'/cabinet'}>
                <Cabinet user={username} last={lastname}/>
            </Route>
            <Route  path={'/'} >
                <SingUp setUser={setUsername} setLast={setLastname}/>
            </Route>
        </Switch>
        </div>
    )

}

export default App