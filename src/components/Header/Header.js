import { HeaderContainer } from "./Header.styled";
import {InputBusca,Botao,SelectOrder,SectionOrdem,Titulo} from "./Header.styled"
import cartIcon from "../../img/nave.png"
import camiseta from "../../img/t-shirt.png"

function Header(props) {

    const {
        goToProductScreen,
        goToCartScreen,
        query,
        onchangequery,
        itemsInCart,
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice

    } = props

    return (
        <>
        
        <Titulo >NEED MORE SPACE STORE </Titulo>
        <HeaderContainer>
         

            <div>
                <InputBusca
                    placeholder="BUSCA"
                    value={query}
                    onChange={onchangequery}
                />

               
            </div>

            <div>

                
              
                <InputBusca
                    placeholder="PRECO MINIMO"
                    type="number"
                    value={minPrice}
                    onChange={(e) =>setMinPrice(e.target.value)}

                />
                <InputBusca
                    placeholder="PRECO MAXIMO"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                



            </div>

            <div>
                <Botao onClick={goToProductScreen}><img src={camiseta} className="camisetaIcon" /></Botao>
            </div>


            <div className="car">
                <Botao onClick={goToCartScreen}>
                    <img src={cartIcon}  className="cartIcons"/>
                    <span>{itemsInCart > 0 && itemsInCart}</span></Botao>

            </div>

            <SectionOrdem>


                <label for="sortingParameter">Ordenar:</label>
                <SelectOrder name="sortingParameter"
                        value={props.sortingParameter}
                        onChange={(e) => { props.setSortingParameter(e.target.value) }}>
                            <option value={"preco"}>PREÇO</option>
                 </SelectOrder>

                 <SelectOrder
                        value={props.order}
                        onChange={(e) => { props.setOrder(e.target.value) }}
                    >
                        <option value={"asc"}>CRESCENTE</option>
                        <option value={"desc"}>DECRESCENTE</option>
                    </SelectOrder>

                   

                    </SectionOrdem>






        </HeaderContainer>
        </>
    )



}

export default Header;
