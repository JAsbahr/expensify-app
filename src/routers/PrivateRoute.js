import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import Header from "../components/Header";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,  // component als props in AppRouter, wird umbenannt in Component (muss später gerendered werden)
    ...rest // variable with all the props which did not get desctructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)