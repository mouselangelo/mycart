import { useContext } from "react";
import { ShoppingCartContext } from "./App";

const items = [
    {id: "1", name: "Awesome thing", price: 9.99},
    {id: "2", name: "More stuff", price: 19.75}
]

export default function Products () {
    const context = useContext(ShoppingCartContext);
    const { updateCart, itemsInCart} = context;

    return (
        <div>
            <h1>Products</h1>
            {items.map(item => {
                return <div>
                <p><b>{item.name}</b></p>
                <p>${item.price}</p>
                <button onClick={() => {
                    updateCart([...itemsInCart, item]);
                }}>Add to cart</button>
                </div>
            })
            }
        </div>
    );
}