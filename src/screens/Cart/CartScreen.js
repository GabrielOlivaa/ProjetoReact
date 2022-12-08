import { Main } from "./CartScreen.Styled"
import ProductCard from "../../components/ProductsCard/ProductsCard"
import { priceFormatter } from "../../components/ProductsCard/utils/priceFormater"

function CartScreen(props) {

    const { 
        cart,
        decreaseQuatity,
        increaseQuatity,
        deleteProtudo
    } = props

    const total = cart.reduce((acc,produto)=>((produto.preco *produto.quantity)+acc),0)

    return (
        <Main>
            <section >
                <h1>Carrinho|  <span>Total: {priceFormatter.format(total)}</span> </h1>
               
                <hr />
                {cart
                    .map((produto) => (
                        <ProductCard
                            produto={produto}
                            key={produto.id}
                            isOncartScreen={true}
                            increaseQuatity={increaseQuatity}
                            decreaseQuatity={decreaseQuatity}
                            deleteProtudo={deleteProtudo}
                            />
                    ))}
            </section>
            

        </Main>
    )
}

export default CartScreen

