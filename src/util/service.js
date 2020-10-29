import axios from 'axios'

const baseUrl = 'http://dev.rapptrlabs.com/Tests/scripts/'
const postRequestParam = {
    method: 'POST',
    headers: {
        'Content-Type': ' application/json'
    },
}
async function subscribe(str) {
    const type = 'add-email.php'
    const requestParam = {
        ...postRequestParam,
        data: { emai: str },
        url: baseUrl + type,
    }
    let resposne = await axios(requestParam)
    return resposne
}

async function signUp(obj) {
    const type = 'user-signup.php'
    const requestParam = {
        ...postRequestParam,
        data: obj,
        url: baseUrl + type,
    }
    let resposne = await axios(requestParam)
    return resposne
}

async function login(obj) {
    const type = 'user-login.php'
    const requestParam = {
        ...postRequestParam,
        data: obj,
        url: baseUrl + type,
    }
    let resposne = await axios(requestParam)
    return resposne
}

export {
    login,
    signUp,
    subscribe
}