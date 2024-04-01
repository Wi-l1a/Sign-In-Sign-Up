import React from 'react'
import s from './SignUp.module.sass'
import { NavLink, Input, Button } from '../../shared/Shared'
import { FaCircleArrowLeft } from 'react-icons/fa6'
const SignUp = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.box}>
                    <h2>Welcome to <span>Sign-Up</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima consequatur alias distinctio libero modi qui similique.</p>
                    <h3>Create Account</h3>
                    <form>
                        <Input type={'email'} name={'name'} label={'Name'} />
                        <Input type={'email'} name={'email'} label={'Email'} />
                        <Input type={'password'} name={'сonfirm-password'} label={'Confirm password'} />
                        <Button onClick={() => console.log('test')}>Sign-Up</Button>
                    </form>
                    <NavLink to={'/sign-in'}>Already have an account?</NavLink>
                </div>
            </div>
            <div className={s.sidebar}></div>
        </section>
    )
}

export default SignUp