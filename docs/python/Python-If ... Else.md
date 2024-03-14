---
sidebar_position: 17
---

In Python, the if-else statement is a conditional statement used to make decisions in your code based on certain conditions. It allows you to execute different blocks of code depending on whether a given condition is True or False. It has the following basic syntax:

---
# Python If-Else Statements

```python
if condition:
    # Code block to be executed if the condition is true
else:
    # Code block to be executed if the condition is false
```

Here are some examples to illustrate how `if...else` works:

**Example 1: Check if a number is positive or negative**

```python
num = 10

if num > 0:
    print("The number is positive.")
else:
    print("The number is negative.")
```

Output:
```
The number is positive.
```

**Example 2: Check if a number is even or odd**

```python
num = 7

if num % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")
```

Output:
```
The number is odd.
```

**Example 3: Nested if...else**

You can have multiple levels of nested `if...else` statements to handle more complex conditions.

```python
num = 42

if num > 0:
    print("The number is positive.")
    if num % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")
else:
    print("The number is non-positive.")
```

Output:
```
The number is positive.
The number is even.
```

**Example 4: Using if...elif...else**

The `elif` (short for "else if") statement allows you to check multiple conditions in sequence.

```python
grade = 85

if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")
```

Output:
```
B
```

In this example, the code checks the grade variable and prints the corresponding letter grade based on the value.

Remember that in Python, proper indentation is crucial. Code blocks under `if`, `else`, or `elif` statements are defined by their indentation level. Make sure to maintain consistent indentation to avoid syntax errors.