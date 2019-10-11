const pet = {
    name: 'Molly',
    species: 'cat',
    nicknames: 'Molly my love',
    age: 11,
    cuddle: function() {
       alert(`You have been snuggled by ${pet.name}`) 
    },
    eat: function(food) {
        alert(`${pet.name} has eaten your ${food}`)
    },
    nap: function(item) {
       console.log(`Molly is napping on your ${item}`) 
    }
}

pet.cuddle();
pet.eat('ramen');
pet.nap('laptop');