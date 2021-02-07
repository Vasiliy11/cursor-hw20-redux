import './App.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container">
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
