let unsortedSet = [4, 10, 5, 8, 7, 6, 3, 1, 2, 9];
console.log(unsortedSet)

const checkSet = function(set){
	let toBeChanged = false;
	for (i = 0; i < set.length; i++){
  	if (set[i] > set[(i + 1)]){
    	toBeChanged = true;
      break
    }
  }
  return toBeChanged;
}

const sort = function(set){
  for (i = 0; i < set.length; i++) {
    if (set[i] > set[(i + 1)]){
      let pos1 = set[i];
      let pos2 = set[(i + 1)];
      set[i] = pos2;
      set[(i + 1)] = pos1;
    }
    else if (set[i] < set[(i + 1)]){
      continue
    }
    else if (set[(i + 1)] == null){
      break
    }
  }
  return set
}

let orderedSet = false;
let currentOrderedSet = unsortedSet

while (!orderedSet){
	toBeChanged = checkSet(currentOrderedSet);
  if(!toBeChanged){
  	orderedSet = true
  }
  else {
  	currentOrderedSet = sort(currentOrderedSet)
    console.log(currentOrderedSet)
    continue
  }
}