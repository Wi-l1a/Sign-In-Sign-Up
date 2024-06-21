import React, { FormEvent } from 'react'
import s from './ForgotPassword.module.sass'
import { NavLink, Input, Button } from '../../shared/Shared'
import bg from '../../assets/bg_sign-up.jpg'
const ForgotPassword = () => {

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
                    <h2>Welcome to <span>Forgot-Password</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima consequatur alias distinctio libero modi qui similique.</p>
                    <h3>Password Recovery</h3>
                    <form onSubmit={handlerSubmit}>
                        <Input type={'text'} name={'email'} label={'Email'} />
                        <Button>Send</Button>
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

export default ForgotPassword