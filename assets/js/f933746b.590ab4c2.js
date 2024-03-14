"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[5995],{1646:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(4848),r=s(8453);const i={sidebar_position:27},t="Python Inheritance",l={id:"python/Python-Inheritance",title:"Python-Inheritance",description:"Inheritance is an essential object-oriented programming (OOP) concept in Python and many other programming languages. It allows a class (subclass) to inherit the properties and behaviors (attributes and methods) of another class (superclass). The subclass can reuse and extend the functionalities of the superclass, promoting code reusability and creating a hierarchical relationship between classes.",source:"@site/docs/python/Python-Inheritance.md",sourceDirName:"python",slug:"/python/Python-Inheritance",permalink:"/my-website-tutorial/docs/python/Python-Inheritance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-Inheritance.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Python-Classes or Objects",permalink:"/my-website-tutorial/docs/python/Python-Classes or Objects"},next:{title:"Python-Polymorphism",permalink:"/my-website-tutorial/docs/python/Python-Polymorphism"}},o={},c=[{value:"Types of Inheritance",id:"types-of-inheritance",level:3},{value:"Method Overloading and Method Overriding",id:"method-overloading-and-method-overriding",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Inheritance is an essential object-oriented programming (OOP) concept in Python and many other programming languages. It allows a class (subclass) to inherit the properties and behaviors (attributes and methods) of another class (superclass). The subclass can reuse and extend the functionalities of the superclass, promoting code reusability and creating a hierarchical relationship between classes."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"python-inheritance",children:"Python Inheritance"}),"\n",(0,a.jsx)(n.p,{children:"In Python, inheritance is achieved by defining a new class that inherits from an existing class using the following syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class SubclassName(SuperclassName):\r\n    # Subclass attributes and methods\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SubclassName"}),": The name of the new class that is inheriting from the ",(0,a.jsx)(n.code,{children:"SuperclassName"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SuperclassName"}),": The name of the existing class from which the new class is inheriting."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The subclass can access all the attributes and methods of the superclass, and it can also add its own unique attributes and methods. This process is known as extending the class. If a method is defined in both the subclass and superclass, the method in the subclass takes precedence when called."}),"\n",(0,a.jsx)(n.p,{children:"Here's a simple example to illustrate inheritance in Python:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Animal:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def speak(self):\r\n        return f"{self.name} makes a sound."\r\n\r\nclass Dog(Animal):  # Dog is a subclass of Animal\r\n    def __init__(self, name, breed):\r\n        super().__init__(name)\r\n        self.breed = breed\r\n\r\n    def speak(self):\r\n        return f"{self.name} barks loudly."\r\n\r\n# Creating instances of the classes\r\nanimal = Animal("Generic Animal")\r\ndog = Dog("Buddy", "Labrador")\r\n\r\n# Calling the methods\r\nprint(animal.speak())  # Output: Generic Animal makes a sound.\r\nprint(dog.speak())     # Output: Buddy barks loudly.\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we have a superclass ",(0,a.jsx)(n.code,{children:"Animal"})," with a ",(0,a.jsx)(n.code,{children:"name"})," attribute and a ",(0,a.jsx)(n.code,{children:"speak()"})," method. The subclass ",(0,a.jsx)(n.code,{children:"Dog"})," inherits from the ",(0,a.jsx)(n.code,{children:"Animal"})," class and adds its own ",(0,a.jsx)(n.code,{children:"breed"})," attribute and overrides the ",(0,a.jsx)(n.code,{children:"speak()"})," method."]}),"\n",(0,a.jsx)(n.p,{children:"By using inheritance, we can define common functionalities in a superclass and then create specialized subclasses that inherit and modify these functionalities as needed. This promotes code reuse and allows for a clear and organized class hierarchy, making it easier to manage and extend the codebase."}),"\n",(0,a.jsx)(n.h3,{id:"types-of-inheritance",children:"Types of Inheritance"}),"\n",(0,a.jsx)(n.p,{children:"In Python, there are several types of inheritance that you can use to establish relationships between classes. Each type defines how the subclasses inherit properties and behaviors from the superclass. The main types of inheritance are:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Single Inheritance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In single inheritance, a subclass inherits from a single superclass. This is the simplest form of inheritance, where one subclass directly derives from one superclass."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Superclass:\r\n    pass\r\n\r\nclass Subclass(Superclass):\r\n    pass\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Multiple Inheritance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In multiple inheritance, a subclass inherits from multiple superclasses. This allows a subclass to acquire attributes and methods from multiple parent classes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Superclass1:\r\n    pass\r\n\r\nclass Superclass2:\r\n    pass\r\n\r\nclass Subclass(Superclass1, Superclass2):\r\n    pass\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Multilevel Inheritance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In multilevel inheritance, a subclass inherits from a superclass, which in turn inherits from another superclass. It creates a chain of inheritance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Grandparent:\r\n    pass\r\n\r\nclass Parent(Grandparent):\r\n    pass\r\n\r\nclass Child(Parent):\r\n    pass\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hierarchical Inheritance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In hierarchical inheritance, one superclass serves as the parent to multiple subclasses. This creates a hierarchy where one superclass is inherited by several subclasses."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Superclass:\r\n    pass\r\n\r\nclass Subclass1(Superclass):\r\n    pass\r\n\r\nclass Subclass2(Superclass):\r\n    pass\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hybrid Inheritance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Hybrid inheritance is a combination of multiple types of inheritance. It involves multiple inheritance, multilevel inheritance, or both."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Superclass1:\r\n    pass\r\n\r\nclass Superclass2:\r\n    pass\r\n\r\nclass Subclass1(Superclass1):\r\n    pass\r\n\r\nclass Subclass2(Superclass1, Superclass2):\r\n    pass\n"})}),"\n",(0,a.jsx)(n.p,{children:"It's important to use inheritance carefully to avoid creating complex class hierarchies that may lead to confusion or issues with code maintenance. Each type of inheritance has its advantages and use cases. Choose the appropriate type based on the relationships between your classes and the code design requirements."}),"\n",(0,a.jsx)(n.h3,{id:"method-overloading-and-method-overriding",children:"Method Overloading and Method Overriding"}),"\n",(0,a.jsx)(n.p,{children:"Method Overloading and Method Overriding are two essential concepts in object-oriented programming, particularly in Python."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Method Overloading:"}),"\r\nMethod overloading allows a class to have multiple methods with the same name but different parameter lists. The method that gets called is determined by the number or type of arguments provided during the function call. However, Python does not support traditional method overloading as seen in some other programming languages like Java."]}),"\n",(0,a.jsxs)(n.p,{children:["Instead, in Python, you can achieve method overloading using default arguments or variable-length arguments (",(0,a.jsx)(n.code,{children:"*args"})," and ",(0,a.jsx)(n.code,{children:"**kwargs"}),"). By providing different default values or using variable-length arguments, you can create a single method that can handle different argument scenarios."]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example of method overloading in Python:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Calculator:\r\n    def add(self, x, y):\r\n        return x + y\r\n\r\n    def add(self, x, y, z):\r\n        return x + y + z\r\n\r\ncalc = Calculator()\r\nprint(calc.add(2, 3))        # This will raise a TypeError because the add method with two arguments is overwritten.\r\nprint(calc.add(2, 3, 5))     # Output: 10\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see, the second ",(0,a.jsx)(n.code,{children:"add"})," method with three arguments overwrites the first one, leading to a TypeError when trying to call it with two arguments."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Method Overriding:"}),"\r\nMethod overriding is the ability of a subclass to provide a specific implementation for a method that is already defined in its superclass. When a subclass overrides a method, the method in the subclass takes precedence over the one in the superclass, and the subclass's method is called when the method is invoked on an object of the subclass."]}),"\n",(0,a.jsx)(n.p,{children:"Method overriding is commonly used to customize or extend the behavior of a superclass method in a subclass without changing the superclass's implementation."}),"\n",(0,a.jsx)(n.p,{children:"Here's an example of method overriding in Python:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Animal:\r\n    def make_sound(self):\r\n        return "Generic animal sound."\r\n\r\nclass Dog(Animal):\r\n    def make_sound(self):\r\n        return "Woof! Woof!"\r\n\r\ngeneric_animal = Animal()\r\nprint(generic_animal.make_sound())    # Output: Generic animal sound.\r\n\r\ndog = Dog()\r\nprint(dog.make_sound())               # Output: Woof! Woof!\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, the ",(0,a.jsx)(n.code,{children:"make_sound"})," method is defined in both the ",(0,a.jsx)(n.code,{children:"Animal"})," superclass and the ",(0,a.jsx)(n.code,{children:"Dog"})," subclass. When called on an instance of the ",(0,a.jsx)(n.code,{children:"Dog"})," class, the overridden method in the subclass is executed, providing a specific implementation."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Method overloading and method overriding are both important concepts in object-oriented programming that allow you to create flexible and adaptable class hierarchies in Python."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var a=s(6540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);