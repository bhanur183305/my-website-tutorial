"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[2617],{3312:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:15},a="Python Dictionaries",o={id:"python/Python-Dictionaries",title:"Python-Dictionaries",description:"In Python, a dictionary is a built-in data type that represents a collection of key-value pairs. It is also known as an associative array or a hash map in other programming languages. Dictionaries are unordered, mutable, and iterable, allowing efficient lookup, insertion, and deletion of elements based on their keys.",source:"@site/docs/python/Python-Dictionaries.md",sourceDirName:"python",slug:"/python/Python-Dictionaries",permalink:"/my-website-tutorial/docs/python/Python-Dictionaries",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-Dictionaries.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Python-String Formatting",permalink:"/my-website-tutorial/docs/python/Python-String Formatting"},next:{title:"Python-decision-making",permalink:"/my-website-tutorial/docs/python/Python-decision-making"}},c={},l=[{value:"Dictionary Creation and Initialization",id:"dictionary-creation-and-initialization",level:3},{value:"Accessing Dictionary Elements",id:"accessing-dictionary-elements",level:3},{value:"Dictionary Methods",id:"dictionary-methods",level:3},{value:"Default Dictionaries",id:"default-dictionaries",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In Python, a dictionary is a built-in data type that represents a collection of key-value pairs. It is also known as an associative array or a hash map in other programming languages. Dictionaries are unordered, mutable, and iterable, allowing efficient lookup, insertion, and deletion of elements based on their keys."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"python-dictionaries",children:"Python Dictionaries"}),"\n",(0,s.jsx)(n.p,{children:"Key Features of Python Dictionaries:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Key-Value Pairs:"})," Each element in a dictionary consists of a key and its associated value. The key acts as an identifier and must be unique within the dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unordered:"})," Dictionary elements are stored in an unordered manner, meaning there is no guarantee of the order in which elements are stored or retrieved."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mutable:"})," Dictionaries are mutable, which means you can modify, add, or remove elements after creation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Size:"})," Dictionaries can dynamically grow or shrink as elements are added or removed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Keys Must Be Hashable:"})," Keys must be immutable objects, such as strings, numbers, or tuples, but not lists or dictionaries."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's the basic syntax for creating and using dictionaries in Python:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Creating a dictionary using curly braces {} and key-value pairs\r\nmy_dict = {\r\n    "name": "John",\r\n    "age": 30,\r\n    "city": "New York"\r\n}\r\n\r\n# Accessing values using keys\r\nprint(my_dict["name"])  # Output: John\r\n\r\n# Adding a new key-value pair\r\nmy_dict["occupation"] = "Engineer"\r\n\r\n# Modifying an existing value\r\nmy_dict["age"] = 31\r\n\r\n# Removing a key-value pair\r\ndel my_dict["city"]\r\n\r\n# Checking if a key exists in the dictionary\r\nif "occupation" in my_dict:\r\n    print("Occupation:", my_dict["occupation"])\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"John\r\nOccupation: Engineer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we create a dictionary called ",(0,s.jsx)(n.code,{children:"my_dict"})," with key-value pairs representing a person's name, age, and city. We then add a new key-value pair for the person's occupation, modify the age value, and remove the city from the dictionary. Finally, we check if the \"occupation\" key exists in the dictionary and print its value if it does."]}),"\n",(0,s.jsx)(n.p,{children:"Dictionaries are commonly used in Python for various tasks, such as storing settings, organizing data, mapping values, and performing quick lookups based on keys. They are versatile data structures that provide a convenient way to work with key-value data."}),"\n",(0,s.jsx)(n.h3,{id:"dictionary-creation-and-initialization",children:"Dictionary Creation and Initialization"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Curly Braces (Literal Syntax):"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Empty dictionary\r\nempty_dict = {}\r\n# Dictionary with key-value pairs\r\nperson = {"name": "John", "age": 30, "city": "NY"}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"dict()"})," Constructor:"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Empty dictionary using dict()\r\nempty_dict = dict()\r\n# Dictionary from sequences\r\nphone_numbers = dict([('Alice', '123'), ('Bob', '789')])\r\n# Dictionary from keyword arguments\r\nperson = dict(name=\"Alice\", age=25, city=\"London\")\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dictionary Comprehension:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Dictionary comprehension\r\nsquares = {x: x**2 for x in range(1, 6)}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"fromkeys()"})," Method:"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Dictionary with default value\r\nkeys = ["a", "b", "c"]\r\ndefault_value = 0\r\nmy_dict = dict.fromkeys(keys, default_value)\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["Using ",(0,s.jsx)(n.code,{children:"zip()"})," in Comprehension:"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Creating a dictionary using zip()\r\nkeys = ["a", "b", "c"]\r\nvalues = [1, 2, 3]\r\nmy_dict = {k: v for k, v in zip(keys, values)}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Manual Loop:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Creating a dictionary using a loop\r\nmy_dict = {}\r\nfor i in range(1, 6):\r\n    my_dict[i] = i * i\n"})}),"\n",(0,s.jsx)(n.p,{children:"Choose the method that fits your requirements and coding style best!"}),"\n",(0,s.jsx)(n.h3,{id:"accessing-dictionary-elements",children:"Accessing Dictionary Elements"}),"\n",(0,s.jsx)(n.p,{children:"In Python, you can access elements in a dictionary using keys. Dictionaries use key-value pairs, and the key is used to retrieve the associated value. Here's how you can access dictionary elements:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Using Square Brackets [ ]:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access the value associated with a specific key using square brackets with the key inside."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Dictionary with key-value pairs\r\nperson = {"name": "John", "age": 30, "city": "NY"}\r\n\r\n# Accessing elements\r\nname_value = person["name"]\r\nage_value = person["age"]\r\n\r\nprint(name_value)  # Output: John\r\nprint(age_value)   # Output: 30\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Using ",(0,s.jsx)(n.code,{children:"get()"})," Method:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"get()"})," method allows you to access the value for a given key, providing a default value if the key is not present."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Dictionary with key-value pairs\r\nperson = {"name": "John", "age": 30, "city": "NY"}\r\n\r\n# Accessing elements using get()\r\nname_value = person.get("name")\r\noccupation_value = person.get("occupation", "Unknown")  # Providing a default value\r\n\r\nprint(name_value)          # Output: John\r\nprint(occupation_value)    # Output: Unknown (since "occupation" key is not present)\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Using ",(0,s.jsx)(n.code,{children:"keys()"}),", ",(0,s.jsx)(n.code,{children:"values()"}),", and ",(0,s.jsx)(n.code,{children:"items()"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can access keys, values, or key-value pairs (items) using ",(0,s.jsx)(n.code,{children:"keys()"}),", ",(0,s.jsx)(n.code,{children:"values()"}),", and ",(0,s.jsx)(n.code,{children:"items()"})," methods, respectively."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Dictionary with key-value pairs\r\nperson = {\"name\": \"John\", \"age\": 30, \"city\": \"NY\"}\r\n\r\n# Accessing keys\r\nkeys = person.keys()\r\nprint(keys)  # Output: dict_keys(['name', 'age', 'city'])\r\n\r\n# Accessing values\r\nvalues = person.values()\r\nprint(values)  # Output: dict_values(['John', 30, 'NY'])\r\n\r\n# Accessing key-value pairs (items)\r\nitems = person.items()\r\nprint(items)  # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'NY')])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Keep in mind that attempting to access a non-existent key using square brackets (",(0,s.jsx)(n.code,{children:"[]"}),") will raise a ",(0,s.jsx)(n.code,{children:"KeyError"}),". However, using ",(0,s.jsx)(n.code,{children:"get()"})," with a default value will return the default value if the key is not found, avoiding an error. This makes ",(0,s.jsx)(n.code,{children:"get()"})," a safer choice when dealing with uncertain keys in a dictionary."]}),"\n",(0,s.jsx)(n.p,{children:"Choose the appropriate method based on your needs for accessing dictionary elements and handling possible missing keys."}),"\n",(0,s.jsx)(n.h3,{id:"dictionary-methods",children:"Dictionary Methods"}),"\n",(0,s.jsx)(n.p,{children:"In Python, dictionaries have various built-in methods that provide convenient functionalities for working with key-value pairs and manipulating dictionary data. Here are some common dictionary methods:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"get(key, default=None)"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns the value associated with the given key. If the key is not found, it returns the default value (default is ",(0,s.jsx)(n.code,{children:"None"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"keys()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a view object that contains all the keys in the dictionary."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"values()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a view object that contains all the values in the dictionary."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"items()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a view object that contains all the key-value pairs (as tuples) in the dictionary."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pop(key, default=None)"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Removes the key from the dictionary and returns its associated value. If the key is not found, it returns the default value."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"popitem()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removes and returns an arbitrary key-value pair from the dictionary as a tuple. Raises a ",(0,s.jsx)(n.code,{children:"KeyError"})," if the dictionary is empty."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"clear()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Removes all key-value pairs from the dictionary, making it empty."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"update(other_dict)"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Updates the dictionary with the key-value pairs from ",(0,s.jsx)(n.code,{children:"other_dict"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"copy()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a shallow copy of the dictionary."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fromkeys(keys, value=None)"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns a new dictionary with keys from the iterable ",(0,s.jsx)(n.code,{children:"keys"})," and the same default ",(0,s.jsx)(n.code,{children:"value"})," for all keys."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example demonstrating some of these dictionary methods:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"person = {\"name\": \"John\", \"age\": 30, \"city\": \"NY\"}\r\n\r\n# Using get()\r\nprint(person.get(\"name\"))         # Output: John\r\nprint(person.get(\"occupation\"))   # Output: None\r\n\r\n# Using keys()\r\nprint(person.keys())              # Output: dict_keys(['name', 'age', 'city'])\r\n\r\n# Using values()\r\nprint(person.values())            # Output: dict_values(['John', 30, 'NY'])\r\n\r\n# Using items()\r\nprint(person.items())             # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'NY')])\r\n\r\n# Using pop()\r\nage = person.pop(\"age\")\r\nprint(age)                        # Output: 30\r\nprint(person)                     # Output: {'name': 'John', 'city': 'NY'}\r\n\r\n# Using popitem()\r\nkey, value = person.popitem()\r\nprint(key, value)                 # Output: city NY\r\nprint(person)                     # Output: {'name': 'John'}\r\n\r\n# Using clear()\r\nperson.clear()\r\nprint(person)                     # Output: {}\r\n\r\n# Using update()\r\nperson.update({\"occupation\": \"Engineer\"})\r\nprint(person)                     # Output: {'occupation': 'Engineer'}\r\n\r\n# Using copy()\r\ncopied_person = person.copy()\r\nprint(copied_person)              # Output: {'occupation': 'Engineer'}\r\n\r\n# Using fromkeys()\r\nkeys = [\"name\", \"age\", \"city\"]\r\ndefault_value = \"Unknown\"\r\ninfo = dict.fromkeys(keys, default_value)\r\nprint(info)                       # Output: {'name': 'Unknown', 'age': 'Unknown', 'city': 'Unknown'}\n"})}),"\n",(0,s.jsx)(n.p,{children:"These are some of the most commonly used methods for dictionaries in Python. By mastering these methods, you can efficiently work with dictionary data in your Python programs."}),"\n",(0,s.jsx)(n.h3,{id:"default-dictionaries",children:"Default Dictionaries"}),"\n",(0,s.jsxs)(n.p,{children:["In Python, a default dictionary is a specialized dictionary provided by the ",(0,s.jsx)(n.code,{children:"collections"})," module. It is an extension of the built-in ",(0,s.jsx)(n.code,{children:"dict"})," type that automatically provides default values for keys that do not exist. When accessing a missing key in a default dictionary, instead of raising a ",(0,s.jsx)(n.code,{children:"KeyError"}),", it returns the default value associated with the dictionary."]}),"\n",(0,s.jsx)(n.p,{children:"The primary advantage of using a default dictionary is to simplify code when working with missing or unknown keys. It is often used to handle default values for keys that have not been explicitly set."}),"\n",(0,s.jsxs)(n.p,{children:["To create a default dictionary, you need to import it from the ",(0,s.jsx)(n.code,{children:"collections"})," module and specify the default value that should be returned for missing keys."]}),"\n",(0,s.jsx)(n.p,{children:"Here's how you can create and use a default dictionary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from collections import defaultdict\r\n\r\n# Create a default dictionary with the default value 0 for missing keys\r\nscores = defaultdict(int)\r\n\r\n# Add key-value pairs\r\nscores["Alice"] = 85\r\nscores["Bob"] = 92\r\n\r\n# Access existing keys\r\nprint(scores["Alice"])  # Output: 85\r\nprint(scores["Bob"])    # Output: 92\r\n\r\n# Access missing keys (automatically initialized with the default value)\r\nprint(scores["Charlie"])  # Output: 0\r\n\r\n# Accessing missing keys with a custom default value\r\ndefault_scores = defaultdict(lambda: "Not Available")\r\nprint(default_scores["Alice"])    # Output: Not Available\r\nprint(default_scores["Charlie"])  # Output: Not Available\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"scores"})," is a default dictionary with a default value of ",(0,s.jsx)(n.code,{children:"0"}),". When accessing a missing key, it automatically returns ",(0,s.jsx)(n.code,{children:"0"}),". In the second case, ",(0,s.jsx)(n.code,{children:"default_scores"})," is a default dictionary with a default value specified as a lambda function, returning ",(0,s.jsx)(n.code,{children:'"Not Available"'})," for missing keys."]}),"\n",(0,s.jsx)(n.p,{children:"The default value can be any valid Python object, such as an integer, string, list, or another dictionary. By using a default dictionary, you can simplify your code and handle missing keys gracefully without needing additional checks for key existence."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);