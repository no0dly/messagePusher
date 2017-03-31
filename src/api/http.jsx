const URL = "http://192.241.139.126:8080"

module.exports = {
    sendData(data) {
        return new Promise(function(resolve, reject) {
            var xhr  = new XMLHttpRequest();

            xhr.open( 'POST', `${URL}/send` );

            xhr.onload = function(e) {

            if (xhr.response.error) {
                reject(new Error(xhr.response.error.message));
            }

            resolve(JSON.parse(xhr.response));
            };
            xhr.send(JSON.stringify(data));
        })
    },
    getData() {
        return new Promise(function(resolve, reject) {
            var xhr  = new XMLHttpRequest();

            xhr.open( 'GET', `${URL}/customers` );

            xhr.onload = function(e) {

            if (xhr.response.error) {
                reject(new Error(xhr.response.error.message));
            }

            resolve(JSON.parse(xhr.response));
            };
            xhr.send();
        })
    }
};