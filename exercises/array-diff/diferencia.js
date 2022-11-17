function diferencia(arr1, arr2) {
    return arr1.filter(x => x !== arr2[0])
}

const a = [1,2,3]
const b = [2]
console.log(diferencia(a,b))