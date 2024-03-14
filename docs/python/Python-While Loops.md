---
sidebar_position: 20
---

A while loop is a control flow statement in programming that allows a block of code to be executed repeatedly as long as a specified condition is true. It is used when you want to repeat a certain action or code block until a specific condition is no longer satisfied.

---
# Python While Loops

The general syntax of a while loop is:

```python
while condition:
    # Code block to be executed while the condition is true
    # The code may modify variables that affect the condition
```

Here's how a while loop works:

1. **Condition Evaluation:** The condition specified after the `while` keyword is evaluated. If the condition is true, the code inside the loop's body is executed. If the condition is initially false, the loop is not executed at all, and the program moves to the first statement after the loop.

2. **Code Execution:** The code inside the loop's body is executed. This block of code may contain one or more statements.

3. **Re-evaluation of Condition:** After executing the code inside the loop, the condition is evaluated again. If the condition is still true, the loop repeats the execution of the code inside the loop's body. If the condition is false, the loop terminates, and the program continues with the next line of code after the loop.

The loop continues to execute as long as the condition remains true. If the condition becomes false during the execution of the loop, the loop exits, and the program continues with the statements after the loop.

While loops are useful when you want to perform a task repeatedly until a specific condition is met. However, it's crucial to ensure that the loop condition eventually becomes false to prevent infinite loops, which could lead to program crashes or excessive resource usage. Therefore, it's essential to modify the loop control variable or update the loop condition within the loop body, so the loop can eventually terminate.

Example of a while loop in Python:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

Output:
```
1
2
3
4
5
```

In this example, the while loop starts with `count` equal to 1. The condition `count <= 5` is true, so the loop executes the code inside its body. The `print` statement outputs the current value of `count`, and then `count` is incremented by 1 with `count += 1`. This process continues until `count` becomes 6, at which point the condition `count <= 5` becomes false, and the loop terminates.

Now, let's see some more examples to understand how `while` loops work:

**Example 1: Counting from 1 to 5**

```python
count = 1
while count <= 5:
    print(count)
    count += 1
```

Output:
```
1
2
3
4
5
```

In this example, we use a `while` loop to print numbers from 1 to 5. The `count` variable starts at 1, and the loop runs as long as `count` is less than or equal to 5. Inside the loop, we print the value of `count`, and then increment it by 1 with `count += 1` at the end of each iteration.

**Example 2: User Input**

```python
sum = 0
while True:
    num = int(input("Enter a number (or 0 to exit): "))
    if num == 0:
        break  # Exit the loop when the user enters 0
    sum += num

print("Sum of numbers:", sum)
```

In this example, we use a `while` loop to continuously ask the user to enter numbers until they enter 0. The loop runs indefinitely as we have used `True` as the condition, but inside the loop, we use a conditional `if` statement to check if the user entered 0, and if so, we use the `break` statement to exit the loop. Otherwise, we add the entered number to the `sum` variable.

**Example 3: Countdown**

```python
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
else:
    print("Liftoff!")
```

Output:
```
5
4
3
2
1
Liftoff!
```

In this example, we use a `while` loop to perform a countdown from 5 to 1. The loop continues as long as the `countdown` variable is greater than 0. After the loop exits normally (when the condition becomes `False`), the `else` block is executed, and "Liftoff!" is printed.

Remember to be cautious with `while` loops as they can lead to infinite loops if the condition never becomes `False`, causing your program to get stuck. Always ensure that there is a way to break out of the loop based on the logic you are implementing.