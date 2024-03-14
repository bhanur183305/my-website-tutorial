---
sidebar_position: 13
---

In Python, a set is an unordered collection of unique elements. It is a built-in data type used to store a collection of distinct items. Sets are similar to lists and tuples, but they have some key differences:

---
# Python Sets

1. **Uniqueness**: Sets can only contain unique elements. If you try to add a duplicate element to a set, it will not be added, as the set will maintain only one instance of each element.

2. **Order**: Sets are unordered, which means the elements are not stored in any particular sequence. The elements are simply grouped together, and there is no concept of index-based access like in lists or tuples.

3. **Mutability**: Sets are mutable, which means you can add or remove elements from a set after it is created.

Sets are defined using curly braces `{}` or the built-in `set()` function. If you use curly braces, make sure not to confuse them with dictionary literals, as they share the same syntax. To create an empty set, you must use the `set()` function, as `{}` would create an empty dictionary.

Here are some examples of creating and using sets:

```python
# Creating a set using curly braces
my_set = {1, 2, 3, 4, 4, 5}
print(my_set)  # Output: {1, 2, 3, 4, 5} (Note the duplicate 4 is removed)

# Creating a set using the set() function
another_set = set([2, 4, 6, 8])
print(another_set)  # Output: {2, 4, 6, 8}

# Adding elements to a set
my_set.add(6)
my_set.add(7)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6, 7}

# Removing elements from a set
my_set.remove(3)
print(my_set)  # Output: {1, 2, 4, 5, 6, 7}

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union of two sets
union_set = set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5, 6}

# Intersection of two sets
intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {3, 4}

# Difference between two sets
difference_set = set1.difference(set2)
print(difference_set)  # Output: {1, 2}
```

Sets are commonly used for tasks that require membership tests, removing duplicates from a collection, and mathematical operations like union, intersection, and difference. Since sets store only unique elements, they are an efficient choice for these scenarios.

### Set Methods

In Python, sets have several built-in methods to perform various operations. Here are some commonly used set methods:

1. `add(element)`: Adds an element to the set if it is not already present.

```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # Output: {1, 2, 3, 4}
```

2. `remove(element)`: Removes the specified element from the set. Raises a KeyError if the element is not found.

```python
my_set = {1, 2, 3}
my_set.remove(2)
print(my_set)  # Output: {1, 3}
```

3. `discard(element)`: Removes the specified element from the set if it exists. If the element is not found, no error is raised.

```python
my_set = {1, 2, 3}
my_set.discard(2)
my_set.discard(4)  # No error raised
print(my_set)  # Output: {1, 3}
```

4. `pop()`: Removes and returns an arbitrary element from the set. As sets are unordered, the popped element is not guaranteed to be the smallest, largest, or any other specific element.

```python
my_set = {1, 2, 3}
popped_element = my_set.pop()
print(popped_element)  # Output: Some element from the set
print(my_set)  # Output: The set without the popped element
```

5. `clear()`: Removes all elements from the set, making it an empty set.

```python
my_set = {1, 2, 3}
my_set.clear()
print(my_set)  # Output: set()
```

6. `union(other_set)` or `|`: Returns a new set containing all the elements from both sets, removing duplicates.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)
# Alternatively: union_set = set1 | set2
print(union_set)  # Output: {1, 2, 3, 4, 5}
```

7. `intersection(other_set)` or `&`: Returns a new set containing the common elements between two sets.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
intersection_set = set1.intersection(set2)
# Alternatively: intersection_set = set1 & set2
print(intersection_set)  # Output: {3}
```

8. `difference(other_set)` or `-`: Returns a new set with elements that are in the first set but not in the second set.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
difference_set = set1.difference(set2)
# Alternatively: difference_set = set1 - set2
print(difference_set)  # Output: {1, 2}
```

9. `symmetric_difference(other_set)` or `^`: Returns a new set with elements that are in either of the sets but not in both.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
symmetric_difference_set = set1.symmetric_difference(set2)
# Alternatively: symmetric_difference_set = set1 ^ set2
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}
```

Sets in Python are incredibly useful for tasks involving unique elements, membership testing, and set operations. They provide efficient methods for handling such operations and are widely used in various programming scenarios.