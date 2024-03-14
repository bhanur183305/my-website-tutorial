---
sidebar_position: 37
---

In Python, scope refers to the region in a program where a particular variable is accessible and can be referenced. There are two main types of scopes in Python: local scope and global scope.

---
# Python Scope

1. Local Scope:
Local scope refers to the region within a function where variables are declared and can only be accessed from within that function. Once the function finishes executing, the variables in its local scope are destroyed, and their values are no longer accessible.

Example of local scope:

```python
def my_function():
    x = 10       # x is in the local scope of my_function
    print(x)

my_function()   # Output: 10

# Attempting to access x outside the function will result in an error
print(x)        # NameError: name 'x' is not defined
```

In this example, the variable `x` is defined within the `my_function()` function, making it accessible only within the function's scope.

2. Global Scope:
Global scope refers to the region in the program outside any functions or blocks where variables are declared. Variables declared in the global scope can be accessed and modified throughout the entire program.

Example of global scope:

```python
global_var = 100   # global_var is in the global scope

def my_function():
    print(global_var)   # We can access the global_var inside the function

my_function()    # Output: 100

# We can also modify the global_var from within the function
def modify_global_var():
    global global_var
    global_var = 200

modify_global_var()
print(global_var)   # Output: 200
```

In this example, `global_var` is declared outside any functions, making it accessible from within the function `my_function()`. Additionally, to modify the value of the global variable from within a function, we need to explicitly use the `global` keyword.

3. Nested Scope:
Python also supports nested scopes, where functions can be defined inside other functions. In such cases, the inner function can access variables from the outer (enclosing) function's scope.

Example of nested scope:

```python
def outer_function():
    outer_var = 5
    
    def inner_function():
        inner_var = 10
        print(outer_var + inner_var)  # Accessing outer_var from the inner_function
    
    inner_function()

outer_function()   # Output: 15
```

In this example, the `inner_function()` can access the `outer_var` from its enclosing `outer_function()`.

It's important to understand these scopes, as using variables without defining them in the correct scope can lead to unexpected behavior or errors in your Python code. Local variables can only be used within the function they are defined in, while global variables can be accessed and modified throughout the entire program. Nested functions have access to variables from their enclosing functions as well.