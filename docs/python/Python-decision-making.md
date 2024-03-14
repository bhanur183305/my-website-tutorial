---
sidebar_position: 16
---

In Python, decision-making is implemented using conditional statements. Conditional statements allow the program to execute different blocks of code based on specific conditions. The main conditional statements in Python are the `if` statement, the `if-else` statement, and the `if-elif-else` statement. Here is an explanation of each along with examples and diagrams:

---
# Python Decision Making

1. **if Statement:**
   The `if` statement allows the program to execute a block of code only if a specific condition is true. If the condition is true, the indented code block under the `if` statement is executed. If the condition is false, the code block is skipped. Here is the syntax:

   ```python
   if condition:
       # Code to execute if the condition is true
   ```

   Example:
   ```python
   age = 18
   if age >= 18:
       print("You are an adult")
   ```

   Diagram:
   ```
   if condition:
       |   Code to execute if the condition is true
   ```

2. **if-else Statement:**
   The `if-else` statement allows the program to execute one block of code if a condition is true, and another block of code if the condition is false. If the condition is true, the code block under the `if` statement is executed. If the condition is false, the code block under the `else` statement is executed. Here is the syntax:

   ```python
   if condition:
       # Code to execute if the condition is true
   else:
       # Code to execute if the condition is false
   ```

   Example:
   ```python
   age = 16
   if age >= 18:
       print("You are an adult")
   else:
       print("You are not an adult")
   ```

   Diagram:
   ```
   if condition:
       |   Code to execute if the condition is true
       |
   else:
       |   Code to execute if the condition is false
   ```

3. **if-elif-else Statement:**
   The `if-elif-else` statement allows the program to test multiple conditions and execute different code blocks based on the conditions. It provides an alternative to using multiple `if-else` statements. The conditions are evaluated in order, and the code block under the first condition that is true is executed. If none of the conditions are true, the code block under the `else` statement is executed. Here is the syntax:

   ```python
   if condition1:
       # Code to execute if condition1 is true
   elif condition2:
       # Code to execute if condition2 is true
   else:
       # Code to execute if none of the conditions are true
   ```

   Example:
   ```python
   marks = 85
   if marks >= 90:
       print("Grade A")
   elif marks >= 80:
       print("Grade B")
   elif marks >= 70:
       print("Grade C")
   else:
       print("Grade D")
   ```

   Diagram:
   ```
   if condition1:
       |   Code to execute if condition1 is true
       |
   elif condition2:
       |   Code to execute if condition2 is true
       |
   else:
       |   Code to execute if none of the conditions are true
   ```

These conditional statements allow you to make decisions and control the flow of your program based on specific conditions. They are essential for implementing logic and handling different scenarios in your Python code. The examples and diagrams provided illustrate how the different conditional statements are used and executed based on the conditions.