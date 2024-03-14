---
sidebar_position: 23
---

In Python, a function is a block of reusable code that performs a specific task. Functions help in organizing code, making it easier to read, understand, and maintain. You can define your own functions in Python using the `def` keyword, and then you can call those functions to execute the code inside them.

---
# Python Functions

Here's the general syntax of a function in Python:

```python
def function_name(parameters):
    # Function body (code block)
    # ...
    return value
```

Let's see some examples of functions in Python:

**Example 1: Simple Function**

```python
def greet():
    print("Hello! Welcome to the Python world.")

# Calling the function
greet()
```

Output:
```
Hello! Welcome to the Python world.
```

**Example 2: Function with Parameters**

Functions can take parameters, which are variables that you can pass to the function when calling it.

```python
def add_numbers(a, b):
    result = a + b
    return result

# Calling the function with arguments (2 and 3)
sum_result = add_numbers(2, 3)
print(sum_result)  # Output: 5
```

**Example 3: Function with Default Parameter Value**

You can set default values for function parameters. If a value is not passed for that parameter, the default value will be used.

```python
def greet_person(name="Guest"):
    print(f"Hello, {name}!")

# Calling the function without argument
greet_person()  # Output: Hello, Guest!

# Calling the function with an argument
greet_person("Alice")  # Output: Hello, Alice!
```

**Example 4: Function with a Return Value**

Functions can return values using the `return` keyword. The returned value can be assigned to a variable or used in other parts of the code.

```python
def square(number):
    return number ** 2

# Calling the function and using the returned value
result = square(5)
print(result)  # Output: 25
```

**Example 5: Recursive Function**

A recursive function is a function that calls itself. It's often used for problems that can be broken down into smaller, identical sub-problems.

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Calculating factorial of 5
result = factorial(5)
print(result)  # Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
```

These are just some basic examples to illustrate functions in Python. Functions are essential for writing clean and maintainable code, and you can create more complex functions to perform various tasks in your programs.