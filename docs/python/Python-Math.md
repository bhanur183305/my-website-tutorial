---
sidebar_position: 30
---

Python's `math` module provides a set of mathematical functions and constants that are commonly used in various computations. To use the `math` module, you need to import it first. Here's a brief explanation of some commonly used functions and constants along with examples:

---
# Python Math Module

1. Basic mathematical functions:
   - `math.sqrt(x)`: Returns the square root of the given number `x`.
   - `math.pow(x, y)`: Returns `x` raised to the power of `y`.
   - `math.exp(x)`: Returns the exponential value of `x` (e^x).
   - `math.log(x, base)`: Returns the logarithm of `x` with the specified `base`.

```python
import math

# Square root
print(math.sqrt(25))  # Output: 5.0

# Power
print(math.pow(2, 3))  # Output: 8.0

# Exponential
print(math.exp(2))  # Output: 7.38905609893065

# Logarithm
print(math.log(8, 2))  # Output: 3.0 (because 2^3 = 8)
```

2. Trigonometric functions:
   - `math.sin(x)`, `math.cos(x)`, `math.tan(x)`: Returns the sine, cosine, and tangent of the angle `x` (in radians).
   - `math.radians(x)`, `math.degrees(x)`: Converts angles between degrees and radians.

```python
import math

# Trigonometric functions
angle_radians = math.radians(30)
print(math.sin(angle_radians))  # Output: 0.49999999999999994 (approximately 0.5)
print(math.cos(angle_radians))  # Output: 0.8660254037844387 (approximately 0.866)
print(math.tan(angle_radians))  # Output: 0.5773502691896257 (approximately 0.577)

# Convert back to degrees
angle_degrees = math.degrees(math.atan(1))
print(angle_degrees)  # Output: 45.0
```

3. Constants:
   - `math.pi`: Returns the mathematical constant π (pi).
   - `math.e`: Returns the mathematical constant e (Euler's number).

```python
import math

# Constants
print(math.pi)  # Output: 3.141592653589793
print(math.e)   # Output: 2.718281828459045
```

These are just a few examples of what you can do with Python's `math` module. There are many more functions available that cover a wide range of mathematical operations, such as rounding, floor, ceiling, factorials, and more. To explore all the functions in the `math` module, you can refer to the official Python documentation.