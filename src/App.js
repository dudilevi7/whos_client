import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Copyright from './components/Copyright/Copyright';
import {  LoaderSpinner } from './components/Exceptions/Exceptions';
import Header from './containers/Header/Header';
import Routes from './routes/routes';

const App = props => {
  const authData = useSelector(state => state.auth);

  useEffect(() => {
    if (authData)
      console.log(authData)
  }, [authData])

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
