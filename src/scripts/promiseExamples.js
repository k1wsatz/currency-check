// ajax - asynchronous js and xml - XMLHTTPRequest
const myFetch = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send(null);

        if (req.status === 200) {
            resolve(req.response);
        } else {
            reject({status: req.status});
        }
    })
}

const response = myFetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json')
console.log(response)
response
    .then((resp) => {
        console.log(resp)
    })
    .catch((error) => {
        console.log(error)
    })









