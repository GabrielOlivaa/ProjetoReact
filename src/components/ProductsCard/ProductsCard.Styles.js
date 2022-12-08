import styled from "styled-components";

export const ProductsCardContainer = styled.article`
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 300px;
margin: 8px 0;
margin-right: 8px;
border-radius: 8px;
overflow: hidden;
position: relative;
font-family: 'PT Sans', sans-serif;

>div{
    padding: 8px;

}

.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;

}


.card-price-and-action{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;

    button{
        padding: 4px;
    }

    .cartIcons {

        width: 20px;
    }


}

.remove-botao{
    position: absolute;
    top: 169px;
    right: 0;
    
}


.img-fundo{
background-color: lightgrey;
width: 300px;
height: 200px;
}

.lixeira-icon{
    width: 16px;
    border-radius: 12px;
}

`