"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[1509],{1028:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(4848),r=a(8453);const i={sidebar_position:18},s="Methods in Java",o={id:"java/Java-Methods",title:"Java-Methods",description:"In Java, a method is a block of code that performs a specific task and can be invoked or called from other parts of the program. Methods are used to organize code into reusable units, improve readability, and facilitate code maintenance.",source:"@site/docs/java/Java-Methods.md",sourceDirName:"java",slug:"/java/Java-Methods",permalink:"/my-website-tutorial/docs/java/Java-Methods",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Methods.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Java-Arrays-Collections",permalink:"/my-website-tutorial/docs/java/Java-Arrays-Collections"},next:{title:"Java-Object-Oriented-Programming-Concepts",permalink:"/my-website-tutorial/docs/java/Java-Object-Oriented-Programming-Concepts"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In Java, a method is a block of code that performs a specific task and can be invoked or called from other parts of the program. Methods are used to organize code into reusable units, improve readability, and facilitate code maintenance."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"methods-in-java",children:"Methods in Java"}),"\n",(0,t.jsxs)(n.p,{children:["A method typically consists of a method signature, which includes the method name, parameters (if any), return type, and method body enclosed within curly braces ",(0,t.jsx)(n.code,{children:"{}"}),". Here's a breakdown of each component:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Method Name"}),": A unique identifier for the method that follows the naming conventions of identifiers in Java (e.g., camelCase)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),": Optional input values that are passed to the method for processing. Parameters are declared within parentheses ",(0,t.jsx)(n.code,{children:"()"})," and separated by commas. If a method doesn't require any parameters, the parentheses are left empty."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Return Type"}),": Specifies the type of value that the method returns after execution. If a method doesn't return any value, the return type is ",(0,t.jsx)(n.code,{children:"void"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Method Body"}),": The block of code enclosed within curly braces ",(0,t.jsx)(n.code,{children:"{}"})," that defines the functionality of the method."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here's the general syntax of a method declaration in Java:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"returnType methodName(parameterType1 parameter1, parameterType2 parameter2, ...) {\r\n    // Method body\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example of a method without parameters and return type ",(0,t.jsx)(n.code,{children:"void"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public void greet() {\r\n    System.out.println("Hello, world!");\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example of a method with parameters and return type ",(0,t.jsx)(n.code,{children:"int"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public int add(int num1, int num2) {\r\n    int sum = num1 + num2;\r\n    return sum;\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example of a method with parameters and return type ",(0,t.jsx)(n.code,{children:"String"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public String formatName(String firstName, String lastName) {\r\n    return lastName + ", " + firstName;\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To invoke or call a method from another part of the program, you use the method name followed by parentheses ",(0,t.jsx)(n.code,{children:"()"}),". If the method requires parameters, you pass the appropriate values within the parentheses."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of invoking the ",(0,t.jsx)(n.code,{children:"greet()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class Main {\r\n    public static void main(String[] args) {\r\n        // Creating an instance of Main class\r\n        Main main = new Main();\r\n        // Invoking the greet() method\r\n        main.greet();\r\n    }\r\n    \r\n    // Method definition\r\n    public void greet() {\r\n        System.out.println("Hello, world!");\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example of invoking the ",(0,t.jsx)(n.code,{children:"add()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class Main {\r\n    public static void main(String[] args) {\r\n        Main main = new Main();\r\n        int result = main.add(5, 3);\r\n        System.out.println("Sum: " + result);\r\n    }\r\n    \r\n    public int add(int num1, int num2) {\r\n        int sum = num1 + num2;\r\n        return sum;\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example of invoking the ",(0,t.jsx)(n.code,{children:"formatName()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class Main {\r\n    public static void main(String[] args) {\r\n        Main main = new Main();\r\n        String formattedName = main.formatName("John", "Doe");\r\n        System.out.println("Formatted Name: " + formattedName);\r\n    }\r\n    \r\n    public String formatName(String firstName, String lastName) {\r\n        return lastName + ", " + firstName;\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Methods play a crucial role in Java programming by promoting code reusability, modularization, and abstraction. They allow developers to break down complex tasks into smaller, manageable units of code, making programs easier to understand and maintain."})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);