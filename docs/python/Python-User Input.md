---
sidebar_position: 21
---

In Python, user input can be obtained using the built-in `input()` function. This function allows you to prompt the user for input and then wait for them to enter a value. The value entered by the user is treated as a string by default, but you can convert it to other data types as needed.

---
# Python User Input

Here's the basic syntax of the `input()` function:

```python
user_input = input("Enter your input: ")
```

The prompt inside the `input()` function is optional but provides a message to the user, indicating the expected input.

Let's look at some examples of using Python user input:

Example 1: Simple input and output
```python
name = input("Enter your name: ")
print("Hello, " + name + "! Nice to meet you.")
```

Example 2: Numeric input and conversion
```python
age_str = input("Enter your age: ")
age = int(age_str)  # Convert the string input to an integer
years_to_100 = 100 - age
print("You will turn 100 in " + str(years_to_100) + " years.")
```

Example 3: Using user input in calculations
```python
radius_str = input("Enter the radius of a circle: ")
radius = float(radius_str)  # Convert the string input to a float
area = 3.14 * radius ** 2
print("The area of the circle is:", area)
```

Example 4: Taking multiple inputs and splitting them
```python
numbers_str = input("Enter three numbers separated by spaces: ")
numbers_list = numbers_str.split()  # Split the input string into a list of strings
# Convert the list of strings to a list of integers
numbers = [int(num) for num in numbers_list]
sum_numbers = sum(numbers)
print("The sum of the numbers is:", sum_numbers)
```

Example 5: Handling user confirmation
```python
while True:
    response = input("Do you want to continue? (yes/no): ")
    if response.lower() == 'yes':
        print("Great! Let's continue.")
        # Add your code to continue the program's logic here
    elif response.lower() == 'no':
        print("Alright, exiting the program.")
        break
    else:
        print("Invalid input. Please enter 'yes' or 'no'.")
```

Remember to validate and handle user input carefully, as unexpected input may cause errors or undesired behavior. Using functions like `int()` or `float()` for conversion can raise exceptions if the user enters non-numeric values, so consider using try-except blocks to handle such cases gracefully.