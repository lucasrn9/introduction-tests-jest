const axios = require('axios');

//mock functions
const forEach = (item,callback) => {
    for(i = 0; i < item.length; i++){
        callback(item[i])
    }
}


test('mock function for testing forEach',()=>{
    const mockedFunction = jest.fn((i)=>{
        console.log(i)
    })

forEach([0,1],mockedFunction)
expect(mockedFunction.mock.calls.length).toBe(2)
// console.log(mockedFunction.mock)

})


//mock api calls

const fetchUser = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log(res)
    const user = res.data
    return user
}

test('mock api call to test if the function fetchUser works properly', async ()=>{
    jest.spyOn(axios,"get").mockReturnValueOnce({
        data: {
         id:1,
         name: "Leanne Graham"   
        }
    }) // spyOn the object axios and the method get, and expect the return value to be the object inside the fn mockReturnValueOnce, so inside the function fetchUser when i use the axios's method "get", the return value will be the one inside the mockReturnValueOnce() 


    const result = await fetchUser()
    expect(result.id).toBe(1)
})