import React from 'react'
import s from './Header.module.sass'
import { NavLink } from '../../shared/Shared'
const Header = () => {
    return (
        <div>
            <NavLink to={'/sign-in'}>sign-in</NavLink>
            <NavLink to={'/sign-up'}>sign-up</NavLink>
        </div>
    )
}

export default Header