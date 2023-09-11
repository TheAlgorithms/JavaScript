const UniqueElementInAnArray = (arr) => {
    let xr = 0;
    for ( let i = 0; i < arr.length; i++ )
        xr ^= arr[i];
    return xr;
}

export { UniqueElementInAnArray }