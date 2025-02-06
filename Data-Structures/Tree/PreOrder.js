function preOrder (root) {
  if (root === null) return []

  const left = preOrder(root.left)
  const right = preOrder(root.right)

  return [root.value, ...left, ...right]
}

export { preOrder }
