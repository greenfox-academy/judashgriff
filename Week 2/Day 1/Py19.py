# Write a program that reads a number form the standard input,
# If the number is zero or smaller it should print: Not enough
# If the number is one it should print: One
# If the number is two it should print: Two
# If the number is more than two it should print: A lot

print ("Man, you should really provide a number...")
num = int(input())

if num <= 0:
    print ("Not enough!")
if num == 1:
    print ("One")
if num == 2:
    print ("Two")
if num > 2:
    print ("A lot!")