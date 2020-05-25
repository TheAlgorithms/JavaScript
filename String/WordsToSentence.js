// Example wordToSentence(['cat', 'dog', 'mouse']) // should return "cat, dog and mouse"
function wordToSentence(words){
  if(!words) return '';
    words = words.filter((word) => word.length);
    let formated = '';
    for(let i=0; i<words.length; i++) {
        if(i === words.length - 1 && i > 0) formated += ` and `;
        else if (i > 0) formated += `, `;
        formated += words[i];
    }
    return formated;
}
