const axios = require('axios');

const fetchUser = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log(res)
    const user = res.data
    return user
}



const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}


test('mock callback', () => {
    const mockCalledBack = jest.fn(x => 42 + x)
    forEach([0, 1], mockCalledBack)
    expect(mockCalledBack.mock.calls.length).toBe(2)
    expect(mockCalledBack.mock.calls[0][0]).toBe(0)
    expect(mockCalledBack.mock.calls[1][0]).toBe(1)
    expect(mockCalledBack.mock.results[0].value).toBe(42)
    expect(mockCalledBack.mock.results[1].value).toBe(43)

})

test('mock return', () => {
    const mock = jest.fn()
    mock.mockReturnValueOnce(true)
    const results = mock()
    expect(results).toBe(true)
})

test('mock axios', async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        }
    }) // spyOn the object axios and the method get, and expect the return value to be the object inside the fn mockReturnValueOnce, so inside the function fetchUser when i use the axios's method "get", the return value will be the one inside the mockReturnValueOnce() 

    const results = await fetchUser()
    expect(results.name).toBe('Leanne Graham')
})