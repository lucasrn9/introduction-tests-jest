const axios = require('axios');

const fetchUser = async () => {
const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
const user = res.data
return user
}

module.exports = fetchUser