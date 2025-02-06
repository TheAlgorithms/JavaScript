// This is the Stable Matching Gale Shapley Algorithm 
// Gale Shapley describes the method of Stable One to One matching

function initFreeMen() {
  for (let man in preferredRankingMen) {
    freeMen.push(man);
  }
}

function stableMatch() {
  while (freeMen.length > 0) {
    for (let man of freeMen) {
      startMatching(man);
    }
  }
}

function startMatching(man) {
  for (let woman of preferredRankingMen[man]) {
    const takenMatch = temporaryEngagement.find((couple) => woman === couple[1]);

    if (!takenMatch) {
      temporaryEngagement.push([man, woman]);
      freeMen = freeMen.filter((m) => m !== man);
      break;
    } else {
      const currentGuy = takenMatch[0];
      const currentGuyIndex = preferredRankingWomen[woman].indexOf(currentGuy);
      const potentialGuyIndex = preferredRankingWomen[woman].indexOf(man);

      if (currentGuyIndex > potentialGuyIndex) {
        freeMen = freeMen.filter((m) => m !== man);
        freeMen.push(currentGuy);
        takenMatch[0] = man;
        break;
      }
    }
  }
}

const preferredRankingMen = {
  'Alice': ['Frank', 'Eva', 'Dave'],
  'Bob': ['Frank', 'Dave', 'Eva'],
  'Carol': ['Dave', 'Eva', 'Frank']
};

const preferredRankingWomen = {
  'Dave': ['Carol', 'Alice', 'Bob'],
  'Eva': ['Alice', 'Bob', 'Carol'],
  'Frank': ['Carol', 'Alice', 'Bob']
};

// This will store all the paired men and women
// until the loop ends
// This array will store the current engagements in the format [man, woman]
const temporaryEngagement = [];

// This will store all the men who are yet
// to be paired and are still single
// Initially, all the men are considered free and added to this array.
let freeMen = [];

initFreeMen();
stableMatch();
console.log("Final Matching:", temporaryEngagement);
