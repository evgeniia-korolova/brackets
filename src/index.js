module.exports = function check(str, bracketsConfig) {
  
  const pairs = new Map(bracketsConfig); 
  const stack = []; 
  for (const brack of str) {
    
    if (pairs.get(stack.at(-1)) == brack) {
      
      stack.pop(); 
    } else {
      
      stack.push(brack); 
    }
  }
  return stack.length == 0; 
};