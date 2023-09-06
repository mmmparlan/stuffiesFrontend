

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