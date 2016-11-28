module.exports = function(type_of_data){
//function dataTypes(type_of_data){
  if (typeof(type_of_data) === 'string'){
    return type_of_data.length;
  }
  if  (typeof(type_of_data) === null || type_of_data === undefined){
      return 'no value';
  }
  if (typeof(type_of_data)==='boolean'){
    return true;
  }
  if (typeof(type_of_data) === 'number' && type_of_data===100){
    return 'equal to 100';
  }
  if (typeof(type_of_data)=== 'number' && type_of_data < 100){
    return 'less than 100';
  }
  
  if (typeof(type_of_data)=== 'number' && type_of_data > 100){
    
  return 'more than 100';
  }
  
  if (type_of_data instanceof Array){
    if (type_of_data[2] !=null){
    return type_of_data[2]; 
  }
  else{
    return undefined;
  }
  }
      
      
if (typeof(type_of_data)=== 'function'){
  return 'called callback';
} 
  
}