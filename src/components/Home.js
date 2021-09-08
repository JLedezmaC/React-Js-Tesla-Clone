import React from 'react'
import styled from "styled-components"
// styled es para darle estilos dentro del js y se instala de la siguiente manera 
//  npm add styled-components
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title ="Model S"
                description ="Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                LeftBtnText = "Custom Order"
                rightBtnText = "Exisitng inventory"
            />
            <Section
                title ="Model Y"
                description ="Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                LeftBtnText = "Custom Order"
                rightBtnText = "Exisitng inventory"
            />
            <Section
                title ="Model 3"
                description ="Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                LeftBtnText = "Custom Order"
                rightBtnText = "Exisitng inventory"
            />
            <Section
                title ="Model X"
                description ="Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                LeftBtnText = "Custom Order"
                rightBtnText = "Exisitng inventory"
            />
            <Section
                title ="Lowest Cost Solar Panels in America"
                description ="Money-back guarantee"
                backgroundImg = "solar-panel.jpg"
                LeftBtnText = "Order now"
                rightBtnText = "Learn more"
            />
            <Section
                title ="Solar for New Roofs "
                description ="Solar Roof Costs Less Than a New Roof"
                backgroundImg = "solar-roof.jpg"
                LeftBtnText = "Order now"
                rightBtnText = "Learn more"
            />
            <Section
                title ="Accesories"
                description =""
                backgroundImg = "accessories.jpg"
                LeftBtnText = "Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`