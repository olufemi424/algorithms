var rangeSumBST = function(root, L, R) {
  if (!root) return null;
  let results = 0;

  const dfs = node => {
    if (!node) return null;
    dfs(node.left);

    if (node.val >= L && node.val <= R) {
      results += node.val;
    }

    dfs(node.right);
  };
  dfs(root);

  return results;
};

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
