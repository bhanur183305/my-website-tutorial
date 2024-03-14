"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[3340],{5527:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(4848),i=s(8453);const r={sidebar_position:11},l="Python Lists",o={id:"python/Python-lists",title:"Python-lists",description:"In Python, a list is a collection of items that are ordered and mutable. It allows you to store multiple values of different data types in a single variable. Lists are created by enclosing comma-separated values within square brackets [ ].",source:"@site/docs/python/Python-lists.md",sourceDirName:"python",slug:"/python/Python-lists",permalink:"/my-website-tutorial/docs/python/Python-lists",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-lists.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Python-numbers",permalink:"/my-website-tutorial/docs/python/Python-numbers"},next:{title:"Python-tuples",permalink:"/my-website-tutorial/docs/python/Python-tuples"}},d={},c=[{value:"Indexing and Slicing",id:"indexing-and-slicing",level:3},{value:"List Methods",id:"list-methods",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In Python, a list is a collection of items that are ordered and mutable. It allows you to store multiple values of different data types in a single variable. Lists are created by enclosing comma-separated values within square brackets ",(0,t.jsx)(n.code,{children:"[ ]"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"python-lists",children:"Python Lists"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of declaring a list in Python:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Declaring a list\r\nnumbers = [1, 2, 3, 4, 5]\r\nfruits = [\"apple\", \"banana\", \"orange\"]\r\nmixed = [1, \"hello\", True, 3.14]\r\n\r\n# Print the lists\r\nprint(numbers)  # Output: [1, 2, 3, 4, 5]\r\nprint(fruits)   # Output: ['apple', 'banana', 'orange']\r\nprint(mixed)    # Output: [1, 'hello', True, 3.14]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Advantages of lists in Python:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Versatility"}),": Lists can store items of different data types, allowing flexibility in data representation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ordered"}),": The items in a list are ordered, meaning they have a specific index that defines their position."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mutable"}),": Lists can be modified, items can be added, removed, or changed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Size"}),": Lists can grow or shrink dynamically as items are added or removed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Common Operations"}),": Lists have built-in methods and operators for common operations such as appending, concatenating, slicing, and more."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Disadvantages of lists in Python:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linear Search"}),": Accessing elements in a list by index requires a linear search, which may be slower for large lists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory Overhead"}),": Lists consume more memory compared to other data structures due to their flexibility and dynamic size."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mutability"}),": While mutability is an advantage, it can also lead to unexpected changes if not handled carefully."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Despite the disadvantages, lists are widely used in Python because of their flexibility and ease of use in handling collections of items."}),"\n",(0,t.jsx)(n.p,{children:"In Python, list indexing and slicing are used to access specific elements or subsequences within a list."}),"\n",(0,t.jsx)(n.h3,{id:"indexing-and-slicing",children:"Indexing and Slicing"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"List Indexing:"}),"\r\nList indexing allows you to access individual elements of a list by their position (index) within the list. Indexing starts from 0 for the first element and goes up to ",(0,t.jsx)(n.code,{children:"len(list) - 1"})," for the last element."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of list indexing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'fruits = ["apple", "banana", "orange", "grape"]\r\nprint(fruits[0])    # Output: "apple"\r\nprint(fruits[2])    # Output: "orange"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, ",(0,t.jsx)(n.code,{children:"fruits[0]"}),' returns the first element of the list, which is "apple", and ',(0,t.jsx)(n.code,{children:"fruits[2]"}),' returns the third element, which is "orange".']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"List Slicing:"}),"\r\nList slicing allows you to access a subsequence of elements within a list by specifying a range of indices. The syntax for list slicing is ",(0,t.jsx)(n.code,{children:"list[start:end:step]"}),", where ",(0,t.jsx)(n.code,{children:"start"})," is the starting index, ",(0,t.jsx)(n.code,{children:"end"})," is the ending index (exclusive), and ",(0,t.jsx)(n.code,{children:"step"})," is the step size."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of list slicing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\r\nprint(numbers[1:5])         # Output: [2, 3, 4, 5]\r\nprint(numbers[2:8:2])       # Output: [3, 5, 7]\r\nprint(numbers[:5])          # Output: [1, 2, 3, 4, 5]\r\nprint(numbers[3:])          # Output: [4, 5, 6, 7, 8, 9, 10]\r\nprint(numbers[::-1])        # Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, ",(0,t.jsx)(n.code,{children:"numbers[1:5]"})," returns a subsequence from index 1 to 4 (elements at indices 1, 2, 3, 4), ",(0,t.jsx)(n.code,{children:"numbers[2:8:2]"})," returns a subsequence with a step size of 2 from index 2 to 7 (elements at indices 2, 4, 6), ",(0,t.jsx)(n.code,{children:"numbers[:5]"})," returns a subsequence from the beginning to index 4 (elements at indices 0, 1, 2, 3, 4), ",(0,t.jsx)(n.code,{children:"numbers[3:]"})," returns a subsequence from index 3 to the end (elements at indices 3, 4, 5, 6, 7, 8, 9), and ",(0,t.jsx)(n.code,{children:"numbers[::-1]"})," returns the list in reverse order."]}),"\n",(0,t.jsx)(n.p,{children:"List indexing and slicing are powerful techniques that allow you to retrieve specific elements or subsequences from a list, making it easier to work with and manipulate the data stored in lists."}),"\n",(0,t.jsx)(n.h3,{id:"list-methods",children:"List Methods"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"dir()"})," function in Python returns a list of valid attributes and methods for a given object. When called with a list object, it returns the list of built-in methods available for lists. Here is an explanation of some common methods returned by ",(0,t.jsx)(n.code,{children:"dir(list)"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"append(x)"})}),":\r\nAdds an element ",(0,t.jsx)(n.code,{children:"x"})," to the end of the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nnumbers.append(4)\r\nprint(numbers)  # Output: [1, 2, 3, 4]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"clear()"})}),":\r\nRemoves all elements from the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3, 4]\r\nnumbers.clear()\r\nprint(numbers)  # Output: []\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"copy()"})}),":\r\nReturns a shallow copy of the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nnumbers_copy = numbers.copy()\r\nprint(numbers_copy)  # Output: [1, 2, 3]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"count(x)"})}),":\r\nReturns the number of occurrences of element ",(0,t.jsx)(n.code,{children:"x"})," in the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 2, 3, 2]\r\ncount = numbers.count(2)\r\nprint(count)  # Output: 3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"extend(iterable)"})}),":\r\nAppends elements from the iterable to the end of the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nnumbers.extend([4, 5, 6])\r\nprint(numbers)  # Output: [1, 2, 3, 4, 5, 6]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"index(x, start=0, end=len(list))"})}),":\r\nReturns the index of the first occurrence of element ",(0,t.jsx)(n.code,{children:"x"})," in the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3, 2, 4]\r\nindex = numbers.index(2)\r\nprint(index)  # Output: 1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"insert(i, x)"})}),":\r\nInserts element ",(0,t.jsx)(n.code,{children:"x"})," at position ",(0,t.jsx)(n.code,{children:"i"})," in the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nnumbers.insert(1, 4)\r\nprint(numbers)  # Output: [1, 4, 2, 3]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pop(i=-1)"})}),":\r\nRemoves and returns the element at position ",(0,t.jsx)(n.code,{children:"i"})," in the list. If ",(0,t.jsx)(n.code,{children:"i"})," is not specified, it removes and returns the last element."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nelement = numbers.pop(1)\r\nprint(element)  # Output: 2\r\nprint(numbers)  # Output: [1, 3]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"remove(x)"})}),":\r\nRemoves the first occurrence of element ",(0,t.jsx)(n.code,{children:"x"})," from the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3, 2, 4]\r\nnumbers.remove(2)\r\nprint(numbers)  # Output: [1, 3, 2, 4]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"reverse()"})}),":\r\nReverses the order of elements in the list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [1, 2, 3]\r\nnumbers.reverse()\r\nprint(numbers)  # Output: [3, 2, 1]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"**"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sort(key=None, reverse=False)"}),"**:\r\nSorts the elements of the list in ascending order. The ",(0,t.jsx)(n.code,{children:"key"})," and ",(0,t.jsx)(n.code,{children:"reverse"})," parameters can be used to customize the sorting behavior."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = [3, 1, 4, 2]\r\nnumbers.sort()\r\nprint(numbers)  # Output: [1, 2, 3, 4]\n"})}),"\n",(0,t.jsx)(n.p,{children:"These are just a few examples of the methods available for Python lists. There are additional methods and built-in functions that can be used to manipulate and operate on lists."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);