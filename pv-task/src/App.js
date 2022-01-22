import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-blue-800 m-8 flex mx-12 h-full">
      <Sidebar />
      <Main />

    </div>
  );
}

export default App;
