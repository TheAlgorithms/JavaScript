// Basic Promise in Async JS is shown
// Simulates fetching data from API (setTimeout function is used to incorporate the async behavior)

const resRej = prompt('Enter 1 to see resolve or 2/any other input to see reject')

    const getIDs = new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(resRej == 1){
                resolve([523, 883, 432, 974]);
            } else {
                reject('Error')
            }
            
        }, 1500);
    });

    getIDs
    .then(IDs => {
        console.log(IDs);
    })
    .catch(error => {
        console.log(error)
    })