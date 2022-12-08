import styled from "styled-components";



export const Titulo = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: lightgrey;
height:80px ;
  font-family: 'Oxanium', cursive; ;

`


export const HeaderContainer = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24PX;
    

    .cartIcons{
        width: 20px;

    }

    .camisetaIcon{
        width: 20px;
    }


`

export const InputBusca = styled.input `

border-radius: 15px;
font-size: 10px;
text-align: center;
padding: 4px;
font-family: 'Roboto', sans-serif;
margin: 4px;





`
export const Botao = styled.button `
padding: 4px;
border-radius: 10px;
margin:0 20px;
font-family: 'Roboto', sans-serif;
:hover{
        cursor: pointer;
        filter: brightness(0.85);

    }

    :active{
        filter: brightness(0.95);
    }

`

export const SelectOrder = styled.select `
border-radius: 15px;
font-size: 8px;
padding: 4px;
margin:  0 10px;
font-family: 'Roboto', sans-serif;
:hover{
        cursor: pointer;
        filter: brightness(0.85);

    }

    :active{
        filter: brightness(0.95);
    }

`

export const SectionOrdem= styled.div `
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;




`
