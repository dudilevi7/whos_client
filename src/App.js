import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Copyright from './components/Copyright/Copyright';
import {  LoaderSpinner } from './components/Exceptions/Exceptions';
import Header from './containers/Header/Header';
import Routes from './routes/routes';
import './App.css';

const App = () => {
  const authData = useSelector(state => state.auth);

  if (authData.isLoading) {
    return <LoaderSpinner />
  }

  return (
      <BrowserRouter>
          <div className="App">
            <Header/>
            <Routes/>
            <Copyright/>
          </div>
      </BrowserRouter>
  );
}



export default App;
