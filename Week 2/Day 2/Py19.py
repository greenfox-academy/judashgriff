# - Create a variable named `aj`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Reverse the order of the elements in `aj`
# - Print the elements of the reversed `aj`

aj = [3, 4, 5, 6, 7]

# aj.reverse()

# bj = aj[::-1] 
# print (bj)

bj = []
c = 0

for i in aj:
    bj.append(aj[-1-c])
    c += 1


print(bj)