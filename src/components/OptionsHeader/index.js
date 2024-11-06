import styled from "styled-components";

const Options = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY BOOKSHELF'];

function OptionsHeader() {
    return (
        <Options>
          {textOptions.map( (text) => (
            <Option><p>{text}</p></Option>
          ) ) }
        </Options>
    )
    
}

export default OptionsHeader;