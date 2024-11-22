import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/AuthStore';

const Header = () => {

  const auth = useSelector(({auth}) => auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && 
          <>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>{dispatch(authActions.logout())}}>Logout</button>
          </li>
          </>
          }
          {
          !auth &&
          <li>
            <button onClick={()=>{dispatch(authActions.login())}}>Login</button>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
