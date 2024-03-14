"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[831],{8326:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=o(4848),r=o(8453);const i={sidebar_position:37},s="Python Scope",c={id:"python/Python-Scope",title:"Python-Scope",description:"In Python, scope refers to the region in a program where a particular variable is accessible and can be referenced. There are two main types of scopes in Python: local scope and global scope.",source:"@site/docs/python/Python-Scope.md",sourceDirName:"python",slug:"/python/Python-Scope",permalink:"/my-website-tutorial/docs/python/Python-Scope",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-Scope.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37},sidebar:"tutorialSidebar",previous:{title:"Python-PIP",permalink:"/my-website-tutorial/docs/python/Python-PIP"}},a={},l=[];function h(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In Python, scope refers to the region in a program where a particular variable is accessible and can be referenced. There are two main types of scopes in Python: local scope and global scope."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"python-scope",children:"Python Scope"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Local Scope:\r\nLocal scope refers to the region within a function where variables are declared and can only be accessed from within that function. Once the function finishes executing, the variables in its local scope are destroyed, and their values are no longer accessible."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of local scope:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def my_function():\r\n    x = 10       # x is in the local scope of my_function\r\n    print(x)\r\n\r\nmy_function()   # Output: 10\r\n\r\n# Attempting to access x outside the function will result in an error\r\nprint(x)        # NameError: name 'x' is not defined\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the variable ",(0,t.jsx)(n.code,{children:"x"})," is defined within the ",(0,t.jsx)(n.code,{children:"my_function()"})," function, making it accessible only within the function's scope."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Global Scope:\r\nGlobal scope refers to the region in the program outside any functions or blocks where variables are declared. Variables declared in the global scope can be accessed and modified throughout the entire program."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of global scope:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"global_var = 100   # global_var is in the global scope\r\n\r\ndef my_function():\r\n    print(global_var)   # We can access the global_var inside the function\r\n\r\nmy_function()    # Output: 100\r\n\r\n# We can also modify the global_var from within the function\r\ndef modify_global_var():\r\n    global global_var\r\n    global_var = 200\r\n\r\nmodify_global_var()\r\nprint(global_var)   # Output: 200\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:"global_var"})," is declared outside any functions, making it accessible from within the function ",(0,t.jsx)(n.code,{children:"my_function()"}),". Additionally, to modify the value of the global variable from within a function, we need to explicitly use the ",(0,t.jsx)(n.code,{children:"global"})," keyword."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Nested Scope:\r\nPython also supports nested scopes, where functions can be defined inside other functions. In such cases, the inner function can access variables from the outer (enclosing) function's scope."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of nested scope:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def outer_function():\r\n    outer_var = 5\r\n    \r\n    def inner_function():\r\n        inner_var = 10\r\n        print(outer_var + inner_var)  # Accessing outer_var from the inner_function\r\n    \r\n    inner_function()\r\n\r\nouter_function()   # Output: 15\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"inner_function()"})," can access the ",(0,t.jsx)(n.code,{children:"outer_var"})," from its enclosing ",(0,t.jsx)(n.code,{children:"outer_function()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It's important to understand these scopes, as using variables without defining them in the correct scope can lead to unexpected behavior or errors in your Python code. Local variables can only be used within the function they are defined in, while global variables can be accessed and modified throughout the entire program. Nested functions have access to variables from their enclosing functions as well."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);