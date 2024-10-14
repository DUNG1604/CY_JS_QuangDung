const arr = [
    {
        brand: 'Huyndai',
        model: 'Santafe'
    },
    {
        brand: 'Huyndai',
        model: 'Sonata'
    },
    {
        brand: 'Vinfast',
        model: 'Vf9'
    }
]
const arr1 = [];

arr.forEach(car => {
    let brandGroup = arr1.find(group => group[0].brand === car.brand);
    if (brandGroup) {
        brandGroup.push(car);
    } else {
        arr1.push([car]);
    }
    // console.log(brandGroup)
});

console.log(arr1);


