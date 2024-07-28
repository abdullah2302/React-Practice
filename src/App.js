import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Navbar titles="TextTitles" />
      <div className="container">
        <TextForm heading="Hello" />
      </div>

    </>
  );
}

export default App;
