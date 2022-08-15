import { ThemeProvider } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="app">
        <header className="app-header text-center my-5">
          <h2>This is Mutant Year Zero - Character Generator</h2>
        </header>
        <div className="container"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
