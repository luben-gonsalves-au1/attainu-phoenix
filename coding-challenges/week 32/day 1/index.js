validate() {
    function validateBst(tree, minValue, maxValue) {
      if (tree == null) return true;
      if (tree.value < minValue || tree.value >= maxValue) return false;
      const isLeftValid = validateBst(tree.left, minValue, tree.value);
      return isLeftValid && validateBst(tree.right, tree.value, maxValue);
    }
    return validateBst(this, -Infinity, Infinity);
  }