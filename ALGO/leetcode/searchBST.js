// 700. Search in a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


 const searchTree =(root,val)=>{
    if(!root){
       return null
    }
    if(root.val === val){
       return root
    }

    let result;

    if (root.val > val){
      result =  searchBST(root.left, val)
    }else{
      result =  searchBST(root.right, val)
    }

    return result
 }

 const searchBST=(root, val)=>{
   while(root && root.val !== val){
     if(root.val > val){
        root = root.left
     }else {
        root = root.right
     }
   }
   return root
 }
