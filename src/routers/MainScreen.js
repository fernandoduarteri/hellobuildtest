import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import ProfileScreen from '../components/repositories/ProfileScreen'
import RepositoriesScreen from '../components/repositories/RepositoriesScreen'

const MainScreen = () => {
    return (
        <>
           

            <div className="container mt-5">

                <Switch>
                    <Route exact path="/repositories" component={ RepositoriesScreen } />
                    <Route exact path="/profile" component={ ProfileScreen } />
                    <Redirect to ="/repositories" />
                </Switch>
            </div>
        </>
    )
}

export default MainScreen
