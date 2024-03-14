---
sidebar_position: 35
---

JSON stands for "JavaScript Object Notation," and it is a lightweight data interchange format used to represent and exchange data between systems. JSON is designed to be both human-readable and easy to parse for machines, making it a popular choice for data storage and communication in various applications.

---
# Python JSON Format

In Python, the JSON format is supported through the built-in `json` module, which provides functions to encode Python objects into JSON strings and decode JSON strings back into Python objects.

The `json` module offers two main methods:

1. **`json.dumps()`:**
   - This method is used to serialize Python objects (e.g., dictionaries, lists) into a JSON-formatted string.
   - The method takes a Python object as input and returns a JSON string.

2. **`json.loads()`:**
   - This method is used to deserialize JSON strings into Python objects.
   - It takes a JSON-formatted string as input and returns a corresponding Python object.

Here's a simple example of encoding Python data to JSON and decoding JSON back to Python objects:

```python
import json

# Python dictionary representing data
person = {
    "name": "John Doe",
    "age": 30,
    "is_student": False,
    "hobbies": ["reading", "swimming", "coding"],
    "address": {
        "city": "New York",
        "zipcode": "10001"
    }
}

# Encoding Python data to JSON
json_string = json.dumps(person)
print(json_string)

# Decoding JSON back to Python data
decoded_person = json.loads(json_string)
print(decoded_person)
```

Output:
```
{"name": "John Doe", "age": 30, "is_student": false, "hobbies": ["reading", "swimming", "coding"], "address": {"city": "New York", "zipcode": "10001"}}
{'name': 'John Doe', 'age': 30, 'is_student': False, 'hobbies': ['reading', 'swimming', 'coding'], 'address': {'city': 'New York', 'zipcode': '10001'}}
```

As you can see, the `json.dumps()` function serialized the Python dictionary into a JSON-formatted string, and the `json.loads()` function deserialized the JSON string back into a Python dictionary.

JSON is widely used in web development, APIs, configuration files, and data exchange between different systems. Its simplicity, readability, and platform-agnostic nature make it a preferred choice for data representation in many applications.

###  Data Types used in JSON

In JSON (JavaScript Object Notation), data is represented in a structured format using a few fundamental data types. JSON supports the following data types:

1. **Object:**
   - An object is an unordered collection of key-value pairs.
   - Keys must be strings, and values can be any valid JSON data type, including nested objects and arrays.

   Example:
   ```json
   {
     "name": "John Doe",
     "age": 30,
     "is_student": false,
     "address": {
       "city": "New York",
       "zipcode": "10001"
     }
   }
   ```

2. **Array:**
   - An array is an ordered collection of elements.
   - Elements can be of any valid JSON data type, including nested objects and arrays.

   Example:
   ```json
   ["apple", "banana", "cherry"]
   ```

3. **String:**
   - A string is a sequence of Unicode characters enclosed in double quotes.
   - Special characters and escape sequences can be used within the string.

   Example:
   ```json
   "Hello, World!"
   ```

4. **Number:**
   - A number can be an integer or a floating-point number.
   - It does not support other numeric types like complex numbers or fractions.

   Example:
   ```json
   42
   3.14159
   ```

5. **Boolean:**
   - A boolean can have two possible values: `true` or `false`.

   Example:
   ```json
   true
   false
   ```

6. **Null:**
   - The value `null` represents the absence of a value or a null value.

   Example:
   ```json
   null
   ```

JSON data is typically used for data exchange and configuration purposes, and its simplicity and readability make it a popular choice for various applications and programming languages, including Python. When working with JSON data in Python, you can use the built-in `json` module to serialize Python data to JSON strings and deserialize JSON strings back into Python objects.

### Reading and Writing JSON Files

To read and write JSON files in Python, you can use the `json` module, which provides functions for working with JSON data. The `json` module allows you to easily serialize Python objects into JSON strings and deserialize JSON strings back into Python objects.

Here's a step-by-step guide to reading and writing JSON files in Python:

**1. Reading JSON from a File:**
To read JSON data from a file, follow these steps:

```python
import json

# Step 1: Open the JSON file in read mode
with open('data.json', 'r') as file:
    # Step 2: Use json.load() to parse the JSON data from the file
    data = json.load(file)

# Now, the 'data' variable contains the Python data structures loaded from the JSON file
print(data)
```

**2. Writing Python Data to a JSON File:**
To write Python data to a JSON file, follow these steps:

```python
import json

# Python data to be written to the JSON file
data = {
    "name": "John Doe",
    "age": 30,
    "is_student": False,
    "hobbies": ["reading", "swimming", "coding"],
    "address": {
        "city": "New York",
        "zipcode": "10001"
    }
}

# Step 1: Open the JSON file in write mode
with open('output.json', 'w') as file:
    # Step 2: Use json.dump() to write the Python data to the file in JSON format
    json.dump(data, file, indent=4)
```

In this example, we first open the 'data.json' file in read mode using `open()` and then use `json.load()` to parse the JSON data from the file. The resulting Python data structures are stored in the `data` variable.

Next, we create a Python dictionary `data` containing the data we want to write to a JSON file. We then open the 'output.json' file in write mode using `open()` and use `json.dump()` to write the Python data into the file in JSON format. The `indent=4` argument is used to add indentation to the JSON data for better readability.

After running the above code, you will have read the JSON data from 'data.json' and written Python data to 'output.json' in JSON format.

