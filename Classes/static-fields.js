class ID{
    static #Current_id=0;
    id;
    constructor(){
        this.id=++ID.#Current_id;
    }
}
let ids=[]
for(let i = 0; i<10 ; i++){
    ids[i]=new ID();
}
console.log(ids);
/*
    [
        ID { id: 1 }, ID { id: 2 }, ID { id: 3 }, ID { id: 4 },
        ID { id: 5 }, ID { id: 6 }, ID { id: 7 }, ID { id: 8 },
        ID { id: 9 }, ID { id: 10 }
    ]
*/