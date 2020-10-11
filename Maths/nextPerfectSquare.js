function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if(Number.isInteger(Math.sqrt(sq)))
  {
    var rooted = Math.sqrt(sq);
    rooted++;
    sq = rooted * rooted;
    return sq;
   }
  return -1;
}
