import './styles.css'
import profile from '../../assets/images/profile.svg'
import bag from '../../assets/images/bag.svg'  

const icons = [profile, bag]

function Icons() {
    return (
        <ul className='icons'>
        {icons.map( (icon) => (
            <li className='icon'> <img src={icon} alt="Icons"></img></li>
          ) ) }
        </ul>
    )
}

export default Icons;