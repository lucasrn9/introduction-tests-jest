const fetchUser = require('./fetchUser')

//promise
// test('user name should be Leanne Graham ',()=>{
//     expect.assertions(1)
//     return fetchUser().then(user=>{
//         expect(user.name).toBe('Leanne Graham')
//         // expect(user.name).not.toBe('Jhon') *assertions is the number of times that *expect* will runs, if this line were true, then the assertions number should be 2*
//     })
// })

//async await
test('User id should be 1', async () =>{

    const user = await fetchUser()
    expect(user.id).toBe(1)
})
