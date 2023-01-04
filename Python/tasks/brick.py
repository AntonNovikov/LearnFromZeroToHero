def does_brick_fit(a, b, c, w, h):
    x, y = sorted([a, b, c]), sorted([w, h])
    return x[0] <= y[0] and x[1] <= y[1]

# def does_brick_fit(a, b, c, w, h):
#     a, b, c = sorted((a, b, c))
#     return a * b <= w * h    

# does_brick_fit = lambda a, b, c, *z: min(a, b, c) <= min(z) and sorted([a, b, c])[1] <= max(z)    

print(
does_brick_fit(1, 1, 1, 1, 1), 
# ➞ True
does_brick_fit(1, 2, 1, 1, 1) ,
# ➞ True
does_brick_fit(1, 2, 2, 1, 1) 
# ➞ False
)