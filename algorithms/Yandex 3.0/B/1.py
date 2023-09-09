textIn = "Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe."
import sys
from collections import OrderedDict
from itertools import zip_longest
# input = sys.stdin.read().strip() # strip() ~ trim()
input = textIn
print(input)
ft = {}
for char in input:
    if char != " " and char != "\n":
        ft[char] = ft.get(char, "") + "#"
od = OrderedDict(sorted(ft.items()))
del OrderedDict
for row in tuple(zip_longest(*od.values(), fillvalue=" "))[::-1]:
    print("".join(row))
del zip_longest