import styled from "styled-components";
import profile from '../../assets/images/profile.svg'
import bag from '../../assets/images/bag.svg'  

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 50%;
    width: 25px;
`

const icons = [profile, bag]

function IconsHeader() {
    return (
        <Icons>
        {icons.map( (icon) => (
            <Icon> <img src={icon} alt="Icons"></img></Icon>
          ) ) }
        </Icons>
    )
}

export default IconsHeader;