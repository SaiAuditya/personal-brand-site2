import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import BarChart from './components/experience';
import StackedBarChart from './components/overall';
import Intro from './components/intro';
import Horizontaltimeline from './components/horizontaltimeline';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <StackedBarChart></StackedBarChart>
      <BarChart></BarChart>
      <Horizontaltimeline></Horizontaltimeline>
    </div>
  );
}

export default App;
