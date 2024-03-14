---
sidebar_position: 8
---

Python provides a variety of operators that allow you to perform different operations on values and variables. Here are some of the commonly used operators in Python along with examples:

---

# Python Operators
Operators in Python are symbols or special keywords that perform operations on operands (values or variables). Python provides a wide range of operators to perform different types of operations, such as arithmetic operations, assignment operations, comparison operations, logical operations, and more. Here is an explanation of the different types of operators:

Understanding and using these operators is essential for performing various operations and implementing logic in Python programs. They allow you to manipulate values, make decisions, perform calculations, and control the flow of your code.
1. **Arithmetic Operators:**
   Arithmetic operators are used to perform mathematical calculations on numeric values. They include addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), floor division (`//`), modulo (remainder) (`%`), and exponentiation (`**`).

   - Addition: `+`
   ```python
   result = 10 + 5  # 15
   ```

   - Subtraction: `-`
   ```python
   result = 10 - 5  # 5
   ```

   - Multiplication: `*`
   ```python
   result = 10 * 5  # 50
   ```

   - Division: `/`
   ```python
   result = 10 / 5  # 2.0
   ```

   - Floor Division: `//`
   ```python
   result = 10 // 3  # 3
   ```

   - Modulo (Remainder): `%`
   ```python
   result = 10 % 3  # 1
   ```

   - Exponentiation: `**`
   ```python
   result = 2 ** 3  # 8
   ```

2. **Assignment Operators:**
   Assignment operators are used to assign values to variables. They include the assignment operator (`=`) and combined assignment operators such as addition assignment (`+=`), subtraction assignment (`-=`), multiplication assignment (`*=`), division assignment (`/=`), and modulo assignment (`%=`). These operators allow you to perform an operation and assign the result to the variable in one step.

   - Assignment: `=`
   ```python
   x = 10
   ```

   - Addition Assignment: `+=`
   ```python
   x += 5  # Equivalent to x = x + 5
   ```

   - Subtraction Assignment: `-=`
   ```python
   x -= 5  # Equivalent to x = x - 5
   ```

   - Multiplication Assignment: `*=`
   ```python
   x *= 5  # Equivalent to x = x * 5
   ```

   - Division Assignment: `/=`
   ```python
   x /= 5  # Equivalent to x = x / 5
   ```

   - Modulo Assignment: `%=`
   ```python
   x %= 3  # Equivalent to x = x % 3
   ```

3. **Comparison Operators:**
   Comparison operators are used to compare values and determine the relationship between them. They include equal to (`==`), not equal to (`!=`), greater than (`>`), less than (`<`), greater than or equal to (`>=`), and less than or equal to (`<=`). These operators return a Boolean value (`True` or `False`) based on the comparison result.

   - Equal to: `==`
   ```python
   result = (10 == 5)  # False
   ```

   - Not Equal to: `!=`
   ```python
   result = (10 != 5)  # True
   ```

   - Greater than: `>`
   ```python
   result = (10 > 5)  # True
   ```

   - Less than: `<`
   ```python
   result = (10 < 5)  # False
   ```

   - Greater than or equal to: `>=`
   ```python
   result = (10 >= 5)  # True
   ```

   - Less than or equal to: `<=`
   ```python
   result = (10 <= 5)  # False
   ```

4. **Logical Operators:**
   Logical operators are used to combine or manipulate Boolean values. They include logical AND (`and`), logical OR (`or`), and logical NOT (`not`). These operators are often used to make decisions or perform conditional operations based on multiple conditions.

   - Logical AND: `and`
   ```python
   result = (True and False)  # False
   ```

   - Logical OR: `or`
   ```python
   result = (True or False)  # True
   ```

   - Logical NOT: `not`
   ```python
   result = not True  # False
   ```

5. **Membership Operators:**
   Membership operators are used to test whether a value is a member of a sequence (such as a list, tuple, or string). They include the `in` operator, which returns `True` if the value is present in the sequence, and the `not in` operator, which returns `True` if the value is not present in the sequence.

   - Membership (in): `in`
   ```python
   result = (3 in [1, 2, 3, 4, 5])  # True
   ```

   - Membership (not in): `not in`
   ```python
   result = (3 not in [1, 2, 3,

 4, 5])  # False
   ```

6. **Identity Operators:**
   Identity operators are used to compare the identity of two objects (whether they refer to the same object in memory). They include the `is` operator, which returns `True` if the two objects are the same, and the `is not` operator, which returns `True` if the two objects are not the same.

   - Identity (is): `is`
   ```python
   result = (5 is 5)  # True
   ```

   - Identity (is not): `is not`
   ```python
   result = (5 is not 5)  # False
   ```

7. **Bitwise Operators:**
   Bitwise operators are used to perform operations on individual bits of binary numbers. They include bitwise AND (`&`), bitwise OR (`|`), bitwise XOR (`^`), bitwise NOT (`~`), left shift (`<<`), and right shift (`>>`). These operators are often used in low-level programming and manipulation of binary data.

   - Bitwise AND: `&`
   ```python
   result = (5 & 3)  # 1
   ```

   - Bitwise OR: `|`
   ```python
   result = (5 | 3)  # 7
   ```

   - Bitwise XOR: `^`
   ```python
   result = (5 ^ 3)  # 6
   ```

   - Bitwise NOT: `~`
   ```python
   result = (~5)  # -6
   ```

   - Left Shift: `<<`
   ```python
   result = (5 << 2)  # 20
   ```

   - Right Shift: `>>`
   ```python
   result = (5 >> 2)  # 1
   ```

These are some of the commonly used operators in Python. Each operator serves a specific purpose and can be used in different scenarios to perform operations on values and variables.