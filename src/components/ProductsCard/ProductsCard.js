import { useState } from "react"
import { ProductsCardContainer } from "./ProductsCard.Styles"
import { priceFormatter } from "./utils/priceFormater"
import cartIcon from "../../img/nave.png"
import lixeira from "../../img/lixeira.png"


function ProductCard(props) {
    const {
        produto,
        addToCart,
        isOnProductScreen,
        isOncartScreen,
        decreaseQuatity,
        increaseQuatity,
        deleteProtudo
    } = props

    



    return (
        <ProductsCardContainer>
            
            <img src={produto.imagem} alt={produto.imageAlt} className="img-fundo" />

            <div>
                <div className="card-header">
                    <h2>{produto.camiseta}</h2>
                    
                </div>

                <div>
                    <p>{produto.descricao}</p>
                    <p>{produto.tamanho}</p>
                </div>

                <div className="card-price-and-action">
                    <span>{priceFormatter.format(produto.preco)}</span>
                    {
                        isOncartScreen &&
                        produto.quantity > 1 &&
                        <button onClick={() => decreaseQuatity(produto)}>-</button>
                    }

                    {
                        isOncartScreen &&
                        <button onClick={() => increaseQuatity(produto)}>+</button>
                    }



                    {
                        isOnProductScreen &&
                        <button onClick={() => addToCart(produto)}>CARRINHO  <img src= {cartIcon} className="cartIcons" /></button>
                        
                    }
                    
                    {
                        isOncartScreen &&
                        <p>Qtd:{produto.quantity}</p>

                    }
                    {
                        isOncartScreen &&
                        <button onClick={deleteProtudo} className="remove-botao"><img src={lixeira} className="lixeira-icon"/></button> 
                        
                    }

                </div>
            </div>

        </ProductsCardContainer>

    )


}

export default ProductCard