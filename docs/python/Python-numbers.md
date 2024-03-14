---
sidebar_position: 10
---

In Python, there are several numeric data types that can be used to represent different kinds of numbers. Here are the commonly used numeric data types in Python along with their detailed explanations and examples:

---
# Python Numbers

1. **Integer (`int`):**
   An integer represents whole numbers without any decimal point. In Python, integers are represented by the `int` data type. They can be positive, negative, or zero. Integers have unlimited precision, meaning they can represent numbers of any size. Here is an example:

   ```python
   x = 10
   y = -5
   z = 0
   ```

2. **Floating-Point (`float`):**
   Floating-point numbers, also known as floats, represent real numbers with a decimal point. In Python, floats are represented by the `float` data type. They can be positive, negative, or zero. Floats are typically used to represent numbers with fractional parts. Here is an example:

   ```python
   x = 3.14
   y = -2.5
   z = 0.0
   ```

3. **Long Integer (`long`):**
   In Python 2, there was a separate data type called `long` for representing long integers. However, in Python 3, the `int` data type can represent integers of any size, so the `long` data type is no longer necessary. Python automatically promotes integers to long integers as needed. Here is an example:

   ```python
   x = 12345678901234567890
   y = 98765432109876543210
   ```

4. **Complex (`complex`):**
   Complex numbers are numbers with both a real part and an imaginary part. In Python, complex numbers are represented by the `complex` data type. They are written in the form `a + bj`, where `a` is the real part and `b` is the imaginary part. Here is an example:

   ```python
   x = 3 + 4j
   y = -2j
   ```

   You can perform various operations on complex numbers, such as addition, subtraction, multiplication, division, and more.

   ```python
   a = 2 + 3j
   b = 1 - 2j

   # Addition
   c = a + b
   print(c)  # Output: (3 + 1j)

   # Subtraction
   d = a - b
   print(d)  # Output: (1 + 5j)

   # Multiplication
   e = a * b
   print(e)  # Output: (8 + 1j)

   # Division
   f = a / b
   print(f)  # Output: (0.8 + 1.6j)
   ```

These numeric data types allow you to work with different kinds of numbers in Python. Understanding their characteristics and usage will help you perform numerical computations and solve mathematical problems in your Python programs.