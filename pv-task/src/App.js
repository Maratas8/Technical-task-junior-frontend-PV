import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="bg-blue-800 xl:m-8 lg:m-4 m-2 flex h-full flex-col lg:flex-row">
      <SideBar />
      <Main />

    </div>
  );
}

export default App;
