---
sidebar_position: 32
---

In Python, a lambda function is a small anonymous function that can have any number of arguments but can only have one expression. Lambda functions are also known as "anonymous functions" because they don't have a name like regular functions defined using the `def` keyword.

---
# Python Lambda Function

The syntax for a lambda function is as follows:

```python
lambda arguments: expression
```

Lambda functions are typically used for simple operations that can be expressed in a single line, such as filtering, mapping, or sorting data. They are especially useful when you need a quick function for a short period of time and don't want to define a named function using `def`.

Here's a simple example of using a lambda function to add two numbers:

```python
add = lambda x, y: x + y
result = add(5, 3)
print(result)  # Output: 8
```

In this example, we define a lambda function called `add` that takes two arguments `x` and `y` and returns their sum. We then call the lambda function with arguments `5` and `3`, which results in `8`.

### Map, Filter, and Reduce Functions

`map()`, `filter()`, and `reduce()` are three important higher-order functions in Python that operate on iterables (e.g., lists, tuples) and allow for functional programming paradigms. They are used to transform, filter, and aggregate data efficiently.

1. **`map()` function:**
   - The `map()` function applies a given function to each element of an iterable and returns an iterator containing the results.
   - Syntax: `map(function, iterable)`

   Example: Using `map()` to square each element in a list.

   ```python
   numbers = [1, 2, 3, 4, 5]
   squared_numbers = list(map(lambda x: x**2, numbers))
   print(squared_numbers)  # Output: [1, 4, 9, 16, 25]
   ```

2. **`filter()` function:**
   - The `filter()` function filters elements from an iterable based on a given function that returns `True` or `False`.
   - Syntax: `filter(function, iterable)`

   Example: Using `filter()` to get even numbers from a list.

   ```python
   numbers = [1, 2, 3, 4, 5]
   even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
   print(even_numbers)  # Output: [2, 4]
   ```

3. **`reduce()` function:**
   - The `reduce()` function aggregates the elements of an iterable using a given function and returns a single value.
   - Before Python 3.8, `reduce()` was available directly in Python, but from Python 3.8 onwards, it's available in the `functools` module.
   - Syntax (using the `functools` module): `functools.reduce(function, iterable[, initializer])`

   Example: Using `reduce()` to calculate the product of all elements in a list.

   ```python
   from functools import reduce

   numbers = [1, 2, 3, 4, 5]
   product = reduce(lambda x, y: x * y, numbers)
   print(product)  # Output: 120 (1 * 2 * 3 * 4 * 5)
   ```

   Note: For simple operations like summing or finding the maximum/minimum in a list, using built-in functions like `sum()`, `max()`, and `min()` is often more readable and efficient.

These higher-order functions provide a more functional and concise way of processing data, especially when combined with lambda functions. They promote a declarative programming style and can significantly simplify code for various data transformation tasks. However, readability should always be considered, and sometimes using list comprehensions or traditional `for` loops may be more appropriate for complex operations or when the logic becomes less clear using higher-order functions.

### Sorting with Lambda

In Python, you can use the built-in `sorted()` function to sort lists, tuples, and other iterable objects. Additionally, you can use the `key` parameter in the `sorted()` function to specify a custom sorting criterion. Lambda functions are a concise way to define simple, anonymous functions on the fly. They are often used with `sorted()` to define custom sorting logic quickly.

The syntax for using `sorted()` with a lambda function is as follows:

```python
sorted(iterable, key=lambda x: expression)
```

where `iterable` is the collection you want to sort, and `key` is the lambda function that returns a value used for sorting each element `x` in the iterable.

Here are some examples of using `sorted()` with lambda functions for sorting:

Example 1: Sorting a list of strings by their lengths:

```python
strings_list = ["apple", "banana", "orange", "kiwi", "grapes"]
sorted_list = sorted(strings_list, key=lambda x: len(x))
print(sorted_list)
```

Output:
```
['kiwi', 'apple', 'banana', 'orange', 'grapes']
```

Example 2: Sorting a list of dictionaries by a specific key:

```python
people = [
    {"name": "John", "age": 30},
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 35},
    {"name": "Eve", "age": 22}
]

sorted_people = sorted(people, key=lambda x: x["age"])
print(sorted_people)
```

Output:
```
[{'name': 'Eve', 'age': 22}, {'name': 'Alice', 'age': 25}, {'name': 'John', 'age': 30}, {'name': 'Bob', 'age': 35}]
```

Example 3: Sorting a list of tuples based on multiple criteria:

```python
data = [(3, 5), (1, 8), (2, 3), (4, 1)]
sorted_data = sorted(data, key=lambda x: (x[0], -x[1]))  # Sort by first element ascending, and second element descending
print(sorted_data)
```

Output:
```
[(1, 8), (2, 3), (3, 5), (4, 1)]
```

In these examples, the lambda functions serve as the `key` argument for `sorted()`, allowing you to customize the sorting behavior based on your specific requirements.




