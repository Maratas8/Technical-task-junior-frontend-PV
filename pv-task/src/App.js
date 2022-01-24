import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-blue-800 xl:m-8 lg:m-4 m-2 flex h-full flex-col lg:flex-row">
      <Sidebar />
      <Main />

    </div>
  );
}

export default App;
