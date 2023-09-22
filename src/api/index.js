

const BASE_URL ="http://localhost:4000/api/"

export const registerUser = async (username,password) => {

    try {
        console.log('trying to register new user');
        const response = await fetch(
            `${BASE_URL}users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     
                        username:`${username}`,
                        password:`${password}`
                    
                })
            }
        );
        const result = await response.json();
        console.log(result)
        return result
    } catch (err) {
        console.error(err)
    }
}

export const loginUser = async (username,password) => {
    console.log("trying to login")
    try {
        const response = await fetch(
            `${BASE_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username:`${username}`,
                    password:`${password}`
                })
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err)
    }
}

export const getAllStuffies = async ()=>{
    console.log("trying api to get all stuffies");
    try {
        const response = await fetch(
            `${BASE_URL}stuffies/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const result = await response.json();
        return result;
    }catch (err){
        console.error(err)
    }
}

export const getAllReviews = async ()=>{
    console.log("trying api to get all reviews")
    try {
        const response = await fetch(
            `${BASE_URL}reviews/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const result = await response.json();
        return result;
    }catch (err){
        console.error(err)
    }
}

export const postReview = async (stuffyid,username,stuffyreview)=>{
    console.log("trying to post a stuffy review")
    try {
        const response = await fetch(
            `${BASE_URL}reviews/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stuffyid:`${stuffyid}`,
                    username:`${username}`,
                    stuffyreview:`${stuffyreview}`
                })
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export const editReviewById = async (id,stuffyid,username,stuffyreview)=>{
    console.log("trying to edit Review by id")
    try {
        const response = await fetch(
            `${BASE_URL}reviews/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stuffyid:`${stuffyid}`,
                    username:`${username}`,
                    stuffyreview:`${stuffyreview}`
                })
            });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err)
    }
}

export const deleteReviewById = async (id)=>{
    console.log("trying to delete a review by id")
    try {
        const response = await fetch(
            `${BASE_URL}reviews/${id}}`,{
                method: "DELETE"
            });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error(err)
    }
}

export const getAllCartItemsById = async (id)=>{
    console.log("trying to get all cart items for user by id")
    try {
        const response = await fetch(
            `${BASE_URL}carts/${id}`,{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err)
    }
}

export const addItemToShoppingCart = async (
    userid,username,stuffyid,stuffyname,stuffyprice,stuffyidquantity
    )=>{

    console.log("trying to add item to shopping cart")
    try {
        const response = await fetch(
            `${BASE_URL}carts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: `${userid}`,
                    username:`${username}`,
                    stuffyid:`${stuffyid}`,
                    stuffyname:`${stuffyname}`,
                    stuffyprice:`${stuffyprice}`,
                    stuffyidquantity:`${stuffyidquantity}`
                })
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err)
    }
}

export const deleteItemFromShoppingCart = async (id)=>{
    console.log("trying to delete item from shopping cart")
    try {
        const response = await fetch(
            `${BASE_URL}carts/${id}`,{
                method: "DELETE"
            });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error(err)
    }
}

export const editItemQuantityFromShoppingCart = async (
        id,userid,username,stuffyid,stuffyname,stuffyprice,stuffyidquantity
    )=>{
    console.log("trying to edit item quantity")
    try {
        const response = await fetch(
            `${BASE_URL}carts/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: `${userid}`,
                    username:`${username}`,
                    stuffyid:`${stuffyid}`,
                    stuffyname:`${stuffyname}`,
                    stuffyprice:`${stuffyprice}`,
                    stuffyidquantity:`${stuffyidquantity}`
                })
            });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err)
    }
}