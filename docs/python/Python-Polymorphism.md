---
sidebar_position: 28
---

Polymorphism is a key concept in object-oriented programming (OOP) and refers to the ability of different classes to be treated as instances of a common superclass. In Python, polymorphism allows objects of different types to be used interchangeably through a shared interface. This shared interface can be achieved through method overriding and the use of abstract base classes (ABCs). There are two main types of polymorphism in Python: compile-time polymorphism and runtime polymorphism.

---
# Python Polimorphism

1. Compile-time polymorphism:
   Also known as method overloading, compile-time polymorphism occurs when multiple methods in a class have the same name but different parameters. Python, however, does not support method overloading like some other programming languages do. Still, we can mimic this behavior using default arguments and variable arguments.

Example of compile-time polymorphism:

```python
class MathOperations:
    def add(self, a, b):
        return a + b

    def add(self, a, b, c):
        return a + b + c

# Creating objects and calling the methods
math_obj = MathOperations()
print(math_obj.add(2, 3))          # Raises an error - only one add method is allowed
print(math_obj.add(2, 3, 4))       # Output: 9
```

In Python, only the latest defined method with a given name will be used, making method overloading less useful in this context. For practical polymorphism, we focus on runtime polymorphism.

2. Runtime polymorphism:
   Also known as method overriding, runtime polymorphism occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. This allows different objects to be treated interchangeably based on the shared method name and interface.

Example of runtime polymorphism:

```python
class Animal:
    def make_sound(self):
        return "Generic animal sound"

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

# Function to make the animals speak
def animal_speak(animal):
    print(animal.make_sound())

# Creating objects and demonstrating polymorphism
animal_speak(Animal())  # Output: "Generic animal sound"
animal_speak(Dog())     # Output: "Woof!"
animal_speak(Cat())     # Output: "Meow!"
```

In this example, we have an `Animal` superclass and two subclasses, `Dog` and `Cat`. Each subclass overrides the `make_sound()` method from the `Animal` class to provide its specific sound. When we call `animal_speak()` with different objects, polymorphism allows the correct overridden method to be called based on the object's actual type.

It's also worth mentioning another form of polymorphism in Python using abstract base classes (ABCs). ABCs allow you to define a common interface that derived classes must implement, ensuring a consistent behavior.

Example using abstract base classes:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

# Function to calculate area of any shape
def calculate_area(shape):
    return shape.area()

# Creating objects and demonstrating polymorphism with ABCs
square_obj = Square(5)
circle_obj = Circle(3)
print(calculate_area(square_obj))  # Output: 25 (5 * 5)
print(calculate_area(circle_obj))  # Output: 28.26 (3.14 * 3 * 3)
```

In this example, the `Shape` class is an abstract base class with an abstract method `area()`. The `Square` and `Circle` classes are derived from `Shape` and implement the `area()` method according to their specific formulas. The `calculate_area()` function takes any object that is a subclass of `Shape`, allowing us to calculate the area of different shapes interchangeably.

These examples demonstrate how Python polymorphism allows objects of different classes to be treated similarly based on their shared interface, promoting flexibility and code reusability in object-oriented programming.