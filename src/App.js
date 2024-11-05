import './App.css';
import Logo from './components/Logo';
import profile from './assets/images/profile.svg'
import bag from './assets/images/bag.svg'  

const textOptions = ['CATEGORIES', 'MY BOOKSHELF', 'FAVORITES'];
const icons = [profile, bag]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options-header'>
          {textOptions.map( (text) => (
            <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>

        <ul className='icons'>
        {icons.map( (icon) => (
            <li className='icon'> <img src={icon} alt="Icons"></img></li>
          ) ) }
        </ul>
      </header>
    </div>
  );
}

export default App;