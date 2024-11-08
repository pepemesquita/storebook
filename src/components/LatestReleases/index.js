import { Title } from "../Title";
import { books } from "./lastestReleasesData";
import RecommendationCard from "../RecommendationCard";
import bookImage from "../../assets/images/entendendo.jpg"
import styled from "styled-components";

const LatestRealeasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        width: 250px; 
        height: 300px; 
        object-fit: cover; 
        margin-right: 10px;
    }
`

function LatestRealeases() {
    return (
        <LatestRealeasesContainer>
            <Title fontSize="36px">Latest Releases</Title>
            <NewBooksContainer>
                {books.map( book => (
                    <img src={book.src} alt="A book"/>
                ))}
            </NewBooksContainer>
            <RecommendationCard
                title="Maybe you'll be interested"
                caption="Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People"
                description="A fun way to learn algorithms and data structure"
                img={bookImage}
            />
        </LatestRealeasesContainer>
    )
}

export default LatestRealeases;