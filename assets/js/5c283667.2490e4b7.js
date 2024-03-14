"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[5915],{8100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const o={sidebar_position:11},r="Java If-Else Statements",c={id:"java/Java-If-Else-Statements",title:"Java-If-Else-Statements",description:"Here's a detailed explanation of the if-else statement in Java, along with examples:",source:"@site/docs/java/Java-If-Else-Statements.md",sourceDirName:"java",slug:"/java/Java-If-Else-Statements",permalink:"/my-website-tutorial/docs/java/Java-If-Else-Statements",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-If-Else-Statements.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Java-Expressions",permalink:"/my-website-tutorial/docs/java/Java-Expressions"},next:{title:"Java-Switch-Statements",permalink:"/my-website-tutorial/docs/java/Java-Switch-Statements"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Here's a detailed explanation of the ",(0,s.jsx)(n.code,{children:"if-else"})," statement in Java, along with examples:"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"java-if-else-statements",children:"Java If-Else Statements"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"if-else"})," statement is a control flow statement that allows you to execute different blocks of code based on whether a specified condition evaluates to true or false. It has the following syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"if (condition) {\r\n    // code to be executed if the condition is true\r\n} else {\r\n    // code to be executed if the condition is false\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"condition"})," is a boolean expression that determines which block of code to execute. If the condition evaluates to ",(0,s.jsx)(n.code,{children:"true"}),", the code within the first block (enclosed within curly braces ",(0,s.jsx)(n.code,{children:"{}"}),") is executed. If the condition evaluates to ",(0,s.jsx)(n.code,{children:"false"}),", the code within the ",(0,s.jsx)(n.code,{children:"else"})," block (if present) is executed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else"})," block is optional. If omitted, the code within the ",(0,s.jsx)(n.code,{children:"if"})," block is executed if the condition is true, and no action is taken if the condition is false."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can have multiple ",(0,s.jsx)(n.code,{children:"if-else"})," statements nested within each other to handle more complex scenarios."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of using the ",(0,s.jsx)(n.code,{children:"if-else"})," statement to determine if a number is even or odd:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'int number = 10;\r\n\r\nif (number % 2 == 0) {\r\n    System.out.println(number + " is even");\r\n} else {\r\n    System.out.println(number + " is odd");\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We declare a variable ",(0,s.jsx)(n.code,{children:"number"})," and assign it the value ",(0,s.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The condition ",(0,s.jsx)(n.code,{children:"(number % 2 == 0)"})," checks if the number is divisible by 2 (i.e., it's even). If true, the code within the ",(0,s.jsx)(n.code,{children:"if"})," block (",(0,s.jsx)(n.code,{children:'System.out.println(number + " is even");'}),") is executed, printing ",(0,s.jsx)(n.code,{children:'"10 is even"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If the condition is false (i.e., the number is not divisible by 2), the code within the ",(0,s.jsx)(n.code,{children:"else"})," block (",(0,s.jsx)(n.code,{children:'System.out.println(number + " is odd");'}),") is executed, printing ",(0,s.jsx)(n.code,{children:'"10 is odd"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can also use multiple ",(0,s.jsx)(n.code,{children:"if-else"})," statements to check multiple conditions. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'int score = 75;\r\n\r\nif (score >= 90) {\r\n    System.out.println("Grade: A");\r\n} else if (score >= 80) {\r\n    System.out.println("Grade: B");\r\n} else if (score >= 70) {\r\n    System.out.println("Grade: C");\r\n} else if (score >= 60) {\r\n    System.out.println("Grade: D");\r\n} else {\r\n    System.out.println("Grade: F");\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We have multiple conditions to determine the grade based on the ",(0,s.jsx)(n.code,{children:"score"})," variable."]}),"\n",(0,s.jsxs)(n.li,{children:["Each ",(0,s.jsx)(n.code,{children:"if-else if"})," block is evaluated sequentially until one of the conditions is true."]}),"\n",(0,s.jsxs)(n.li,{children:["If none of the conditions are true, the code within the ",(0,s.jsx)(n.code,{children:"else"})," block is executed."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);