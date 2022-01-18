const arrayCloner = require('./arrayCloner');

// test('clone array properly',()=>{
//     expect(arrayCloner([1,2,3])).toBe([1,2,3])
// })
// it will fail because the function is expecting both arrays to be the same and have the same space in memory, when it should expect only their values to be the same


test('clone array properly',()=>{
    expect(arrayCloner([1,2,3])).toEqual([1,2,3])
    expect(arrayCloner([1,2,3])).not.toBe([1,2,3])
})