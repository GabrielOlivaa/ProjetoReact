import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductScreen from "./screens/Products/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";


function App() {

  const [activeScreen, setActiveScreen] = useState("ProductScreen")
  const [cart, setCart] = useState([])
  const [query, setQuery]= useState("")
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [minPrice, setMinPrice]= useState (-Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")

  const goToProductScreen = () => setActiveScreen("ProductScreen")
  const goToCartScreen = () => setActiveScreen("CartScreen")

  const addToCart = (produtoAdd) => {
    const novoCarrinho = [...cart,]

    const produtoEncontrado = novoCarrinho.find( (produtoCarrinho) => produtoCarrinho.id === produtoAdd.id)

    if (!produtoEncontrado) {
      const novoProduto = { ...produtoAdd, quantity: 1 }
      novoCarrinho.push(novoProduto)

    }else{
      produtoEncontrado.quantity++
    }



    setCart(novoCarrinho)

    localStorage.setItem("cart",JSON.stringify(novoCarrinho))

    
  }

  const localStorageCart = () => {
    if(localStorage.getItem("cart")){
      const cartString = localStorage.getItem("cart")
      const cart2= JSON.parse(cartString)
      setCart(cart2)
    }
  }

  useEffect(()=>{
    localStorageCart()
  }, [])
 

  const increaseQuatity = (produtoMais ) =>{
    const novoCarrinho= [...cart]

    const produtoEncontrado = novoCarrinho.find(
      (produtoCarrinho)=> produtoCarrinho.id === produtoMais.id
    )

    produtoEncontrado.quantity++
    setCart(novoCarrinho)

  }

  const decreaseQuatity = (produtoMenos ) =>{
    const novoCarrinho= [...cart]

    const produtoEncontrado = novoCarrinho.find(
      (produtoCarrinho)=> produtoCarrinho.id === produtoMenos.id
    )

    produtoEncontrado.quantity--
    setCart(novoCarrinho)

  }

   const onchangequery = (e) =>{
    setQuery(e.target.value)
  }

  const deleteProtudo = (produtoexcluir)=>{
    const novoCarrinho= [...cart]

    const produtoEncontrado = novoCarrinho.findIndex(
      (produtoCarrinho)=> produtoCarrinho.id === produtoexcluir.id
    )

    novoCarrinho.splice(produtoEncontrado,1)
    setCart(novoCarrinho)

  }




  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductScreen":
        return <ProductScreen addToCart={addToCart} query={query}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortingParameter={sortingParameter}
        order={order}
        
        />
        

      case "CartScreen":
        return <CartScreen cart={cart}
        increaseQuatity={increaseQuatity}
        decreaseQuatity={decreaseQuatity}
        deleteProtudo={deleteProtudo}

        />
      default:
        <div>tela não existe</div>
    }
  }


  return (
    <div >
      <Header goToProductScreen={goToProductScreen}
        goToCartScreen={goToCartScreen}
        itemsInCart={cart.length}
        onchangequery={ onchangequery}
        query={query}
        minPrice={minPrice}         setMinPrice={setMinPrice}
        maxPrice={maxPrice}         setMaxPrice={setMaxPrice}
        setSortingParameter={setSortingParameter} sortingParameter={sortingParameter}
        order={order}               setOrder={setOrder}

      />
      {renderScreen()}

     

    </div>
  );
}

export default App;
