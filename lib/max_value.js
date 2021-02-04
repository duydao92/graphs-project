
function maxValue(node, visited=new Set()) {
  const queue = [node];
  let max = -Infinity
  while(queue.length) {
    const curr = queue.shift();
    if (visited.has(curr.val)) continue;
    visited.add(curr.val);
    if(curr.val > max){
      max = curr.val;
    }
    queue.push(...curr.neighbors);
  }
  return max;
}

module.exports = {
    maxValue
};
