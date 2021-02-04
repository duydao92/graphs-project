function numRegions(graph) {
//iterate thorough object
//create visited = new Set()
//if parent is already in visited
  //push parent
  //push neighbor
//if not
  //create new visited
    //push parent
    //push neighbor
  let parent = new Set()
  for(key in graph){
    if(Object.values(parent).includes(key)){

    }
  }



}

let graph1 = {
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['e', 'c'],
  'e': ['d'],
};



module.exports = {
    numRegions
};
