import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from "./searchData"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Caption = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Search (){

    const [searchedBooks, setSearchedBooks] = useState ([])
    
    function doSearch(event) {
        const writedText = event.target.value
        const searchResults = books.filter( book => book.name.includes(writedText) )
        setSearchedBooks(searchResults)
    }

    return (
        <SearchContainer>
            <Title>Do you know where to start?</Title>
            <Caption>Find your book on our bookshelf</Caption>
            <Input 
                placeholder="Write your next reading"
                onBlur={event => { doSearch(event) }}
            />
            { searchedBooks.map( book => (
                <Result>
                    <img src={book.src} alt="A book"/>
                    <p>{book.name}</p>
                </Result>
            ))}
        </SearchContainer>
    )
}

export default Search;