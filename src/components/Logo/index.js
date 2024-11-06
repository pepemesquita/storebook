import logo from '../../assets/images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 20px;
    color:black;
`

const LogoImage = styled.img`
    margin-left: 1%;
    margin-right: 3%;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt="Company Logo"
            />
            <p><strong>Delta</strong> Bookstore</p>
        </LogoContainer>
    )
}

export default Logo;