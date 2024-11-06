import styled from 'styled-components';
import Logo from '../../components/Logo';
import Options from '../../components/Options'
import Icons from '../../components/Icons'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo></Logo>
            <Options></Options>
            <Icons></Icons>
        </HeaderContainer>
    )
}

export default Header;