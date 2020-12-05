import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpence} from './components/IncomeExpence'
import {TransectionList} from './components/TransectionList'
import {AddTransection} from './components/AddTransection'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpence/>
        <TransectionList/>
        <AddTransection/>

      </div>
          </GlobalProvider>
  );
}

export default App;
