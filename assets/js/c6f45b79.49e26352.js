"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[6283],{1492:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=a(4848),s=a(8453);const r={sidebar_position:27},i="Java Interfaces",c={id:"java/Java-Interfaces",title:"Java-Interfaces",description:"In Java, an interface is a reference type that defines a set of abstract methods and constants. It serves as a contract for classes that implement it, specifying what methods they must provide without defining how those methods should be implemented. Interfaces allow for the implementation of multiple inheritance, as a class can implement multiple interfaces.",source:"@site/docs/java/Java-Interfaces.md",sourceDirName:"java",slug:"/java/Java-Interfaces",permalink:"/my-website-tutorial/docs/java/Java-Interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Interfaces.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Java-Abstraction",permalink:"/my-website-tutorial/docs/java/Java-Abstraction"},next:{title:"Java-Enums",permalink:"/my-website-tutorial/docs/java/Java-Enums"}},o={},l=[];function d(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In Java, an interface is a reference type that defines a set of abstract methods and constants. It serves as a contract for classes that implement it, specifying what methods they must provide without defining how those methods should be implemented. Interfaces allow for the implementation of multiple inheritance, as a class can implement multiple interfaces."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"java-interfaces",children:"Java Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"Here's a detailed explanation of interfaces in Java along with examples:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Declaring Interfaces"}),":\r\nAn interface in Java is declared using the ",(0,t.jsx)(n.code,{children:"interface"})," keyword followed by the interface name. It contains method declarations (without method bodies) and can also include constant declarations (implicitly ",(0,t.jsx)(n.code,{children:"public"}),", ",(0,t.jsx)(n.code,{children:"static"}),", and ",(0,t.jsx)(n.code,{children:"final"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"interface Drawable {\r\n    void draw(); // Abstract method declaration\r\n    int DEFAULT_COLOR = 0xFF0000; // Constant declaration\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implementing Interfaces"}),":\r\nTo implement an interface, a class uses the ",(0,t.jsx)(n.code,{children:"implements"})," keyword followed by the interface name(s). The class must provide concrete implementations for all the abstract methods declared in the interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'class Circle implements Drawable {\r\n    @Override\r\n    public void draw() {\r\n        System.out.println("Drawing Circle");\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extending Interfaces"}),":\r\nAn interface can extend one or more other interfaces using the ",(0,t.jsx)(n.code,{children:"extends"})," keyword. The sub-interface inherits the abstract methods and constants from its parent interface(s)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"interface Shape extends Drawable {\r\n    double area(); // New abstract method\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Using Interfaces"}),":\r\nInterfaces can be used as types for variables, method parameters, and return types. This allows for polymorphism, where objects of different classes that implement the same interface can be treated uniformly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public void drawShape(Drawable shape) {\r\n    shape.draw(); // Can call draw() method on any object implementing Drawable interface\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default Methods"})," (Java 8 and later):\r\nStarting from Java 8, interfaces can contain default methods, which are methods with a default implementation. Classes that implement the interface can choose to override these methods or use the default implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'interface Greetable {\r\n    default void greet() {\r\n        System.out.println("Hello");\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Static Methods"})," (Java 8 and later):\r\nJava 8 also introduced static methods in interfaces, which are methods that belong to the interface itself and can be called without an instance of the interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"interface MathOperations {\r\n    static int add(int a, int b) {\r\n        return a + b;\r\n    }\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Constants"}),":\r\nInterfaces can declare constants, which are implicitly ",(0,t.jsx)(n.code,{children:"public"}),", ",(0,t.jsx)(n.code,{children:"static"}),", and ",(0,t.jsx)(n.code,{children:"final"}),". These constants can be accessed using the interface name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"int DEFAULT_COLOR = 0xFF0000;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Interfaces play a crucial role in Java programming, enabling abstraction, multiple inheritance, and code reusability. They are widely used in Java libraries and frameworks to define contracts for implementing classes."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);