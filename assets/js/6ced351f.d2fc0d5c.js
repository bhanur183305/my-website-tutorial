"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[6576],{7932:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=o(4848),t=o(8453);const s={sidebar_position:14},l="Java While Loops",r={id:"java/Java-While Loops",title:"Java-While Loops",description:"Here's a detailed explanation of Java While Loops along with examples:",source:"@site/docs/java/Java-While Loops.md",sourceDirName:"java",slug:"/java/Java-While Loops",permalink:"/my-website-tutorial/docs/java/Java-While Loops",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-While Loops.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Java-For Loops",permalink:"/my-website-tutorial/docs/java/Java-For Loops"},next:{title:"Java-Do-While Loops",permalink:"/my-website-tutorial/docs/java/Java-Do-While Loops"}},a={},c=[{value:"Simple While Loop",id:"simple-while-loop",level:4},{value:"While Loop with User Input",id:"while-loop-with-user-input",level:4},{value:"While Loop with Boolean Condition",id:"while-loop-with-boolean-condition",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here's a detailed explanation of Java While Loops along with examples:"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"java-while-loops",children:"Java While Loops"}),"\n",(0,i.jsxs)(n.p,{children:["In Java, a ",(0,i.jsx)(n.code,{children:"while"})," loop is a control flow statement that allows you to repeatedly execute a block of code as long as a specified condition is true. The loop iterates over the code block until the condition becomes false."]}),"\n",(0,i.jsxs)(n.p,{children:["The syntax of a ",(0,i.jsx)(n.code,{children:"while"})," loop is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"while (condition) {\r\n    // code block to be executed\r\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"condition"})," is a boolean expression that is evaluated before each iteration of the loop."]}),"\n",(0,i.jsxs)(n.li,{children:["If the condition evaluates to ",(0,i.jsx)(n.code,{children:"true"}),", the code block inside the loop is executed."]}),"\n",(0,i.jsxs)(n.li,{children:["After the code block execution, the condition is evaluated again. If it's still ",(0,i.jsx)(n.code,{children:"true"}),", the loop continues; otherwise, the loop terminates, and control is passed to the next statement after the loop."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"simple-while-loop",children:"Simple While Loop"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'int count = 1;\r\nwhile (count <= 5) {\r\n    System.out.println("Count: " + count);\r\n    count++; // increment count\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"count"})," variable is initialized to ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"while"})," loop checks if ",(0,i.jsx)(n.code,{children:"count"})," is less than or equal to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Inside the loop, the current value of ",(0,i.jsx)(n.code,{children:"count"})," is printed, and then ",(0,i.jsx)(n.code,{children:"count"})," is incremented by ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The loop repeats until ",(0,i.jsx)(n.code,{children:"count"})," becomes ",(0,i.jsx)(n.code,{children:"6"}),", at which point the condition becomes ",(0,i.jsx)(n.code,{children:"false"}),", and the loop terminates."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"while-loop-with-user-input",children:"While Loop with User Input"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import java.util.Scanner;\r\n\r\npublic class Main {\r\n    public static void main(String[] args) {\r\n        Scanner scanner = new Scanner(System.in);\r\n        int sum = 0;\r\n        int num;\r\n\r\n        System.out.println("Enter numbers (enter 0 to exit):");\r\n\r\n        while ((num = scanner.nextInt()) != 0) {\r\n            sum += num;\r\n        }\r\n\r\n        System.out.println("Sum: " + sum);\r\n        scanner.close();\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We create a ",(0,i.jsx)(n.code,{children:"Scanner"})," object to read input from the user."]}),"\n",(0,i.jsxs)(n.li,{children:["Inside the ",(0,i.jsx)(n.code,{children:"while"})," loop, we continuously read integers from the user until ",(0,i.jsx)(n.code,{children:"0"})," is entered."]}),"\n",(0,i.jsxs)(n.li,{children:["The loop terminates when the user enters ",(0,i.jsx)(n.code,{children:"0"}),", and the sum of all the entered numbers is displayed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"while-loop-with-boolean-condition",children:"While Loop with Boolean Condition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'boolean isRunning = true;\r\nint counter = 0;\r\n\r\nwhile (isRunning) {\r\n    System.out.println("Counter: " + counter);\r\n    counter++;\r\n\r\n    if (counter >= 10) {\r\n        isRunning = false; // terminate the loop\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We use a boolean variable ",(0,i.jsx)(n.code,{children:"isRunning"})," to control the loop execution."]}),"\n",(0,i.jsxs)(n.li,{children:["The loop continues as long as ",(0,i.jsx)(n.code,{children:"isRunning"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["We increment the ",(0,i.jsx)(n.code,{children:"counter"})," variable inside the loop, and when it reaches ",(0,i.jsx)(n.code,{children:"10"}),", we set ",(0,i.jsx)(n.code,{children:"isRunning"})," to ",(0,i.jsx)(n.code,{children:"false"}),", causing the loop to terminate."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While loops are useful when you want to repeat a block of code until a specific condition is met. They provide flexibility and are commonly used in various programming scenarios."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var i=o(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);