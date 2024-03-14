---
sidebar_position: 15
---

In Python, a dictionary is a built-in data type that represents a collection of key-value pairs. It is also known as an associative array or a hash map in other programming languages. Dictionaries are unordered, mutable, and iterable, allowing efficient lookup, insertion, and deletion of elements based on their keys.

---
# Python Dictionaries

Key Features of Python Dictionaries:
1. **Key-Value Pairs:** Each element in a dictionary consists of a key and its associated value. The key acts as an identifier and must be unique within the dictionary.
2. **Unordered:** Dictionary elements are stored in an unordered manner, meaning there is no guarantee of the order in which elements are stored or retrieved.
3. **Mutable:** Dictionaries are mutable, which means you can modify, add, or remove elements after creation.
4. **Dynamic Size:** Dictionaries can dynamically grow or shrink as elements are added or removed.
5. **Keys Must Be Hashable:** Keys must be immutable objects, such as strings, numbers, or tuples, but not lists or dictionaries.

Here's the basic syntax for creating and using dictionaries in Python:

```python
# Creating a dictionary using curly braces {} and key-value pairs
my_dict = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Accessing values using keys
print(my_dict["name"])  # Output: John

# Adding a new key-value pair
my_dict["occupation"] = "Engineer"

# Modifying an existing value
my_dict["age"] = 31

# Removing a key-value pair
del my_dict["city"]

# Checking if a key exists in the dictionary
if "occupation" in my_dict:
    print("Occupation:", my_dict["occupation"])
```

Output:
```
John
Occupation: Engineer
```

In this example, we create a dictionary called `my_dict` with key-value pairs representing a person's name, age, and city. We then add a new key-value pair for the person's occupation, modify the age value, and remove the city from the dictionary. Finally, we check if the "occupation" key exists in the dictionary and print its value if it does.

Dictionaries are commonly used in Python for various tasks, such as storing settings, organizing data, mapping values, and performing quick lookups based on keys. They are versatile data structures that provide a convenient way to work with key-value data.

### Dictionary Creation and Initialization

1. **Curly Braces (Literal Syntax):**
```python
# Empty dictionary
empty_dict = {}
# Dictionary with key-value pairs
person = {"name": "John", "age": 30, "city": "NY"}
```

2. **`dict()` Constructor:**
```python
# Empty dictionary using dict()
empty_dict = dict()
# Dictionary from sequences
phone_numbers = dict([('Alice', '123'), ('Bob', '789')])
# Dictionary from keyword arguments
person = dict(name="Alice", age=25, city="London")
```

3. **Dictionary Comprehension:**
```python
# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
```

4. **`fromkeys()` Method:**
```python
# Dictionary with default value
keys = ["a", "b", "c"]
default_value = 0
my_dict = dict.fromkeys(keys, default_value)
```

5. **Using `zip()` in Comprehension:**
```python
# Creating a dictionary using zip()
keys = ["a", "b", "c"]
values = [1, 2, 3]
my_dict = {k: v for k, v in zip(keys, values)}
```

6. **Manual Loop:**
```python
# Creating a dictionary using a loop
my_dict = {}
for i in range(1, 6):
    my_dict[i] = i * i
```

Choose the method that fits your requirements and coding style best!

### Accessing Dictionary Elements

In Python, you can access elements in a dictionary using keys. Dictionaries use key-value pairs, and the key is used to retrieve the associated value. Here's how you can access dictionary elements:

1. **Using Square Brackets [ ]:**
   - Access the value associated with a specific key using square brackets with the key inside.

```python
# Dictionary with key-value pairs
person = {"name": "John", "age": 30, "city": "NY"}

# Accessing elements
name_value = person["name"]
age_value = person["age"]

print(name_value)  # Output: John
print(age_value)   # Output: 30
```

2. **Using `get()` Method:**
   - The `get()` method allows you to access the value for a given key, providing a default value if the key is not present.

```python
# Dictionary with key-value pairs
person = {"name": "John", "age": 30, "city": "NY"}

# Accessing elements using get()
name_value = person.get("name")
occupation_value = person.get("occupation", "Unknown")  # Providing a default value

print(name_value)          # Output: John
print(occupation_value)    # Output: Unknown (since "occupation" key is not present)
```

3. **Using `keys()`, `values()`, and `items()`:**
   - You can access keys, values, or key-value pairs (items) using `keys()`, `values()`, and `items()` methods, respectively.

```python
# Dictionary with key-value pairs
person = {"name": "John", "age": 30, "city": "NY"}

# Accessing keys
keys = person.keys()
print(keys)  # Output: dict_keys(['name', 'age', 'city'])

# Accessing values
values = person.values()
print(values)  # Output: dict_values(['John', 30, 'NY'])

# Accessing key-value pairs (items)
items = person.items()
print(items)  # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'NY')])
```

Keep in mind that attempting to access a non-existent key using square brackets (`[]`) will raise a `KeyError`. However, using `get()` with a default value will return the default value if the key is not found, avoiding an error. This makes `get()` a safer choice when dealing with uncertain keys in a dictionary.

Choose the appropriate method based on your needs for accessing dictionary elements and handling possible missing keys.

### Dictionary Methods

In Python, dictionaries have various built-in methods that provide convenient functionalities for working with key-value pairs and manipulating dictionary data. Here are some common dictionary methods:

1. **`get(key, default=None)`**:
   - Returns the value associated with the given key. If the key is not found, it returns the default value (default is `None`).

2. **`keys()`**:
   - Returns a view object that contains all the keys in the dictionary.

3. **`values()`**:
   - Returns a view object that contains all the values in the dictionary.

4. **`items()`**:
   - Returns a view object that contains all the key-value pairs (as tuples) in the dictionary.

5. **`pop(key, default=None)`**:
   - Removes the key from the dictionary and returns its associated value. If the key is not found, it returns the default value.

6. **`popitem()`**:
   - Removes and returns an arbitrary key-value pair from the dictionary as a tuple. Raises a `KeyError` if the dictionary is empty.

7. **`clear()`**:
   - Removes all key-value pairs from the dictionary, making it empty.

8. **`update(other_dict)`**:
   - Updates the dictionary with the key-value pairs from `other_dict`.

9. **`copy()`**:
   - Returns a shallow copy of the dictionary.

10. **`fromkeys(keys, value=None)`**:
    - Returns a new dictionary with keys from the iterable `keys` and the same default `value` for all keys.

Here's an example demonstrating some of these dictionary methods:

```python
person = {"name": "John", "age": 30, "city": "NY"}

# Using get()
print(person.get("name"))         # Output: John
print(person.get("occupation"))   # Output: None

# Using keys()
print(person.keys())              # Output: dict_keys(['name', 'age', 'city'])

# Using values()
print(person.values())            # Output: dict_values(['John', 30, 'NY'])

# Using items()
print(person.items())             # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'NY')])

# Using pop()
age = person.pop("age")
print(age)                        # Output: 30
print(person)                     # Output: {'name': 'John', 'city': 'NY'}

# Using popitem()
key, value = person.popitem()
print(key, value)                 # Output: city NY
print(person)                     # Output: {'name': 'John'}

# Using clear()
person.clear()
print(person)                     # Output: {}

# Using update()
person.update({"occupation": "Engineer"})
print(person)                     # Output: {'occupation': 'Engineer'}

# Using copy()
copied_person = person.copy()
print(copied_person)              # Output: {'occupation': 'Engineer'}

# Using fromkeys()
keys = ["name", "age", "city"]
default_value = "Unknown"
info = dict.fromkeys(keys, default_value)
print(info)                       # Output: {'name': 'Unknown', 'age': 'Unknown', 'city': 'Unknown'}
```

These are some of the most commonly used methods for dictionaries in Python. By mastering these methods, you can efficiently work with dictionary data in your Python programs.

### Default Dictionaries

In Python, a default dictionary is a specialized dictionary provided by the `collections` module. It is an extension of the built-in `dict` type that automatically provides default values for keys that do not exist. When accessing a missing key in a default dictionary, instead of raising a `KeyError`, it returns the default value associated with the dictionary.

The primary advantage of using a default dictionary is to simplify code when working with missing or unknown keys. It is often used to handle default values for keys that have not been explicitly set.

To create a default dictionary, you need to import it from the `collections` module and specify the default value that should be returned for missing keys.

Here's how you can create and use a default dictionary:

```python
from collections import defaultdict

# Create a default dictionary with the default value 0 for missing keys
scores = defaultdict(int)

# Add key-value pairs
scores["Alice"] = 85
scores["Bob"] = 92

# Access existing keys
print(scores["Alice"])  # Output: 85
print(scores["Bob"])    # Output: 92

# Access missing keys (automatically initialized with the default value)
print(scores["Charlie"])  # Output: 0

# Accessing missing keys with a custom default value
default_scores = defaultdict(lambda: "Not Available")
print(default_scores["Alice"])    # Output: Not Available
print(default_scores["Charlie"])  # Output: Not Available
```

In this example, `scores` is a default dictionary with a default value of `0`. When accessing a missing key, it automatically returns `0`. In the second case, `default_scores` is a default dictionary with a default value specified as a lambda function, returning `"Not Available"` for missing keys.

The default value can be any valid Python object, such as an integer, string, list, or another dictionary. By using a default dictionary, you can simplify your code and handle missing keys gracefully without needing additional checks for key existence.