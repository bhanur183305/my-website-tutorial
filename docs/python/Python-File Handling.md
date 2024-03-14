---
sidebar_position: 25
---

File handling in Python refers to the process of working with files on the computer's file system. It allows you to read data from files, write data to files, and perform various operations like opening, closing, deleting, and updating files. Python provides built-in functions and methods to handle files, making it easy to interact with the file system.

---
# Python File Handling

The main components of file handling in Python are:

1. Opening a File:
To work with a file, you need to open it first. Python provides the `open()` function to open a file, which returns a file object. The `open()` function takes two arguments: the file name (or file path) and the mode in which the file should be opened (e.g., read, write, append, etc.).

2. Reading from a File:
After opening a file in read mode, you can read data from the file using methods like `read()`, `readline()`, or `readlines()`.

3. Writing to a File:
After opening a file in write or append mode, you can write data to the file using methods like `write()`.

4. Closing a File:
After performing operations on a file, it is essential to close the file using the `close()` method of the file object. This ensures that all data is flushed to the file and resources are released.

Here's a basic example of file handling in Python:

```python
# Opening a file in write mode
file = open("example.txt", "w")

# Writing data to the file
file.write("Hello, World!\n")
file.write("This is a sample file.\n")

# Closing the file
file.close()
```

After executing this code, a new file named `example.txt` will be created in the same directory as the Python script, and the specified data will be written to it.

Python also provides a more elegant way of working with files using the `with` statement. It ensures that the file is automatically closed after the block of code is executed, even if an exception occurs.

```python
# Writing data to a file using 'with' statement
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a sample file.\n")
```

Similarly, you can read data from a file using the `read()` method:

```python
# Reading data from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

File handling in Python is an essential aspect of working with data and performing I/O operations. It allows you to interact with files and manipulate data stored in them, making Python a powerful language for various data processing tasks.

### Types of File Handling 

In Python, there are three main types of file handling:

1. Reading from Files:
This type involves opening an existing file and reading data from it. Python provides several methods to read data from a file:

- `read(size)`: Reads and returns the specified number of bytes from the file. If no size is provided, it reads the entire file.
- `readline()`: Reads and returns the next line from the file.
- `readlines()`: Reads all lines from the file and returns them as a list.

Example:

```python
# Reading from a file using readlines()
with open("data.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())  # .strip() removes the newline character
```

2. Writing to Files:
This type involves creating a new file or overwriting the contents of an existing file. Python provides the `write()` method to write data to a file.

Example:

```python
# Writing to a file
with open("output.txt", "w") as file:
    file.write("This is line 1.\n")
    file.write("This is line 2.\n")
```

3. Appending to Files:
Appending to a file involves adding new content to the end of an existing file without overwriting its previous contents. Python provides the `write()` method with mode `"a"` for appending data to a file.

Example:

```python
# Appending to a file
with open("data.txt", "a") as file:
    file.write("This is a new line added at the end.\n")
```

In addition to the above methods, there is also the concept of binary file handling, which involves reading and writing binary data to files. This is useful for handling non-text files, such as images, audio, or video files.

For binary file handling, you use modes like `"rb"` (read binary) and `"wb"` (write binary). The `read()` and `write()` methods work with binary data, and you need to handle the data accordingly.

Example:

```python
# Binary file handling
with open("image.png", "rb") as binary_file:
    binary_data = binary_file.read()
    # Process binary_data

with open("new_image.png", "wb") as new_binary_file:
    # Process new_binary_data
    new_binary_file.write(new_binary_data)
```

These different types of file handling allow you to work with files effectively in Python, enabling you to read data from files, write data to files, and handle binary data for various data processing tasks.

### Various methods for file handling

In Python, file handling involves various methods to interact with files. Here are some commonly used methods for file handling along with examples:

1. `open(filename, mode)`:
The `open()` function is used to open a file and returns a file object. It takes two arguments: `filename` (the name or path of the file) and `mode` (the mode in which the file should be opened - read, write, append, binary, etc.).

Example:

```python
# Opening a file in read mode
file = open("data.txt", "r")
```

2. `file.read(size)`:
The `read()` method is used to read data from the file. It reads and returns the specified number of bytes (characters) from the file. If no size is provided, it reads the entire file.

Example:

```python
# Reading the entire file content
content = file.read()
```

3. `file.readline()`:
The `readline()` method is used to read a single line from the file, including the newline character at the end.

Example:

```python
# Reading the first line of the file
line = file.readline()
```

4. `file.readlines()`:
The `readlines()` method is used to read all lines from the file and returns them as a list, where each element of the list represents a line from the file.

Example:

```python
# Reading all lines from the file
lines = file.readlines()
```

5. `file.write(data)`:
The `write()` method is used to write data (a string) to the file. Note that this method is used when the file is opened in write or append mode.

Example:

```python
# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!")
```

6. `file.writelines(list_of_lines)`:
The `writelines()` method is used to write a list of lines to the file. Each element of the list is written as a separate line, and you need to include the newline character (`\n`) at the end of each line if you want to separate them.

Example:

```python
# Writing a list of lines to a file
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("data.txt", "w") as file:
    file.writelines(lines)
```

7. `file.close()`:
The `close()` method is used to close the file after performing all file operations. It is essential to close the file to release system resources.

Example:

```python
# Opening and closing a file using 'with' statement
with open("data.txt", "r") as file:
    content = file.read()
# The file is automatically closed after the 'with' block
```

8. `file.seek(offset[, whence])`:
The `seek()` method is used to change the file's current position to the given `offset` (number of bytes) from the `whence` reference point. The `whence` argument is optional and specifies the reference point for the `offset`.

Example:

```python
# Moving the file pointer to the beginning
file.seek(0)
```

These are some of the commonly used methods for file handling in Python. They enable you to read, write, and manipulate data stored in files, making file I/O operations efficient and effective.

