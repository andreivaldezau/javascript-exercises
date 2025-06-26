const palindromes = function (input) {
  const filtered = [...input.toLowerCase()]
    .filter((character) => /[a-zA-Z0-9]/.test(character))
    .join("");
  const reversed = [...filtered].reverse().join("");
  return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;
