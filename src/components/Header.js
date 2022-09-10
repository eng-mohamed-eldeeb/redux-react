import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { authActions } from '../store/authSlice';
const Header = () => {
  const is_loggedin = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {is_loggedin && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
