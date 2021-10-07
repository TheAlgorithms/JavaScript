import {dijkstra} from '../Dijkstra'
test('Finds the shortest path',function(){
    expect(dijkstra({
        a: { b: 1, c: 4 },
        b: { e: 11 },
        c: { d: 5 },
        d: { e: 1 },
        e: { b: 11, d: 1, f: 3, g: 2 },
        f: { h: 1 },
        g: { h: 9 }
      }, 'a', 'h').length).toEqual(14)  
})