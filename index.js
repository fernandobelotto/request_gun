import axios from 'axios'

async function requestGun({ method, path, host, req_quantity, body, measureName }) {
    let arrayForLoop = Array(req_quantity).entries()
    performance.mark('start');
    for (let [i, v] of arrayForLoop) {
        try {
            await axios.request({ method: method, url: host + path, data: body })
        } catch (e) {
            console.log('error' + i)
        }
    }
    performance.mark('finish');
    console.log(measureName)
    console.log(performance.measure('start to finish', 'start', 'finish'))
}

requestGun({
    measureName: 'IMPERATIVE post users 1000req',
    req_quantity: 1000,
    method: 'POST',
    path: '/users',
    host: 'http://localhost:8082',
    body: { name: 'fernando', document: '123456', email: 'fernando@email.com' },
})

requestGun({
    measureName: 'IMPERATIVE get users 1000req',
    req_quantity: 1000,
    method: 'GET',
    path: '/users',
    host: 'http://localhost:8082',
    body: {}
})

// requestGun({
//     measureName: 'REACTIVE post users 1000req'
//     req_quantity: 1000,
//     method: 'POST',
//     path: '/users',
//     host: 'http://localhost:8082',
//     body: { name: 'fernando', document: '123456', email: 'fernando@email.com' },
// })

// requestGun({
//     measureName: 'REACTIVE get users 1000req'
//     req_quantity: 1000,
//     method: 'GET',
//     path: '/users',
//     host: 'http://localhost:8082',
//     body: {}
// })