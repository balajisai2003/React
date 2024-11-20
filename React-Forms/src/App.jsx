import Header from './components/Header.jsx';
import RefLogin from './components/Login.jsx';
import StateLogin from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <RefLogin />
        <StateLogin />
      </main>
    </>
  );
}

export default App;
