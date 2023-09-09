# arr = [[8, 9],[1, 2],[2, 3],[2, 4],[4, 5],[3, 8],[5, 8],[4, 6],[6, 7],[5, 3],]
arr = [[1, 2],[2, 3],[2, 4],[4, 5],[3, 8],[5, 8],[4, 6],[6, 7],[5, 3],]

b = 9
s = arr
# a, b = map(int,input()) # данные приходят попарно
# s = [[int(i) for i in input().split()] for j in range(b)]

print(b)
w = []
gd = []
k = 0
rr=0
for i in range(b):
    for j in range(2):
        gd+=[s[i][j]]
        if s[i][j] not in w:
            w+=[s[i][j]]
for i in range(len(w)):
    if gd.count(w[i])<2:
        rr+=1
print((rr+1)//2)