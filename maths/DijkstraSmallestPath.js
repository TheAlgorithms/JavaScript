function solve(graph, s) {
  var solution = {};
  solutions[s] = [];
  solutions[s].dist = 0;
  
  while(true) {
    var parent = null;
    var nearest = null;
    var dist = Infinity;
    

    for(var n in solutions) {
      if(!solutions[n])
        continue
      var ndist = solutions[n].dist;
      var adj = graph[n];
      //for each of its adjacent nodes...
      for(var a in adj) {
        //without a solution already...
        if(solutions[a])
          continue;
        //choose nearest node with lowest *total* cost
        var d = adj[a] + ndist;
        if(d < dist) {
          //reference parent
          parent = solutions[n];
          nearest = a;
          dist = d;
        }
      }
    }
    

    if(dist === Infinity) {
        break;
    }

    solutions[nearest] = parent.concat(nearest);

    solutions[nearest].dist = dist;
  }
  
  return solutions;
}

var graph = {};

\\create graph

var layout = {
  'R': ['2'],
  '2': ['3','4'],
  '3': ['4','6','13'],
  '4': ['5','8'],
  '5': ['7','11'],
  '6': ['13','15'],
  '7': ['10'],
  '8': ['11','13'],
  '9': ['14'],
  '10': [],
  '11': ['12'],
  '12': [],
  '13': ['14'],
  '14': [],
  '15': []
}

//convert uni-directional to bi-directional graph
// needs to look like: where: { a: { b: cost of a->b }
// var graph = {
//     a: {e:1, b:1, g:3},
//     b: {a:1, c:1},
//     c: {b:1, d:1},
//     d: {c:1, e:1},
//     e: {d:1, a:1},
//     f: {g:1, h:1},
//     g: {a:3, f:1},
//     h: {f:1}
// };

for(var id in layout) {
  if(!graph[id])
    graph[id] = {};
  layout[id].forEach(function(aid) {
    graph[id][aid] = 1;
    if(!graph[aid])
      graph[aid] = {};
    graph[aid][id] = 1;
  });
}

//choose start node
var start = '10';
//get all solutions
var solutions = solve(graph, start);

console.log("From '"+start+"' to");
//display solutions
for(var s in solutions) {
  if(!solutions[s]) continue;
  console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
}
