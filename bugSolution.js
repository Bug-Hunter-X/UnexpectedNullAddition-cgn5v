function foo(a, b) {
  // Handle null or undefined values for a and b
  const numA = a === null || a === undefined ? 0 : a;
  const numB = b === null || b === undefined ? 0 : b; 

  //Check if the parameters are numbers
  if(typeof numA !== 'number' || typeof numB !== 'number'){
    return NaN; //Return NaN if parameters are not numbers
  }
  return numA + numB; 
} 