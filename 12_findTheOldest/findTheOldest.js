const findTheOldest = function(people) {
  const ages = people.map((person) => {
    if (person.yearOfDeath == null) {
      let thisYear = new Date().getFullYear();
      return thisYear - person.yearOfBirth; 
    }
    return person.yearOfDeath - person.yearOfBirth;
  })
  index = ages.indexOf(Math.max(...ages));
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
