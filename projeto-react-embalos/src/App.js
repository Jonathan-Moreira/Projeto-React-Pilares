import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DatailsPage';
import { Homepage } from "./pages/Homepage/Homepage"
import { results } from "./data/data"



function App() {
  return (
    <div className="App">
      <Homepage results={results}/>
      <GlobalStyle/>
       
    {/* <DetailsPage/> */}
    </div>
  );
}



export default App;
