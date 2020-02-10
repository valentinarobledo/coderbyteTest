function HTMLElements(str) { 
  var tags = str.split(">").map(e => e.replace(/.*</, ''));
  tags.pop();
  var unmatched = [];
  tags.forEach(function(tag){
    if(unmatched.indexOf(tag.slice(1))>=0){
      unmatched.splice(unmatched.indexOf(tag.slice(1)),1);
    }
    else 
    {
      unmatched.push(tag);
    }
  }
);

  return unmatched.length===0 ? "true" : unmatched[0]; 

}