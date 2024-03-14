---
sidebar_position: 14
---

String formatting is the process of creating formatted strings by combining variables, constants, or expressions with placeholders inside a string. It allows you to construct dynamic strings where certain parts change based on the values of the variables or expressions involved.

String formatting is essential for generating human-readable output, displaying data, logging, and many other tasks where the content of a string needs to vary dynamically. It makes it easier to create complex strings without the need for tedious string concatenation.

---
# Python String Formatting

In Python, there are multiple ways to perform string formatting:

1. **Using %-formatting (old-style formatting):**
   This method uses the `%` operator to insert values into a string. Placeholders are represented by `%` followed by a format specifier indicating the data type to be inserted.

   ```python
   name = "Alice"
   age = 30

   # %s is a placeholder for a string, and %d is a placeholder for an integer
   message = "Hello, %s! You are %d years old." % (name, age)
   print(message)
   ```

2. **Using `str.format()`:**
   This method uses curly braces `{}` as placeholders and the `str.format()` method to substitute values into the string.

   ```python
   name = "Bob"
   age = 25

   # {} is a placeholder that will be replaced by the values passed to format()
   message = "Hello, {}! You are {} years old.".format(name, age)
   print(message)
   ```

3. **Using f-strings (formatted string literals) - Python 3.6 and later:**
   F-strings allow you to embed expressions directly inside curly braces `{}` in the string, making the code more concise and readable.

   ```python
   name = "Charlie"
   age = 40

   # Variables or expressions inside {} will be evaluated and substituted
   message = f"Hello, {name}! You are {age} years old."
   print(message)
   ```

In all these methods, the placeholders can also include formatting options to control how the values are displayed, such as specifying the number of decimal places for floats, adding leading zeros for integers, alignment, and more.

```python
pi = 3.14159265

# Formatting with %-formatting
print("Value of pi: %.2f" % pi)  # Output: "Value of pi: 3.14"

# Formatting with str.format()
print("Value of pi: {:.2f}".format(pi))  # Output: "Value of pi: 3.14"

# Formatting with f-string
print(f"Value of pi: {pi:.2f}")  # Output: "Value of pi: 3.14"
```

String formatting is a fundamental concept in programming, and mastering it is essential for creating readable and dynamic text output in various applications. F-strings are generally preferred in modern Python code due to their simplicity and efficiency.