// Suffix Automaton implementation for substring queries
// Provides: buildSuffixAutomaton, countDistinctSubstrings, longestCommonSubstring

class SAMState {
  constructor() {
    this.next = Object.create(null)
    this.link = -1
    this.len = 0
  }
}

function buildSuffixAutomaton(s) {
  const states = [new SAMState()]
  let last = 0

  for (const ch of s) {
    const cur = states.length
    states.push(new SAMState())
    states[cur].len = states[last].len + 1

    let p = last
    while (p !== -1 && states[p].next[ch] === undefined) {
      states[p].next[ch] = cur
      p = states[p].link
    }

    if (p === -1) {
      states[cur].link = 0
    } else {
      const q = states[p].next[ch]
      if (states[p].len + 1 === states[q].len) {
        states[cur].link = q
      } else {
        const clone = states.length
        states.push(new SAMState())
        states[clone].len = states[p].len + 1
        states[clone].next = { ...states[q].next }
        states[clone].link = states[q].link

        while (p !== -1 && states[p].next[ch] === q) {
          states[p].next[ch] = clone
          p = states[p].link
        }
        states[q].link = states[cur].link = clone
      }
    }

    last = cur
  }

  return { states, last }
}

function countDistinctSubstrings(s) {
  const { states } = buildSuffixAutomaton(s)
  let count = 0
  // State 0 is the initial state; skip it in the sum
  for (let v = 1; v < states.length; v++) {
    const link = states[v].link
    const add = states[v].len - (link === -1 ? 0 : states[link].len)
    count += add
  }
  return count
}

function longestCommonSubstring(a, b) {
  // Build SAM of string a, then walk b to find LCS
  const { states } = buildSuffixAutomaton(a)
  let v = 0
  let l = 0
  let best = 0
  let bestEnd = -1

  for (let i = 0; i < b.length; i++) {
    const ch = b[i]
    if (states[v].next[ch] !== undefined) {
      v = states[v].next[ch]
      l++
    } else {
      while (v !== -1 && states[v].next[ch] === undefined) {
        v = states[v].link
      }
      if (v === -1) {
        v = 0
        l = 0
        continue
      } else {
        l = states[v].len + 1
        v = states[v].next[ch]
      }
    }
    if (l > best) {
      best = l
      bestEnd = i
    }
  }

  if (best === 0) return ''
  return b.slice(bestEnd - best + 1, bestEnd + 1)
}

export { buildSuffixAutomaton, countDistinctSubstrings, longestCommonSubstring }