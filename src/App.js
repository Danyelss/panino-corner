import './App.css';
import PaniniPage from './PaniniPage';

function App() {
  const containerStyle = {
    backgroundColor: '#231f20',
    minHeight: '100vh',
    // Add other inline styles as needed
  };
  return (
    <div className="App" style={containerStyle}>
      <PaniniPage />
    </div>
  );
}

export default App;
