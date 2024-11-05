import './styles.css'
import logo from '../../assets/images/logo.svg'


function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="Company Logo" className='logo-image'></img>
            <p><strong>Delta</strong> Bookstore</p>
        </div>
    )
}

export default Logo;