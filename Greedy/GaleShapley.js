/**
 * The Gale-Shapley algorithm is used to find a stable matching between two sets
 * of equal size (e.g., donors and recipients) where no two elements prefer each
 * other over their current partners. It ensures a stable matching by proposing
 * from one side to the other until all are matched.
 *
 * Complexity:
 *    Worst-case performance O(n^2)
 *    Best-case performance O(n^2)
 *
 * Reference:
 *    https://en.wikipedia.org/wiki/Stable_marriage_problem
 *    https://www.youtube.com/watch?v=Qcv1IqHWAzg (Numberphile)
 *
 */

/**
 *
 * @param {number[][]} donorPref Preferences of donors, where each donor has an ordered list of recipients.
 * @param {number[][]} recipientPref Preferences of recipients, where each recipient has an ordered list of donors.
 * @returns {number[]} Array where the index is the donor, and the value at the index is the matched recipient.
 *
 * @example
 * const donorPref = [[0, 1, 3, 2], [0, 2, 3, 1], [1, 0, 2, 3], [0, 3, 1, 2]];
 * const recipientPref = [[3, 1, 2, 0], [3, 1, 0, 2], [0, 3, 1, 2], [1, 0, 3, 2]];
 * stableMatching(donorPref, recipientPref); // Output: [1, 2, 3, 0]
 */
function stableMatching(donorPref, recipientPref) {
  // Initialize the number of donors and create a list of unmatched donors
  let n = donorPref.length
  let unmatchedDonors = Array.from({ length: n }, (_, i) => i)

  // Records of which recipient each donor is paired with and vice versa
  let donorRecord = Array(n).fill(-1) // Donor to recipient
  let recRecord = Array(n).fill(-1) // Recipient to donor

  // Array to track how many recipients each donor has proposed to
  let numDonations = Array(n).fill(0)

  // While there are unmatched donors
  while (unmatchedDonors.length > 0) {
    // Take the first unmatched donor
    let donor = unmatchedDonors[0]
    let donorPreference = donorPref[donor]

    // Find the next recipient this donor prefers
    let recipient = donorPreference[numDonations[donor]]
    numDonations[donor] += 1

    // Get recipient's preference list and check the current match
    let recPreference = recipientPref[recipient]
    let prevDonor = recRecord[recipient]

    // If recipient is already matched, check if they prefer the new donor
    if (prevDonor !== -1) {
      if (recPreference.indexOf(prevDonor) > recPreference.indexOf(donor)) {
        // If the new donor is preferred, match them and unmatch the previous donor
        recRecord[recipient] = donor
        donorRecord[donor] = recipient
        unmatchedDonors.push(prevDonor)
        unmatchedDonors.splice(unmatchedDonors.indexOf(donor), 1) // Remove the current donor from unmatched
      }
    } else {
      // If the recipient is not matched, pair them with the current donor
      recRecord[recipient] = donor
      donorRecord[donor] = recipient
      unmatchedDonors.splice(unmatchedDonors.indexOf(donor), 1) // Remove the current donor from unmatched
    }
  }

  return donorRecord
}

// // Example usage:
// const donorPref = [[0, 1, 3, 2], [0, 2, 3, 1], [1, 0, 2, 3], [0, 3, 1, 2]];
// const recipientPref = [[3, 1, 2, 0], [3, 1, 0, 2], [0, 3, 1, 2], [1, 0, 3, 2]];
// console.log(stableMatching(donorPref, recipientPref)); // Output: [1, 2, 3, 0]
export { stableMatching }
