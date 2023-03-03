# https://www.youtube.com/watch?v=IRdz2GgnQwk
import random
# n = int(input())

nMax= 35

n = random.randint (0,nMax)
f = [0] * (n+1)
f[1] = 2; f[2] = 4; f[3] = 7
 
i = 4
while i <= n:
  f[i] = (f[i-1] + f[i-2] + f[i-3])
  i+=1
 
print(f[n])