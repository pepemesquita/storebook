import './styles.css'

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY BOOKSHELF'];

function Options() {
    return (
        <ul className='options-header'>
          {textOptions.map( (text) => (
            <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>
    )
    
}

export default Options;