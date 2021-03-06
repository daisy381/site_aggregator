import {useAppContext} from "../context";
import {productsServices} from "../services/products";


export const useCart = (product = {}) => {
  const {setCartProducts, cartProducts, hasCart} = useAppContext()
  const state = localStorage.getItem('location');

  async function addData(_id,state) {
    try {
       await productsServices.addToBasket(_id,state);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function deleteData(_id) {
    try {
      await productsServices.deleteToBasket(_id);
    } catch (e) {
      console.error(e.message);
    }
  }

  const itemsOnCart = hasCart(product.id)

  const addItemOnCart = (e) => {
    e.stopPropagation()
    addData(product.id,state);
    setCartProducts(prev => [...prev, product])
    localStorage.setItem('cartItems', JSON.stringify([...cartProducts, product]))
  }


  const deleteItemOnCart = () => {
    setCartProducts(prev => {
      deleteData(product.id)
      const fitleredCartItems = prev.filter(el => el.id !== product.id)
      localStorage.setItem('cartItems', JSON.stringify(fitleredCartItems))
      return fitleredCartItems
    })
  }

  return {
    itemsOnCart, addItemOnCart, deleteItemOnCart, cartProducts
  }
}
