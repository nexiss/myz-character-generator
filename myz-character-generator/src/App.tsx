import { Row, ThemeProvider } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import './App.css';
import StoreSelectors from './store/selectors';
import CharacterGenerator from './templates/character-generator/character-generator';

function App() {
  const { root } = StoreSelectors();

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="app">
        <header className="app-header text-center my-5">
          <h2>
            <Trans i18nKey="title">
              This is Mutant Year Zero - Character Generator
            </Trans>
          </h2>
        </header>
        <div className="container">
          <CharacterGenerator />
          {/* TODO: Remove this Row */}
          <Row>{JSON.stringify(root)}</Row>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
