import React, { FormEvent } from 'react'
import s from './SignUp.module.sass'
import { NavLink, Input, Button } from '../../shared/Shared'
import bg from '../../assets/bg_sign-up.jpg'
const SignUp = () => {

    const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        console.log(data);
    }


    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.box}>
                    <h2>Welcome to <span>Sign-Up</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima consequatur alias distinctio libero modi qui similique.</p>
                    <h3>Create Account</h3>
                    <form onSubmit={handlerSubmit}>
                        <Input type={'text'} name={'name'} label={'Name'} />
                        <Input type={'text'} name={'email'} label={'Email'} />
                        <Input type={'password'} name={'сonfirm-password'} label={'Confirm password'} />
                        <Button>Sign-Up</Button>
                    </form>
                    <NavLink to={'/sign-in'}>Already have an account?</NavLink>
                </div>
            </div>
            <div className={s.sidebar}>
                <img src={bg} alt="img" />
            </div>
        </section>
    )
}

export default SignUp