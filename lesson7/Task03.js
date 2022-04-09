const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix(arr, pref) {
    const newArr = arr.map(item => {
        return pref + ' ' +item
    })
    console.log(newArr)
}

addPrefix(names, 'Mr')