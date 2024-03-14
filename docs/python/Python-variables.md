---
sidebar_position: 6
---

Variables in Python are used to store data values. They act as containers that hold references to objects in memory. Here is a document based on the information from the link you provided:

---

# Python Variables

Variables in Python are used to store data values. They are created when you assign a value to a variable name. In Python, you don't need to explicitly declare the type of a variable. The type of the variable is inferred based on the value assigned to it.

#### Variable Naming Rules

1. Variable names can contain letters (a-z, A-Z), digits (0-9), and underscore (_).
2. A variable name must start with a letter or an underscore.
3. Variable names are case-sensitive, meaning `myVar` and `myvar` are different variables.
4. Python keywords (reserved words) cannot be used as variable names.

#### Assigning Values to Variables

In Python, you can assign a value to a variable using the assignment operator (`=`). The variable is created if it doesn't exist, and if it already exists, the value is updated.

```python
# Assigning values to variables
x = 10
name = "John Doe"
is_active = True
```

#### Multiple Assignment

Python allows you to assign values to multiple variables in a single line.

```python
# Multiple assignment
x, y, z = 10, 20, 30
```

#### Variable Reassignment

You can assign a new value to an existing variable.

```python
# Variable reassignment
x = 10
x = 20  # x is now 20
```

#### Variable Data Types

Variables in Python can hold values of different data types. Some common data types include:

- **Numeric Types**: `int` (integer), `float` (floating-point), `complex` (complex numbers)
- **Sequence Types**: `str` (string), `list` (list), `tuple` (tuple)
- **Mapping Type**: `dict` (dictionary)
- **Boolean Type**: `bool` (boolean)
- **None Type**: `None` (null-like)

```python
# Variables with different data types
x = 10  # int
y = 3.14  # float
name = "John Doe"  # str
is_active = True  # bool
```

#### Variable Scope

The scope of a variable determines its visibility and accessibility within a program. In Python, variables have either global or local scope.

- **Global Variables**: Defined outside any function or block. They can be accessed from anywhere in the program.
- **Local Variables**: Defined inside a function or block. They are only accessible within that function or block.

#### Printing Variables

You can display the value of a variable using the `print()` function.

```python
x = 10
print(x)  # Output: 10
```

#### Type Conversion (Type Casting)

Python provides built-in functions to convert variables from one data type to another. This is known as type conversion or type casting.

```python
x = 10
y = str(x)  # Convert x to a string
z = float(x)  # Convert x to a float
```