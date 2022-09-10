import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UseroProfile from './components/UserProfile'
import {useSelector} from 'react-redux'
function App() {
  const is_loged = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Header />
      {!is_loged && <Auth />}
      {is_loged && <UseroProfile />}
      <Counter />
    </>
  );
}

export default App;
