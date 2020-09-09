// Graphs: Breadth First Search

function bsf(graph, root) {
  const nodesLen = {}; // store distances

  //set to infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  //root starts from 0
  nodesLen[root] = 0;

  const queue = [root];
  let current;

  while (queue.length != 0) {
    current = queue.shift(); //pop off the root node

    const curConnected = graph[current];
    const neighborIdx = []; // list of node connected to the current node
    const idx = curConnected.indexOf(1); //first connected nodes
    while (idx != 1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }

  return nodesLen;
}
