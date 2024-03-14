---
sidebar_position: 29
---

In Python, an iterator is an object that allows you to traverse through a sequence of elements, one at a time, without having to know the underlying structure of the data. It provides a common interface for iterating over various types of data structures, such as lists, tuples, dictionaries, strings, and more.

---
# Python Iterators

The iterator object must implement two methods: `__iter__()` and `__next__()`. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns the next element from the sequence. When there are no more elements to be returned, the `__next__()` method raises a `StopIteration` exception to signal the end of the iteration.

Here's a simple example of creating and using an iterator in Python:

```python
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.data):
            current_element = self.data[self.index]
            self.index += 1
            return current_element
        else:
            raise StopIteration

# Creating an iterable object
my_list = [1, 2, 3, 4, 5]
my_iterator = MyIterator(my_list)

# Iterating through the elements using the iterator
for element in my_iterator:
    print(element)
```

Output:
```
1
2
3
4
5
```

In this example, we have defined a custom iterator `MyIterator`, which takes a list `data` as input. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns each element of the list one by one until the end of the list is reached.

Iterators are extensively used in Python, especially in `for` loops, to efficiently iterate over large data sets or streams without loading the entire data into memory. Many built-in Python objects, such as lists and dictionaries, are iterable, and you can create custom iterators to work with your own data structures or data sources.

### Creating Custom Iterators
Creating custom iterators in Python involves defining a class with the `__iter__()` and `__next__()` methods. These methods allow the class to behave as an iterator, enabling you to loop through the elements of your custom object using `for` loops or other iteration contexts. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns the next element from the sequence.

Let's create a custom iterator for a simple range of numbers:

```python
class MyRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.current = start

    def __iter__(self):
        # The __iter__() method should return the iterator object itself (in this case, the instance of MyRange)
        return self

    def __next__(self):
        # The __next__() method should return the next element from the sequence or raise StopIteration when done.
        if self.current >= self.end:
            raise StopIteration
        else:
            current_value = self.current
            self.current += 1
            return current_value

# Creating a custom iterable object using our custom iterator
my_range = MyRange(1, 5)

# Iterating through the custom iterator using a for loop
for num in my_range:
    print(num)
```

Output:
```
1
2
3
4
```

In this example, we created a custom iterator `MyRange` that generates a range of numbers from `start` to `end - 1`. The `__init__()` method initializes the starting and ending values for the range, and the `__iter__()` method returns the iterator object (in this case, the instance of `MyRange` itself). The `__next__()` method returns the current value and increments the `current` value for the next iteration until the end of the range is reached, at which point it raises the `StopIteration` exception to signal the end of the iteration.

Creating custom iterators allows you to define how your objects should be iterated over, providing flexibility and customization in iterating through complex data structures or generating values on-the-fly.

### Iterator vs. Iterable

Iterator and Iterable are related concepts in Python, but they serve different purposes and have distinct roles in the iteration process:

1. **Iterable:**
   - An Iterable is an object that can be iterated over, meaning it can generate an iterator.
   - It is any object that implements the `__iter__()` method. This method returns an iterator object.
   - Examples of built-in Python iterables include lists, tuples, strings, dictionaries, sets, and more.
   - You can use an iterable in a `for` loop or other iteration contexts directly.
   - When you use an iterable in a `for` loop, Python automatically calls its `__iter__()` method to obtain an iterator.

Example of an iterable:

```python
my_list = [1, 2, 3, 4, 5]
```

2. **Iterator:**
   - An Iterator is an object that enables iteration over the elements of an iterable.
   - It is any object that implements the `__iter__()` and `__next__()` methods.
   - The `__iter__()` method returns the iterator object itself (usually `self`), and the `__next__()` method returns the next element from the sequence.
   - The `__next__()` method is called during iteration to get the next element, and it raises the `StopIteration` exception when there are no more elements to be returned.
   - You can use an iterator to manually loop through the elements of an iterable one by one using the `next()` function.

Example of an iterator:

```python
my_iterator = iter(my_list)
```

In summary, an Iterable is an object that can produce an Iterator when its `__iter__()` method is called. The Iterator, in turn, is responsible for providing the next element in the sequence via its `__next__()` method. When using a `for` loop or other iteration contexts, Python automatically handles the process of obtaining an iterator from the iterable and calling the `__next__()` method to iterate over its elements.