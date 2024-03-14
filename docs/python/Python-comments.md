---
sidebar_position: 4
---

In Python, you can add comments to your code to provide explanations or disable specific lines of code. Comments are ignored by the Python interpreter and are meant for human readers. Here are some examples of different types of comments in Python:

---
# Python Comments

1. **Single-line comments**:
   Single-line comments start with the `#` character and continue until the end of the line.

   Example:
   ```python
   # This is a single-line comment
   ```

2. **Multi-line comments**:
   Python doesn't have a built-in syntax for multi-line comments, but you can use triple quotes (`'''` or `"""`) to achieve a similar effect. Although the interpreter does not consider them as comments, they are commonly used for documenting code.

   Example:
   ```python
   '''
   This is a multi-line comment.
   It can span across multiple lines.
   '''
   ```

3. **Commenting out code**:
   You can also use comments to temporarily disable specific lines of code. This can be helpful for testing or debugging purposes.

   Example:
   ```python
   # print("This line is commented out")
   ```

   In the example above, the `print()` statement is commented out and will not be executed.
4. **Docstring Comments**:
   In Python, docstring comments (documentation strings) are used to provide documentation for functions, classes, and modules. They are multi-line strings enclosed in triple quotes (`""" """` or `''' '''`) that appear immediately after the definition of a function, class, or module. Docstrings serve as a way to describe the purpose, usage, and behavior of the code they document.

Here's an example of using docstring comments:

```python
def calculate_area(radius):
    """
    Calculates the area of a circle.

    Parameters:
    radius (float): The radius of the circle.

    Returns:
    float: The area of the circle.
    """
    return 3.14 * radius ** 2
```

In the above example, the docstring comment provides a description of the `calculate_area` function. It specifies the parameters, their types, and provides information about the return value.

Docstring comments can be accessed using the `__doc__` attribute of an object. For example, to retrieve the docstring of the `calculate_area` function:

```python
print(calculate_area.__doc__)
```

The output will be:
```
Calculates the area of a circle.

Parameters:
radius (float): The radius of the circle.

Returns:
float: The area of the circle.
```

Docstrings are useful for documenting your code and can be used by tools and frameworks for generating automatic documentation or providing interactive help. It's good practice to include descriptive and informative docstrings to make your code more understandable and maintainable.

Comments are a useful way to make your code more understandable and maintainable. They can be used to document your code, explain your thought process, or add reminders for future modifications.

It's good practice to write clear and concise comments that enhance the readability of your code.