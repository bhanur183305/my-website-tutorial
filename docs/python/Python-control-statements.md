---
sidebar_position: 18
---

In Python, control statements are used to alter the flow of execution in a program. They allow you to perform repetitive tasks, make decisions based on conditions, and handle exceptional situations. The main control statements in Python are loops (`for` and `while`) and the `break` and `continue` statements. Here is an explanation of each control statement along with examples:

# Python Control Statements

1. **`for` Loop:**
   The `for` loop is used to iterate over a sequence (such as a list, tuple, string, or range) and execute a block of code for each item in the sequence. It allows you to perform repetitive tasks without explicitly specifying the start and end points. Here is the syntax:

   ```python
   for item in sequence:
       # Code to execute for each item
   ```

   Example:
   ```python
   fruits = ["apple", "banana", "orange"]
   for fruit in fruits:
       print(fruit)
   ```

   Output:
   ```
   apple
   banana
   orange
   ```

2. **`while` Loop:**
   The `while` loop is used to execute a block of code repeatedly as long as a condition is true. It allows you to perform repetitive tasks when the number of iterations is not known in advance. Here is the syntax:

   ```python
   while condition:
       # Code to execute while the condition is true
   ```

   Example:
   ```python
   count = 0
   while count < 5:
       print(count)
       count += 1
   ```

   Output:
   ```
   0
   1
   2
   3
   4
   ```

3. **`break` Statement:**
   The `break` statement is used to exit a loop prematurely. It is typically used when a certain condition is met, and you want to terminate the loop immediately. When the `break` statement is encountered, the program execution jumps out of the loop. Here is an example:

   ```python
   for i in range(10):
       if i == 5:
           break
       print(i)
   ```

   Output:
   ```
   0
   1
   2
   3
   4
   ```

4. **`continue` Statement:**
   The `continue` statement is used to skip the rest of the current iteration of a loop and move to the next iteration. It is typically used when you want to skip certain items or conditions within a loop. When the `continue` statement is encountered, the program execution jumps to the beginning of the loop for the next iteration. Here is an example:

   ```python
   for i in range(10):
       if i == 5:
           continue
       print(i)
   ```

   Output:
   ```
   0
   1
   2
   3
   4
   6
   7
   8
   9
   ```

These control statements allow you to control the flow of your program, perform repetitive tasks, and handle exceptional situations. The examples provided demonstrate how each control statement is used in different scenarios.