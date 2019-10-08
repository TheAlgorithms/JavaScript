
class Node{
    constructor(val){
    this.value=val;
    this.next=null;
    this.prev=null;
    }
}


class doublyLinklist {
    constructor(val){
        this.head={
            value:val,
            next:null,
            prev:null,
        }
        this.tail=this.head;
        this.length=1;
        
    }
    
  append(value){
     const newNode=new Node(value);
      this.tail.next= newNode;
      newNode.prev=this.tail;
      this.tail=newNode;
      this.length++;
      return this;
      
  };
    
    prepend(value){
       const newNode=new Node(value); 
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
        return this;
    };
    
    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while(counter!==index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    };
    
    insert(index, value){
        if(index>= this.length){
            return this.append(value);
        }
        const newNode= new Node(value);
        const leader=this.traverseToIndex(index-1);
        const tempNode=this.traverseToIndex(index);
        leader.next=newNode;
        newNode.prev=leader;
        newNode.next=tempNode;
        tempNode.prev=newNode;
        this.length++;
        return this;
        
    };
    
    remove(index){
        const leader=this.traverseToIndex(index-1);
        const tempNode=this.traverseToIndex(index+1);
        leader.next=tempNode;
        tempNode.prev=leader;
        this.length--;
        
    };
    
    
    
    
    
}