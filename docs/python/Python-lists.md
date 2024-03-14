---
sidebar_position: 11
---

In Python, a list is a collection of items that are ordered and mutable. It allows you to store multiple values of different data types in a single variable. Lists are created by enclosing comma-separated values within square brackets `[ ]`.

---
# Python Lists

Here's an example of declaring a list in Python:

```python
# Declaring a list
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", True, 3.14]

# Print the lists
print(numbers)  # Output: [1, 2, 3, 4, 5]
print(fruits)   # Output: ['apple', 'banana', 'orange']
print(mixed)    # Output: [1, 'hello', True, 3.14]
```

**Advantages of lists in Python:**
1. **Versatility**: Lists can store items of different data types, allowing flexibility in data representation.
2. **Ordered**: The items in a list are ordered, meaning they have a specific index that defines their position.
3. **Mutable**: Lists can be modified, items can be added, removed, or changed.
4. **Dynamic Size**: Lists can grow or shrink dynamically as items are added or removed.
5. **Common Operations**: Lists have built-in methods and operators for common operations such as appending, concatenating, slicing, and more.

**Disadvantages of lists in Python:**
1. **Linear Search**: Accessing elements in a list by index requires a linear search, which may be slower for large lists.
2. **Memory Overhead**: Lists consume more memory compared to other data structures due to their flexibility and dynamic size.
3. **Mutability**: While mutability is an advantage, it can also lead to unexpected changes if not handled carefully.

Despite the disadvantages, lists are widely used in Python because of their flexibility and ease of use in handling collections of items.

In Python, list indexing and slicing are used to access specific elements or subsequences within a list. 

### Indexing and Slicing

**List Indexing:**
List indexing allows you to access individual elements of a list by their position (index) within the list. Indexing starts from 0 for the first element and goes up to `len(list) - 1` for the last element.

Here's an example of list indexing:

```python
fruits = ["apple", "banana", "orange", "grape"]
print(fruits[0])    # Output: "apple"
print(fruits[2])    # Output: "orange"
```

In the above example, `fruits[0]` returns the first element of the list, which is "apple", and `fruits[2]` returns the third element, which is "orange".

**List Slicing:**
List slicing allows you to access a subsequence of elements within a list by specifying a range of indices. The syntax for list slicing is `list[start:end:step]`, where `start` is the starting index, `end` is the ending index (exclusive), and `step` is the step size.

Here's an example of list slicing:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[1:5])         # Output: [2, 3, 4, 5]
print(numbers[2:8:2])       # Output: [3, 5, 7]
print(numbers[:5])          # Output: [1, 2, 3, 4, 5]
print(numbers[3:])          # Output: [4, 5, 6, 7, 8, 9, 10]
print(numbers[::-1])        # Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

In the above example, `numbers[1:5]` returns a subsequence from index 1 to 4 (elements at indices 1, 2, 3, 4), `numbers[2:8:2]` returns a subsequence with a step size of 2 from index 2 to 7 (elements at indices 2, 4, 6), `numbers[:5]` returns a subsequence from the beginning to index 4 (elements at indices 0, 1, 2, 3, 4), `numbers[3:]` returns a subsequence from index 3 to the end (elements at indices 3, 4, 5, 6, 7, 8, 9), and `numbers[::-1]` returns the list in reverse order.

List indexing and slicing are powerful techniques that allow you to retrieve specific elements or subsequences from a list, making it easier to work with and manipulate the data stored in lists.

### List Methods

The `dir()` function in Python returns a list of valid attributes and methods for a given object. When called with a list object, it returns the list of built-in methods available for lists. Here is an explanation of some common methods returned by `dir(list)`:

1. **`append(x)`**:
   Adds an element `x` to the end of the list.

   ```python
   numbers = [1, 2, 3]
   numbers.append(4)
   print(numbers)  # Output: [1, 2, 3, 4]
   ```

2. **`clear()`**:
   Removes all elements from the list.

   ```python
   numbers = [1, 2, 3, 4]
   numbers.clear()
   print(numbers)  # Output: []
   ```

3. **`copy()`**:
   Returns a shallow copy of the list.

   ```python
   numbers = [1, 2, 3]
   numbers_copy = numbers.copy()
   print(numbers_copy)  # Output: [1, 2, 3]
   ```

4. **`count(x)`**:
   Returns the number of occurrences of element `x` in the list.

   ```python
   numbers = [1, 2, 2, 3, 2]
   count = numbers.count(2)
   print(count)  # Output: 3
   ```

5. **`extend(iterable)`**:
   Appends elements from the iterable to the end of the list.

   ```python
   numbers = [1, 2, 3]
   numbers.extend([4, 5, 6])
   print(numbers)  # Output: [1, 2, 3, 4, 5, 6]
   ```

6. **`index(x, start=0, end=len(list))`**:
   Returns the index of the first occurrence of element `x` in the list.

   ```python
   numbers = [1, 2, 3, 2, 4]
   index = numbers.index(2)
   print(index)  # Output: 1
   ```

7. **`insert(i, x)`**:
   Inserts element `x` at position `i` in the list.

   ```python
   numbers = [1, 2, 3]
   numbers.insert(1, 4)
   print(numbers)  # Output: [1, 4, 2, 3]
   ```

8. **`pop(i=-1)`**:
   Removes and returns the element at position `i` in the list. If `i` is not specified, it removes and returns the last element.

   ```python
   numbers = [1, 2, 3]
   element = numbers.pop(1)
   print(element)  # Output: 2
   print(numbers)  # Output: [1, 3]
   ```

9. **`remove(x)`**:
   Removes the first occurrence of element `x` from the list.

   ```python
   numbers = [1, 2, 3, 2, 4]
   numbers.remove(2)
   print(numbers)  # Output: [1, 3, 2, 4]
   ```

10. **`reverse()`**:
    Reverses the order of elements in the list.

    ```python
    numbers = [1, 2, 3]
    numbers.reverse()
    print(numbers)  # Output: [3, 2, 1]
    ```

11. **

`sort(key=None, reverse=False)`**:
    Sorts the elements of the list in ascending order. The `key` and `reverse` parameters can be used to customize the sorting behavior.

    ```python
    numbers = [3, 1, 4, 2]
    numbers.sort()
    print(numbers)  # Output: [1, 2, 3, 4]
    ```

These are just a few examples of the methods available for Python lists. There are additional methods and built-in functions that can be used to manipulate and operate on lists.