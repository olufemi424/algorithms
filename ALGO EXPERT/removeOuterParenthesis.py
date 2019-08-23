# 1021. Remove Outermost Parentheses

# Input: "(()())(())"
# Output: "()()()"
# Explanation:
# The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
# After removing outer parentheses of each part, this is "()()" + "()" = "()()()".


def removeOuterParenthesis(s):
    ret, stack = '', []
    for x in s:
        if x == "(":
            if len(stack) >= 1:
                ret += "("
            stack.append("(")
        elif x == ")":
            if len(stack) > 1:
                ret += ")"
            stack.pop()
    return ret


s = "(()())(())"

print(removeOuterParenthesis(s))
