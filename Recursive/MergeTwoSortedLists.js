/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  let result = new ListNode();

  let vl1 = list1?.val;
  let vl2 = list2?.val;

  if (vl1 === undefined && vl2 === undefined) return list1;

  function recursiveNode(node) {
      if (node.next) {
          return recursiveNode(node.next);
      }
      return node;
  }

  while(true) {
      if (!list1 && !list2) break;

      let v1 = (list1?.val ?? Infinity);
      let v2 = (list2?.val ?? Infinity);

      let deepNode = recursiveNode(result);

      if (v1 <= v2) {
          deepNode.val = v1;
          list1 = list1?.next;
      } else {
          deepNode.val = v2;
          list2 = list2?.next;
      }

      if (list1 || list2) deepNode.next = new ListNode();
  }

  return result;
};
