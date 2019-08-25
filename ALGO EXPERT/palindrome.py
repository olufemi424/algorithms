# # 0(n^2) time | 0(n) space
# def isPalindrome(string):
#    reverseString = ''
#    for i in reversed(range(len(string))):
#       reverseString += string[i]
#    return string == reverseString


# 0(n) time | 0(n) space
# def isPalindrome(string):
#    reverseString = []
#    for i in reversed(range(len(string))):
#       reverseString.append(string[i])
#    return string == "".join(reverseString)

# print(isPalindrome('abcdcba'))

# 0(n) time | 0(n) space
# def isPalindrome(string, i=0):
#    j = len(string) - 1 -i
#    if i >= j:
#       return True
#    if string[i] != string[j]:
#       return False
#    return isPalindrome(string, i+1)


# 0(n) time | 0(1) space
def isPalindrome(string):
   leftIdx = 0;
   rightIdx = len(string)-1
   while leftIdx < rightIdx:
      if string[leftIdx] != string[rightIdx]:
         return False
      leftIdx += 1
      rightIdx -= 1
   return True

# print(isPalindrome('abcdcba'))