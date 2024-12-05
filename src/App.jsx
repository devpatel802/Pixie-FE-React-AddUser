import './App.css';
import AddUser from './components/container/AddUserContainer/AddUser';
import Header from './components/container/HeaderContainer/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AddUser />
      </div>
    </div>
  );
}

export default App;
