# # x is a variable
# x = 15
# y = 10

# # If x is greater than y, Print X wins
# # Else print y wins
# if x>y:
#     print('X wins')
# else:
#     print('Y wins')

# # Function/Method Definition
# def welcome_func():
#     print(' Welcome to GoDev')
#     print(' Welcome to MERN Stack Development')
#     print(' Welcome to Full stack development')
#     print(' Welcome to MERN Stack Development')
#     print(' Welcome to Full stack development')
#     print(' Welcome to MERN Stack Development')
#     print(' Welcome to Full stack development')


# # Call this method
# welcome_func()





# x = 2
# y = 5
# # Design a calculator which takes two inputs
# # Multiply these inputs
# # Add the result with 10 
# def my_calc(x,y):
#     print((x*y)+10)

# # Call the function and pass 2 parameters
# my_calc(2,5)

# # Call the function and pass 2 parameters
# my_calc(10,2)


# Design a calculator that takes three inputs
# resulting expression is  a^2 + 2b - 5c 

a = 5       # water
b = 2       # cement
c = 3       # soil
l = 1
m = 2
n = 5
s = ' Outside function or Global Variable'

def expression_calc(x,y,z):
    q = ' Local Variable or Inside Function'
    print(s)
    print((x*x)+(2*y)-(5*z))

expression_calc(l,m,n)