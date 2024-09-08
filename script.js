// Good Luck 💪🏾
function makeCapital(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  
  console.log(makeCapital("my name is ali")); // "My Name Is Ali"
  console.log(makeCapital("fikrcamp Bootcamp")); // "Fikrcamp Bootcamp"
  console.log(makeCapital("i live In Paris")); // "I Live In Paris"
  