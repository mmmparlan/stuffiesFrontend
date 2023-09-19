

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
    console.log("trying to get all stuffies");
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