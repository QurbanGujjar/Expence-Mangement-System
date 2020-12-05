import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpence} from './components/IncomeExpence'
import {TransectionList} from './components/TransectionList'
import {AddTransection} from './components/AddTransection'

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpence/>
        <TransectionList/>
        <AddTransection/>

      </div>
          </div>
  );
}

export default App;
