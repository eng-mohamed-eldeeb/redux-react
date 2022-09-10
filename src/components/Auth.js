import classes from './Auth.module.css';
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux/es/exports';
const Auth = () => {
  const dispatch = useDispatch();
  const loginHandeler = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandeler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
