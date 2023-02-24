# by chris
print((lambda x: x*99+x)(1**5*5))
print((1**5*5))

#  by Javier I. Rivera R.
a = dict.fromkeys(range(5), 1)
print(a)
y = list(a.values()).count(2)
one = list(a.values()).count(1)
print(a.values())
print(list(a.values()))
print()
print(y)
print(one)

#  by Sfincs
nums = range(5)
print(nums)
a = 1
for i in nums[1:]:
    print(i)
    a *= i
print(a)
