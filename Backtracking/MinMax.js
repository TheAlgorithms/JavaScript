/*
 *
 *  Min Max problem
 *
 *  Min Max problem is a problem where we need to find the maximum score of an event by comparing all * *  possible moves in the game
 *
 */

//     nodeIndex is index of current node in scores[].
//     if move is of maximizer return true else false
//     leaves of game tree is stored in scores[]
//     this.height is maximum this.height of Game tree

//     depth is current depth in game tree.
//     nodeIndex is index of current node in scores[].
//     scores[] contains the leaves of game tree.
//     this.height is maximum this.height of game tree.

//     >>> scores = [90, 23, 6, 33, 21, 65, 123, 34423]
//     >>> this.height = math.log(len(scores), 2)
//     >>> minimax(0, 0, True, scores, this.height)
//     65
//     >>> minimax(-1, 0, True, scores, this.height)
//     Traceback (most recent call last):
//         ...
//     ValueError: Depth cannot be less than 0
//     >>> minimax(0, 0, True, [], 2)
//     Traceback (most recent call last):
//         ...
//     ValueError: Scores cannot be empty
//     >>> scores = [3, 5, 2, 9, 12, 5, 23, 23]
//     >>> this.height = math.log(len(scores), 2)
//     >>> minimax(0, 0, True, scores, this.height)
//     12

class MinMax {
  constructor (scores, depth, nodeIndex, isMax) {
    if (scores.length === 0) {
      throw RangeError('Scores cannot be empty')
    }
    if (depth < 0) {
      throw RangeError("Depth can't be less than zero")
    }
    this.scores = scores
    this.height = Math.log2(scores.length)
    this.depth = depth
    this.nodeIndex = nodeIndex
    this.isMax = isMax
    this.ans = -1
  }

  solve (depth, nodeIndex, isMax, scores, height) {
    if (depth === height) {
      return scores[nodeIndex]
    }

    if (isMax) {
      return Math.max(
        this.solve(depth + 1, nodeIndex * 2, false, scores, height),
        this.solve(depth + 1, nodeIndex * 2 + 1, false, scores, height)
      )
    }

    return Math.min(
      this.solve(depth + 1, nodeIndex * 2, true, scores, height),
      this.solve(depth + 1, nodeIndex * 2 + 1, true, scores, height)
    )
  }

  get_ans () {
    this.ans = this.solve(
      this.depth,
      this.nodeIndex,
      this.isMax,
      this.scores,
      this.height
    )
  }
}

// MinMax(scores, depth, nodeindex, ismax)
// const _newMinMax = new MinMax([90, 23, 6, 33, 21, 65, 123, 34423],0,0,true)
// _newMinMax.get_ans()
// console.log(_newMinMax.ans);

export { MinMax }
