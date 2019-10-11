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

// Give your pet a new key named favoriteToys whose value is an empty array.

pet.favoriteToys = [];
console.log(pet);

// Now define another new key named play whose value is a function with a single parameter named toy.

// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).

// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

pet.play = function(toy) {
  if (toy.includes('string')) {
    this.favoriteToys.push(toy);
    return pet.favoriteToys;
  }
}

console.log(pet.play('string cheese'));

