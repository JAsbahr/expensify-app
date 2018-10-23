import React from "react"
import { connect } from "react-redux"
import { startLoginGoogle } from "../actions/auth"

export const LoginPage = ({ startLoginGoogle }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className="button" onClick={startLoginGoogle}>Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

