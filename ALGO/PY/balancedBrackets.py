# write a funtion that takes in a string made up of brackets ("(","[","{","}","]",) and another optional characters. the funtion should return a boolean representing whether or not the string is balances if it has as many opening brackets as of given type as it has closing brackets of that type and if no brackets is unmatched. Note that a closing bracket cannot match a corresponsind opening bracket that comes after it. Similarly, brackets cannot overlap each other as in "[(])"


def balancedBrackets(string):
    openingBrackets = "([{"
    closinBrackets = ")]}"
    matchingBrackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    stack = []
    for char in string:
        if char in openingBrackets:
            stack.append(char)
        elif char in closinBrackets:
            if len(stack) == 0:
                return False
            if stack[-1] == matchingBrackets[char]:
                stack.pop()
            else:
                return False

    return len(stack) == 0


print(balancedBrackets("["))
