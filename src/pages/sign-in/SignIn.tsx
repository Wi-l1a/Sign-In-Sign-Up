import React from 'react'
import s from './SignIn.module.sass'
import { Button, NavLink, Input } from '../../shared/Shared'
import { FaCircleArrowRight } from 'react-icons/fa6'

const SignIn = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.box}>
          <h2>Welcome to <span>Sign-In</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima consequatur alias distinctio libero modi qui similique.</p>
          <h3>Login In</h3>
          <form>
            <Input type={'email'} name={'email'} label={'Email'} />
            <Input type={'password'} name={'password'} label={'Password'} />
            <Button onClick={() => console.log('test')}>Sign-in</Button>
          </form>
          <NavLink to={'/forgot-password'}>Forgot your password?</NavLink>
          <NavLink to={'/sign-up'}>Don't have an account yet?</NavLink>
        </div>
      </div>
      <div className={s.sidebar}>

      </div>
    </section>
  )
}

export default SignIn