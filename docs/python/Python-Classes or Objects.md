---
sidebar_position: 26
---

In Python, classes and objects are fundamental concepts of object-oriented programming (OOP).

---
# Python Classes or Objects

**Classes:**
- A class is a blueprint or a template for creating objects. It defines a new custom data type with its attributes (data) and methods (functions) that operate on that data.
- Classes serve as a way to encapsulate data and behavior into a single unit, making code more organized, modular, and easier to maintain.
- They provide a mechanism for code reusability by allowing you to create multiple objects of the same class, each with its own unique state and behavior.

**Objects:**
- An object is an instance of a class. It is a concrete realization of the class, created based on the blueprint defined by the class.
- Objects have their own unique state (attribute values) and behavior (methods) defined by the class they belong to.
- When you create an object of a class, it is often referred to as "instantiating" the class or "creating an instance" of the class.

Here's a simple analogy to understand classes and objects better:

**Class (Blueprint):**
- A class is like a blueprint for building a house. It defines the structure, layout, and characteristics of the house but does not exist physically.

**Object (Instance):**
- An object is like an actual house built based on the blueprint. It has its own unique features, such as the color, furniture, and occupants.

Example of a class and object in Python:

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start(self):
        print(f"The {self.make} {self.model} is starting.")

# Creating objects of the class
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")

# Accessing attributes and calling methods on objects
print(car1.make)  # Output: Toyota
print(car2.model)  # Output: Civic

car1.start()  # Output: The Toyota Corolla is starting.
car2.start()  # Output: The Honda Civic is starting.
```

In this example, we define a `Car` class with attributes `make` and `model`, and a method `start()` that prints a message indicating the car is starting. We then create two objects (`car1` and `car2`) of the `Car` class and access their attributes (`make` and `model`) and call the `start()` method on each object. Each object has its own unique state (different `make` and `model` values) and behavior (the `start()` method) based on the class definition.

### Attributes and Methods

In Python, attributes and methods are the building blocks of classes and objects. They define the data (attributes) and behavior (methods) associated with the objects created from a class. Let's take a closer look at attributes and methods in classes and objects:

**Attributes**:
- Attributes are variables that hold data and represent the state of an object.
- They are defined inside the class and can be accessed using the dot notation on objects.
- Attributes can be class-level attributes (shared by all instances of the class) or instance attributes (specific to each instance).

Example of attributes in a class:

```python
class Car:
    # Class-level attribute
    manufacturer = "Toyota"

    def __init__(self, model):
        # Instance attribute
        self.model = model

# Creating an object of the class
car1 = Car("Corolla")

# Accessing attributes
print(car1.model)  # Output: Corolla
print(car1.manufacturer)  # Output: Toyota (class-level attribute)
```

**Methods**:
- Methods are functions defined inside the class that define the behavior of objects.
- They operate on the data (attributes) of the class and perform actions or computations.
- Methods are typically called on objects and can access and modify the object's attributes.

Example of methods in a class:

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.speed = 0

    # Instance method
    def accelerate(self, mph):
        self.speed += mph

    # Instance method
    def brake(self, mph):
        self.speed -= mph

    # Instance method
    def display_speed(self):
        print(f"The car is currently running at {self.speed} mph.")

# Creating an object of the class
car1 = Car("Toyota", "Corolla")

# Calling methods on the object
car1.accelerate(30)
car1.display_speed()  # Output: The car is currently running at 30 mph.

car1.brake(10)
car1.display_speed()  # Output: The car is currently running at 20 mph.
```

In this example, the `Car` class has attributes `make`, `model`, and `speed`. The class also has three methods: `accelerate()`, `brake()`, and `display_speed()`. The `accelerate()` method increases the `speed` attribute, the `brake()` method decreases it, and the `display_speed()` method prints the current speed of the car.

By combining attributes and methods, classes encapsulate both data and behavior, allowing you to model real-world entities and create objects that represent specific instances of those entities with unique attributes and behavior.

### Class Variables vs. Instance Variables

Class variables and instance variables are two types of variables in Python classes, and they serve different purposes in object-oriented programming. Let's explore the differences between class variables and instance variables:

1. **Class Variables:**
   - Class variables are variables that are shared among all instances (objects) of a class.
   - They are defined at the class level and have the same value for all instances of the class.
   - Class variables are declared outside any instance method within the class definition.
   - They are accessed using the class name and can also be accessed through instances.

Example of a class variable:

```python
class Dog:
    species = "Canine"

    def __init__(self, name):
        self.name = name

dog1 = Dog("Buddy")
dog2 = Dog("Max")

print(dog1.species)  # Output: Canine
print(dog2.species)  # Output: Canine

# Class variable can be accessed through instances
print(dog1.__class__.species)  # Output: Canine
print(dog2.__class__.species)  # Output: Canine
```

In this example, `species` is a class variable. All instances of the `Dog` class share the same `species` attribute.

2. **Instance Variables:**
   - Instance variables are unique to each instance (object) of a class.
   - They are defined inside the constructor (`__init__` method) using the `self` keyword.
   - Each instance of the class maintains its own copy of instance variables.
   - Instance variables represent the state of each individual object and can have different values for different instances.

Example of instance variables:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person1 = Person("Alice", 30)
person2 = Person("Bob", 25)

print(person1.name)  # Output: Alice
print(person2.name)  # Output: Bob

# Each instance has its own copy of instance variables
print(person1.age)  # Output: 30
print(person2.age)  # Output: 25
```

In this example, `name` and `age` are instance variables. Each instance of the `Person` class has its own unique values for these variables.

In summary, class variables are shared among all instances of a class and have a scope at the class level. They are best suited for values that are common to all instances. On the other hand, instance variables represent the state of individual objects and have a scope at the object level, making them specific to each instance. Understanding the distinction between class and instance variables is essential for proper data management and designing effective object-oriented solutions.
