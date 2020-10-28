import axios from 'axios'

async function subscribe(str) {
    const requestParam = {
        method: 'POST',
        headers: {
            'Content-Type': ' application/json'
        },
        url: 'http://dev.rapptrlabs.com/Tests/scripts/add-email.php',
        data: {
            email: `${str}`
        }
    }
    let resposne = await axios(requestParam)
    return resposne
}

export {
    subscribe
}