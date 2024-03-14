---
sidebar_position: 19
---

A "for loop" in Python is a control flow statement that allows you to iterate over a sequence of elements and execute a block of code for each item in the sequence. It simplifies the process of performing repetitive tasks or processing data contained in lists, tuples, strings, dictionaries, or other iterable objects.

---
# Python For Loops

The syntax of a "for loop" in Python is as follows:

```python
for variable in sequence:
    # Code block to be executed for each item in the sequence
```

- `variable`: A temporary variable that takes on each item's value from the `sequence` during each iteration.
- `sequence`: The collection of items over which the loop will iterate. It can be a list, tuple, string, dictionary, or any other iterable object.

Here's an example of a "for loop" that iterates over a list of numbers and prints each number:

```python
numbers = [1, 2, 3, 4, 5]

for num in numbers:
    print(num)
```

Output:
```
1
2
3
4
5
```

In this example, the "for loop" iterates over the `numbers` list, and the `num` variable takes on each element's value during each iteration. The `print()` function is executed for each number, resulting in the output showing each number on a separate line.

The "for loop" is a fundamental construct in Python programming and is widely used for various tasks, such as iterating through collections, processing data, generating patterns, and performing repetitive operations. It provides an elegant way to handle iterations and is an essential tool in every Python programmer's toolkit.
```python

Let's go through some examples to understand how for loops work in Python:

**Example 1: Looping through a list**

```python
fruits = ['apple', 'banana', 'cherry']

for fruit in fruits:
    print(fruit)
```

Output:
```
apple
banana
cherry
```

**Example 2: Looping through a string**

```python
message = "Hello, World!"

for char in message:
    print(char)
```

Output:
```
H
e
l
l
o
,
 
W
o
r
l
d
!
```

**Example 3: Looping through a range**

```python
for number in range(1, 6):
    print(number)
```

Output:
```
1
2
3
4
5
```

**Example 4: Looping through a dictionary**

```python
student_scores = {'John': 85, 'Alice': 92, 'Bob': 78}

for name, score in student_scores.items():
    print(f"{name} scored {score}")
```

Output:
```
John scored 85
Alice scored 92
Bob scored 78
```

**Example 5: Looping with an index**

If you need both the index and the element, you can use the `enumerate()` function:

```python
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(f"Index: {index}, Fruit: {fruit}")
```

Output:
```
Index: 0, Fruit: apple
Index: 1, Fruit: banana
Index: 2, Fruit: cherry
```

In this example, the `enumerate()` function returns tuples containing both the index and the corresponding element during each iteration of the loop.

These are just some basic examples of using for loops in Python. For loops are a fundamental concept in programming, and they can be used to perform repetitive tasks efficiently and elegantly.