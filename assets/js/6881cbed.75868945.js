"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[3288],{5247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const o={sidebar_position:12},r="Python Tuples",a={id:"python/Python-tuples",title:"Python-tuples",description:"In Python, a tuple is an ordered collection of items that is immutable, meaning its elements cannot be modified after creation. Tuples are declared by enclosing comma-separated values within parentheses ( ).",source:"@site/docs/python/Python-tuples.md",sourceDirName:"python",slug:"/python/Python-tuples",permalink:"/my-website-tutorial/docs/python/Python-tuples",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-tuples.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Python-lists",permalink:"/my-website-tutorial/docs/python/Python-lists"},next:{title:"Python-sets",permalink:"/my-website-tutorial/docs/python/Python-sets"}},l={},c=[{value:"Tuple Indexing and Slicing",id:"tuple-indexing-and-slicing",level:3},{value:"Tuple Methods",id:"tuple-methods",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Python, a tuple is an ordered collection of items that is immutable, meaning its elements cannot be modified after creation. Tuples are declared by enclosing comma-separated values within parentheses ",(0,i.jsx)(n.code,{children:"( )"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"python-tuples",children:"Python Tuples"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of declaring a tuple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Declaring a tuple\r\nfruits = ("apple", "banana", "orange", "grape")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Advantages of Tuples:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Immutable: Tuples are immutable, which means their elements cannot be changed after creation. This property ensures data integrity and makes tuples suitable for situations where you want to store fixed data that should not be modified accidentally."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Faster Access: Accessing tuple elements is faster compared to other data structures like lists. Since tuples have a fixed size, the interpreter can directly access elements based on their index without any overhead."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Tuple Packing and Unpacking: Tuples allow you to pack multiple values into a single object and then unpack them into separate variables. This feature makes tuples useful for functions that need to return multiple values."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dictionary Keys: Tuples can be used as dictionary keys because they are immutable. Lists, on the other hand, are mutable and cannot be used as dictionary keys."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Disadvantages of Tuples:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Immutability: While immutability is an advantage in some scenarios, it can be a disadvantage when you need to modify the elements of a collection. Once a tuple is created, you cannot add, remove, or modify its elements. If you need a mutable collection, a list would be more appropriate."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Limited Functionality: Tuples have limited functionality compared to lists. For example, tuples do not have methods like ",(0,i.jsx)(n.code,{children:"append()"}),", ",(0,i.jsx)(n.code,{children:"extend()"}),", or ",(0,i.jsx)(n.code,{children:"remove()"}),", which are available for lists. If you require dynamic operations on the collection, a list would be more suitable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed Size: Once a tuple is created, its size cannot be changed. If you need to add or remove elements dynamically, a list is a better choice."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tuples are commonly used when you want to store a collection of items that should remain unchanged. They are suitable for situations where you need to ensure data integrity, have faster access to elements, or use them as dictionary keys. However, if you require a collection with dynamic operations or the ability to modify elements, a list would be a more suitable choice."}),"\n",(0,i.jsx)(n.h3,{id:"tuple-indexing-and-slicing",children:"Tuple Indexing and Slicing"}),"\n",(0,i.jsx)(n.p,{children:"Tuple Indexing:\r\nTuple elements are accessed using their index values. Indexing in Python starts from 0, where the first element has an index of 0, the second element has an index of 1, and so on. Negative indexing is also supported, where -1 refers to the last element, -2 refers to the second-to-last element, and so on."}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of tuple indexing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Declaring a tuple\r\nfruits = ("apple", "banana", "orange", "grape")\r\n\r\n# Accessing tuple elements by index\r\nprint(fruits[0])    # Output: "apple"\r\nprint(fruits[2])    # Output: "orange"\r\nprint(fruits[-1])   # Output: "grape"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Tuple Slicing:\r\nTuple slicing allows you to extract a portion of a tuple by specifying a range of indices. It returns a new tuple containing the selected elements. Slicing syntax uses the colon ",(0,i.jsx)(n.code,{children:":"})," operator."]}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of tuple slicing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Declaring a tuple\r\nnumbers = (1, 2, 3, 4, 5)\r\n\r\n# Slicing a tuple\r\nprint(numbers[1:4])   # Output: (2, 3, 4)\r\nprint(numbers[:3])    # Output: (1, 2, 3)\r\nprint(numbers[2:])    # Output: (3, 4, 5)\r\nprint(numbers[:-1])   # Output: (1, 2, 3, 4)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the examples above, ",(0,i.jsx)(n.code,{children:"numbers[1:4]"})," returns a new tuple containing elements with indices 1, 2, and 3. ",(0,i.jsx)(n.code,{children:"numbers[:3]"})," returns a tuple from the beginning up to index 2, and ",(0,i.jsx)(n.code,{children:"numbers[2:]"})," returns a tuple from index 2 to the end. ",(0,i.jsx)(n.code,{children:"numbers[:-1]"})," returns a tuple with all elements except the last one."]}),"\n",(0,i.jsx)(n.p,{children:"Tuples are commonly used when you want to store a collection of items that should not be changed, such as coordinates, configuration settings, or fixed data. Their immutability ensures data integrity and makes them suitable for situations where you want to protect the values from being accidentally modified."}),"\n",(0,i.jsx)(n.h3,{id:"tuple-methods",children:"Tuple Methods"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tuple"})," object in Python has several built-in methods that allow you to perform various operations on tuples. Here are the methods available for tuples:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"count(value)"}),": Returns the number of occurrences of a specified value in the tuple."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"index(value, start=0, end=len(tuple))"}),": Returns the index of the first occurrence of a specified value in the tuple. You can optionally specify the start and end indexes to search within a specific range."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note: Since tuples are immutable, the methods do not modify the original tuple but return a new value or index."}),"\n",(0,i.jsx)(n.p,{children:"Here's an example that demonstrates the usage of tuple methods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Sample tuple\r\nmy_tuple = (1, 2, 3, 2, 4, 2, 5)\r\n\r\n# count() method\r\ncount = my_tuple.count(2)\r\nprint(count)  # Output: 3\r\n\r\n# index() method\r\nindex = my_tuple.index(4)\r\nprint(index)  # Output: 4\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"count()"})," method is used to find the number of occurrences of the value ",(0,i.jsx)(n.code,{children:"2"})," in the tuple. It returns ",(0,i.jsx)(n.code,{children:"3"})," since ",(0,i.jsx)(n.code,{children:"2"})," appears three times in the tuple."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"index()"})," method is used to find the index of the value ",(0,i.jsx)(n.code,{children:"4"})," in the tuple. It returns ",(0,i.jsx)(n.code,{children:"4"})," since ",(0,i.jsx)(n.code,{children:"4"})," is found at index ",(0,i.jsx)(n.code,{children:"4"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"These methods provide useful functionality for working with tuples, allowing you to perform operations such as counting occurrences or finding the index of a specific value within a tuple."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);