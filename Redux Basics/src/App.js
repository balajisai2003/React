import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
function App() {

  const auth = useSelector(({auth}) => auth.isAuthenticated);

  return (
    <Fragment>
      <Header/>
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
