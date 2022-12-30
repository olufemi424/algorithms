# Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

# An interleaving of two strings s and t is a configuration where s and t are divided into n and m
# substrings
#  respectively, such that:

# s = s1 + s2 + ... + sn
# t = t1 + t2 + ... + tm
# |n - m| <= 1
# The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
# Note: a + b is the concatenation of strings a and b.


def isInterleave(s1, s2, s3):
    """
    :type s1: str
    :type s2: str
    :type s3: str
    :rtype: bool
    """
    if len(s1) + len(s2) != len(s3):
        return False

    dp = [ [False] * (len(s2) + 1) for i in range(len(s1) + 1)]
    dp[len(s1)][len(s2)] = True

    # print(dp)

    for i in range(len(s1), -1, -1):
        for j in range(len(s2), -1, -1):
            if i < len(s1) and s1[i] == s3[i + j] and dp[i + 1][j]:
                # print('first condition', i, len(s1), s1[i], s3[i + j], dp[i + 1][j])
                dp[i][j] = True
            if j < len(s2) and s2[j] == s3[i + j] and dp[i][j + 1]:
                # print('second condition', j, len(s2), s2[j], s3[i + j], dp[i][j + 1])
                dp[i][j] = True
    return dp[0][0]


    # dp =  {}
    # def defs(i, j):
    #     if i == len(s1) and j == len(s2);
    #         return True
    #     if (i, j) in dp:
    #         return dp[(i, j)]

    #     if i < len(s1) and s1[i] == s3[i + j] and defs(i + j, j):
    #         return True
    #     if j < len(s2) and s2[j] == s3[i + j] and defs(i, j + 1):
    #         return True

    #     dp[(i, j)] = False
    #     return False
    # return defs(0,0)


s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbcbcac"

print(isInterleave(s1, s2, s3))
