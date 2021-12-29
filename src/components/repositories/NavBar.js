import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const NavBar = () => {


    const { name } = useSelector(state => state.auht);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(startLogout());
    }

    return (
        <div className="container-fluid">
        <div className="navbar navbar-dark bg-dark mb-4">
        <Link to={`./profile`}> {name} ...</Link>
            <button className="btn btn-outline-danger" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i><span> Logout</span></button>
        </div>
        </div>
    )
}

export default NavBar
