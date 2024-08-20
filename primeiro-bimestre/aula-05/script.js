fetch('https://jsonplaceholder.typicode.com/comments/2')
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error))


    