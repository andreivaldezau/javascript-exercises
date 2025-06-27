const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.sort(
    (a, b) =>
      (b.yearOfDeath || currentYear) -
      b.yearOfBirth -
      ((a.yearOfDeath || currentYear) - a.yearOfBirth)
  )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
