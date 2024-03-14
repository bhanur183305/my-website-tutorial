"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[9440],{1803:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(4848),s=t(8453);const r={sidebar_position:12},i="Java-Switch Statements",c={id:"java/Java-Switch-Statements",title:"Java-Switch-Statements",description:"The switch statement in Java is a control flow statement used to select one of many code blocks to be executed, based on the value of a variable or expression. It provides an alternative to multiple if-else statements when you have a single variable to check against multiple possible values.",source:"@site/docs/java/Java-Switch-Statements.md",sourceDirName:"java",slug:"/java/Java-Switch-Statements",permalink:"/my-website-tutorial/docs/java/Java-Switch-Statements",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Switch-Statements.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Java-If-Else-Statements",permalink:"/my-website-tutorial/docs/java/Java-If-Else-Statements"},next:{title:"Java-For Loops",permalink:"/my-website-tutorial/docs/java/Java-For Loops"}},o={},d=[];function l(e){const a={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"switch"})," statement in Java is a control flow statement used to select one of many code blocks to be executed, based on the value of a variable or expression. It provides an alternative to multiple ",(0,n.jsx)(a.code,{children:"if-else"})," statements when you have a single variable to check against multiple possible values."]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h1,{id:"java-switch-statements",children:"Java-Switch Statements"}),"\n",(0,n.jsxs)(a.p,{children:["Here's the general syntax of a ",(0,n.jsx)(a.code,{children:"switch"})," statement in Java:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"switch (expression) {\r\n    case value1:\r\n        // Code block to be executed if expression equals value1\r\n        break;\r\n    case value2:\r\n        // Code block to be executed if expression equals value2\r\n        break;\r\n    // More case statements as needed\r\n    default:\r\n        // Code block to be executed if expression doesn't match any case\r\n}\n"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["The ",(0,n.jsx)(a.code,{children:"expression"})," can be of type ",(0,n.jsx)(a.code,{children:"byte"}),", ",(0,n.jsx)(a.code,{children:"short"}),", ",(0,n.jsx)(a.code,{children:"int"}),", ",(0,n.jsx)(a.code,{children:"char"}),", ",(0,n.jsx)(a.code,{children:"String"}),", or an enumeration."]}),"\n",(0,n.jsxs)(a.li,{children:["Each ",(0,n.jsx)(a.code,{children:"case"})," label specifies a value to compare the expression against."]}),"\n",(0,n.jsxs)(a.li,{children:["The ",(0,n.jsx)(a.code,{children:"default"})," label is optional and provides a code block to be executed if the expression doesn't match any of the ",(0,n.jsx)(a.code,{children:"case"})," labels."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["When the ",(0,n.jsx)(a.code,{children:"switch"})," statement is executed, the expression is evaluated, and control jumps to the ",(0,n.jsx)(a.code,{children:"case"})," label that matches the value of the expression. If no match is found, the code block under the ",(0,n.jsx)(a.code,{children:"default"})," label (if present) is executed."]}),"\n",(0,n.jsxs)(a.p,{children:["Here's an example to illustrate the usage of the ",(0,n.jsx)(a.code,{children:"switch"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'public class Main {\r\n    public static void main(String[] args) {\r\n        int day = 3;\r\n        String dayName;\r\n\r\n        switch (day) {\r\n            case 1:\r\n                dayName = "Monday";\r\n                break;\r\n            case 2:\r\n                dayName = "Tuesday";\r\n                break;\r\n            case 3:\r\n                dayName = "Wednesday";\r\n                break;\r\n            case 4:\r\n                dayName = "Thursday";\r\n                break;\r\n            case 5:\r\n                dayName = "Friday";\r\n                break;\r\n            case 6:\r\n                dayName = "Saturday";\r\n                break;\r\n            case 7:\r\n                dayName = "Sunday";\r\n                break;\r\n            default:\r\n                dayName = "Invalid day";\r\n        }\r\n\r\n        System.out.println("Day is: " + dayName);\r\n    }\r\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["In this example, the value of the ",(0,n.jsx)(a.code,{children:"day"})," variable is compared against different cases using the ",(0,n.jsx)(a.code,{children:"switch"})," statement. Depending on the value of ",(0,n.jsx)(a.code,{children:"day"}),", the corresponding ",(0,n.jsx)(a.code,{children:"dayName"})," is assigned. If ",(0,n.jsx)(a.code,{children:"day"}),' doesn\'t match any case, the default value "Invalid day" is assigned to ',(0,n.jsx)(a.code,{children:"dayName"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Remember to include a ",(0,n.jsx)(a.code,{children:"break"})," statement after each ",(0,n.jsx)(a.code,{children:"case"})," block to exit the ",(0,n.jsx)(a.code,{children:"switch"})," statement after executing the corresponding code block. Otherwise, control will fall through to the next ",(0,n.jsx)(a.code,{children:"case"})," label, leading to unintended behavior."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>c});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);