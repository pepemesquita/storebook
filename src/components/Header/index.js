import styled from 'styled-components';
import LogoHeader from '../Logo';
import OptionsHeader from '../OptionsHeader'
import IconsHeader from '../IconsHeader'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <LogoHeader></LogoHeader>
            <OptionsHeader></OptionsHeader>
            <IconsHeader></IconsHeader>
        </HeaderContainer>
    )
}

export default Header;