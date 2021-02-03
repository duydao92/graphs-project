const { GraphNode } = require('../lib/graph_node');
function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set();
    const queue = [startingNode];

    while (queue.length) {
        const curr = queue.shift();
        // console.log(curr)

        if (visited.has(curr.val)) continue;
        visited.add(curr.val);

        if (targetVal === curr.val) return curr;
        queue.push(...curr.neighbors)
    }

    return null;

}

let s = new GraphNode('s');
let t = new GraphNode('t');
s.neighbors = [t];
t.neighbors = [s];

console.log(breadthFirstSearch(s, 'q'))


module.exports = {
    breadthFirstSearch
};
