import './styles/global.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button size="small" variant="filled" state="default">Small Filled Button</Button>
        <Button size="medium" variant="outline" state="hover">Medium Outline Button</Button>
        <Button size="large" variant="ghost" state="active">Large Ghost Button</Button>
      </header>
    </div>
  );
}
export default App;
