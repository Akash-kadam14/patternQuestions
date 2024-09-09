const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ];
  // op 
  /**
   {
  25: ['Alice', 'Charlie'],
  30: ['Bob', 'David'],
  35: ['Eve']
}

   */
function groupPeopleByAge(people){
    return people.reduce((acc, person) => {
        // If the age is not already a key in the accumulator object, initialize it with an empty array
        if(!acc[person.age]) {
            acc[person.age] = [];
        }
        acc[person.age].push(person.name);
        return acc; // Return the accumulator object for the next iteration
    }, {});
}

const groupedPeople = groupPeopleByAge(people);
console.log(groupedPeople); 