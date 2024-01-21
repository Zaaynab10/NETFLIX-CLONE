import styled from "styled-components"

export default function  NotAvailable(){

    return(
        <Container className="not-available flex a-center j-center "> 
            No movies available for selected genre 
        </Container >
    )
}
const Container = styled.div`
font-size:2rem;

`