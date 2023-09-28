import {editItemQuantityFromShoppingCart,getAllCartItemsById,deleteItemFromShoppingCart} from '../api/index'
import React from 'react'
import { useState, useEffect } from "react"
    

function ShowCartItems({setStuffyNameObj,setStuffyIdObj,setCartItemIdObj,
    setStuffyPriceObj,setStuffyQtyObj,cartItemId,setCartItemId,
    setDeleteItem,cartItemsObj,setGetCartUseEffectActive,
    setUsernameObj,setUserIdObj}){
    
    if(!cartItemsObj) {return;}
    return(
        <>
            {React.Children.toArray (cartItemsObj.map((item) => {
                var qtyDisplay = item.stuffyidquantity;

            return (
            <div  className="cartItemsBox" >
                <div className="idAndNameBox">
                    <div className="idBox">ItemId: {item.stuffyid}{cartItemId}</div>
                    <div className="nameBox">{item.stuffyname}</div>
                </div>
                <div className="priceAndQtyBox">
                    <div className="priceBox">${item.stuffyprice}.00</div>
                    
                    <div className="qtyBox">
                    <div className="qty">qty</div>
                        <button className="subOne" 
                        onClick={()=>{console.log("subOne clicked")
                        if(qtyDisplay >= 1){
                        qtyDisplay = qtyDisplay - 1;
                        console.log (qtyDisplay)
                        }}}>-</button>
                        <div className="actualQtyDiv">
                        {qtyDisplay}
                        </div>
                        <button className="plusOne" 
                        onClick={()=>{console.log("plusOne clicked")
                        qtyDisplay = qtyDisplay + 1;
                        console.log (qtyDisplay)
                        }}>+</button>
                        <button className="updateCartBox" 
                        onClick={()=>{console.log("update qty clicked")
                        setCartItemIdObj(item.id)
                        setUserIdObj(item.userid)
                        setUsernameObj(item.username)
                        setStuffyIdObj(item.stuffyid)
                        setStuffyNameObj(item.stuffyname)
                        setStuffyPriceObj(item.stuffyprice)
                        setStuffyQtyObj(qtyDisplay)

                        setGetCartUseEffectActive(true)
                        }}>update</button>
                        <button className="DeleteItemInCartBox" 
                        onClick={()=>{console.log("delete button clicked")
                        setCartItemId(item.id);
                        setDeleteItem(true);
                        }}>Delete</button>
                    </div>

                </div>
            </div>
                    )
                }))}
                <button className="buyNowButton"
                onClick={()=>{console.log("buy now clicked")}}>Buy Now</button>
        </>
    )
}

//ShoppingCart should be a vertical window that moves into view when clicked
export default function ShoppingCart({
    userIdObj,setUserIdObj,tokenObj,
    usernameObj,setUsernameObj,usernameLogIn,
    setUsernameLogIn,passwordLogIn,
    setPasswordLogIn}){
    const [cartItemsObj,setCartItemsObj] = useState("")
    const [getCartUseEffectActive,setGetCartUseEffectActive] = useState(true)
    const [deleteItem,setDeleteItem] = useState(false);
    const [cartItemId,setCartItemId] = useState("")
    const [runEditCartQtyActive,setRunEditCartQtyActive] = useState(false)
    const [stuffyIdObj,setStuffyIdObj] = useState("")
    const [stuffyNameObj,setStuffyNameObj] = useState("")
    const [stuffyPriceObj,setStuffyPriceObj] = useState("")
    const [stuffyQtyObj,setStuffyQtyObj] = useState("")
    const [cartItemIdObj,setCartItemIdObj] = useState("")
    if(userIdObj){
        useEffect(()=>{
                if(getCartUseEffectActive === true){
                    async function getMyCartItems(){
                        try {
                            const response = await getAllCartItemsById(userIdObj);
                            setCartItemsObj(response);
                            console.log(response);
                            setGetCartUseEffectActive(false)
                        } catch (err) {
                            console.error(err)
                        }
                    }
                    getMyCartItems();
                }

                if(runEditCartQtyActive === true){

                    async function editCartQty(){
                        setCartItemIdObj(item.id)
                        setUserIdObj(item.userid)
                        setUsernameObj(item.username)
                        setStuffyIdObj(item.stuffyid)
                        setStuffyNameObj(item.stuffyname)
                        setStuffyPriceObj(item.stuffyprice)
                        setStuffyQtyObj(qtyDisplay)

                        try {
                            const response = await editItemQuantityFromShoppingCart(
                            cartItemIdObj,userIdObj,usernameObj,stuffyIdObj,
                            stuffyNameObj,stuffyPriceObj,stuffyQtyObj)

                            const result = response;
                            return result;
                        } catch (err) {
                            console.error(err)
                        }
                    }
                    editCartQty();
                }


                if(deleteItem === true){
                    async function deleteFromCart(){
                        try {
                            const response = await deleteItemFromShoppingCart(cartItemId)
                            const result = response;
                            console.log(`item deleted ${result}`);
                            setDeleteItem(false);
                            return result;
                        } catch (err) {
                            console.error(err)
                        }
                    }
                    deleteFromCart();
                    }
        },[userIdObj,deleteItem])
    }


    return (
        <>
        <div className="myCartWindow">
            <h3 className="shoppingCartHeading">Shopping Cart</h3>
            {""}
            <div className="myCartItems">
            <div>User Id: {userIdObj}, {usernameObj}'s Cart Items:</div>
            <div>{tokenObj.token}</div>
            <div className="showCartItemsDiv">
                <ShowCartItems 
                setCartItemIdObj={setCartItemIdObj}
                setStuffyQtyObj={setStuffyQtyObj}
                setStuffyPriceObj={setStuffyPriceObj}
                setStuffyNameObj={setStuffyNameObj}
                setStuffyIdObj={setStuffyIdObj}
                cartItemId={cartItemId}
                setCartItemId={setCartItemId}
                setDeleteItem={setDeleteItem}
                deleteItem={deleteItem}
                setGetCartUseEffectActive={setGetCartUseEffectActive} cartItemsObj={cartItemsObj} />
            </div>

            </div>
            
        </div>
        </>
    )
}