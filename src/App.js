
import './App.css';
import GamePage from './containers/GamePage/GamePage';
import Header from './containers/Header/Header';
import Homepage from './containers/Homepage/Homepage';

const App = () => {
  // // const fields = ["id","Question","Type","answers"];
  // // const { data , error , isLoading } = useFetch(WHOS_API);

  // if (isLoading) {
  //   return <LoaderSpinner/>
  // }

  // if (error) return <ErrorPage error={error}></ErrorPage>

  return (
    <div className="App">
        {/* <DashboardContainer fields = {fields} data = {data}/> */}
        <Header/>
        {/* <Homepage/> */}
        <GamePage/>
    </div>
  );
}

export default App;
