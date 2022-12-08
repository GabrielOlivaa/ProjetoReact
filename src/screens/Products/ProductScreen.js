import { useState } from "react"
import produtos from "../../assets/produtos.json"
import ProductCard from "../../components/ProductsCard/ProductsCard"
import { Main } from "./ProductScreen.Styled"
function ProductScreen(props) {

    const {
        addToCart,
        order,
        minPrice,
        maxPrice,
        query
        
    } = props


 

    return (
        <Main>
            <section >
                <h1>Produtos</h1>
                <hr />
                {produtos
                .filter((item) => {
                    return item.camiseta.toLocaleUpperCase().includes(query.toLocaleUpperCase()) || item.descricao.includes(query.toLocaleLowerCase())
                  })
                    
                    .filter((produto)=> produto.preco >=  minPrice || minPrice==="" )
                    .filter((produto)=> produto.preco <= maxPrice || maxPrice==="")
                    .sort((a, b) => {
                        return a.preco - b.preco
                      })
                    .sort(()=>{
                        if(order === "asc"){
                            return 0
                        }else{
                            return -1
                        }
                    })
                   
                        .map((produto) => (
                            <ProductCard
                                produto={produto}
                                key={produto.id}
                                addToCart={addToCart}
                                isOnProductScreen={true}
                            />
                        ))}
            </section>

        </Main>
    )
}

export default ProductScreen