const generateParentheses =(n, chres, openParenthese, closedParenthese, res) => {
  if (openParenthese === n && closedParenthese === n) {
      res.push(chres);
      return;
  }

  if (openParenthese <= n) {
      generateParentheses(n, chres + "(", openParenthese + 1, closedParenthese, res);
  }
    
  if (closedParenthese < openParenthese) {
      generateParentheses(n, chres + ")", openParenthese, closedParenthese + 1, res);
  }
}

let res = [];
generateParentheses(3, [], 0, 0, res);

export { generateParentheses }