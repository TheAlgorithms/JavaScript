/*
* Author: Denton Kunz
* Tree rooting algorithm in Javascript
* Takes in an undirected graph (adjacency matrix)
* Follows pseudocode given at https://youtu.be/2FFq2_je7Lg?si=rIwT8UCYcaGhxH6h
* Node class can be modified to include a data field
*/

class Node {
    constructor(id, parent, children=[]){
        this.id = id
        this.parent = parent
        this.children = children
    }
}

function rootTree(graph, rootId=0){

    console.log(graph)

    //the first node (root) should start with no parents/children
    const root = new Node(rootId, null)
    //recursively generate the rest of the tree
    return buildTree(graph, root, null)
}

function buildTree(graph, node, parent){
    //let i represent the id of the child node
    for (let i = 0; i < graph[node.id].length; i++) {
        //skip until we find a child node
        if(graph[node.id][i]==0){
            // console.log("skipped 1")
            continue
        }

        //if the child node is the current node, skip this case
        if(node.id == i){
            // console.log("skipped 2")
            continue
        }

        //avoid creating an edge between child and the current node's parent
        if( parent != null && i == parent.id){
            // console.log("skipped 3")
            continue
        }

        //create and add the new node
        let child = new Node(i, node)
        node.children.push(child)

        //recursively iterate using that node
        buildTree(graph, child, node)
    }

    return node
}

export {Node, rootTree, buildTree}