"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[7892],{9344:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(4848),s=a(8453);const r={sidebar_position:37},i="Java Enumerations",o={id:"java/Java-Enumerations",title:"Java-Enumerations",description:"Enumerations in Java provide a way to define a fixed set of constants (enumerated values) within a single data type. Enumerations (enums) make the code more readable, maintainable, and less error-prone by allowing developers to use meaningful names for constant values.",source:"@site/docs/java/Java-Enumerations.md",sourceDirName:"java",slug:"/java/Java-Enumerations",permalink:"/my-website-tutorial/docs/java/Java-Enumerations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Enumerations.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37},sidebar:"tutorialSidebar",previous:{title:"Java-Generics",permalink:"/my-website-tutorial/docs/java/Java-Generics"},next:{title:"Java-Working-with-Strings",permalink:"/my-website-tutorial/docs/java/Java-Working-with-Strings"}},c={},l=[];function d(n){const e={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Enumerations in Java provide a way to define a fixed set of constants (enumerated values) within a single data type. Enumerations (enums) make the code more readable, maintainable, and less error-prone by allowing developers to use meaningful names for constant values."}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h1,{id:"java-enumerations",children:"Java Enumerations"}),"\n",(0,t.jsx)(e.p,{children:"Here's a detailed explanation of enumerations in Java with examples:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Declaring an Enumeration:"})}),"\n",(0,t.jsxs)(e.p,{children:["To declare an enumeration in Java, you use the ",(0,t.jsx)(e.code,{children:"enum"})," keyword followed by the name of the enumeration type and a list of comma-separated constants enclosed within braces ",(0,t.jsx)(e.code,{children:"{}"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"enum Day {\r\n    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Accessing Enum Constants:"})}),"\n",(0,t.jsxs)(e.p,{children:["You can access enum constants using the dot notation (",(0,t.jsx)(e.code,{children:"EnumTypeName.EnumConstant"}),"). Enum constants are implicitly public, static, and final."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'Day today = Day.MONDAY;\r\nSystem.out.println("Today is: " + today);\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Switch Statements with Enumerations:"})}),"\n",(0,t.jsx)(e.p,{children:"Enumerations are often used with switch statements for better readability and type safety."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'switch (today) {\r\n    case MONDAY:\r\n        System.out.println("It\'s Monday.");\r\n        break;\r\n    case TUESDAY:\r\n        System.out.println("It\'s Tuesday.");\r\n        break;\r\n    // other cases...\r\n    default:\r\n        System.out.println("It\'s another day of the week.");\r\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Enum Constructors and Methods:"})}),"\n",(0,t.jsx)(e.p,{children:"Enum types can have constructors, fields, and methods just like regular classes."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'enum Season {\r\n    SPRING("March to May"),\r\n    SUMMER("June to August"),\r\n    AUTUMN("September to November"),\r\n    WINTER("December to February");\r\n    \r\n    private final String months;\r\n    \r\n    Season(String months) {\r\n        this.months = months;\r\n    }\r\n    \r\n    public String getMonths() {\r\n        return months;\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'Season currentSeason = Season.SPRING;\r\nSystem.out.println("Current season is " + currentSeason);\r\nSystem.out.println("Months in " + currentSeason + " are " + currentSeason.getMonths());\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Iterating Over Enum Constants:"})}),"\n",(0,t.jsxs)(e.p,{children:["You can iterate over enum constants using the ",(0,t.jsx)(e.code,{children:"values()"})," method, which returns an array of all enum constants."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"for (Day day : Day.values()) {\r\n    System.out.println(day);\r\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Enum with Fields and Methods:"})}),"\n",(0,t.jsx)(e.p,{children:"Enums can have fields, constructors, and methods just like regular classes."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"enum Direction {\r\n    NORTH(0), EAST(90), SOUTH(180), WEST(270);\r\n    \r\n    private final int angle;\r\n    \r\n    Direction(int angle) {\r\n        this.angle = angle;\r\n    }\r\n    \r\n    public int getAngle() {\r\n        return angle;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'Direction dir = Direction.EAST;\r\nSystem.out.println("Direction: " + dir);\r\nSystem.out.println("Angle: " + dir.getAngle());\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Enumerations in Java provide a convenient and type-safe way to represent a fixed set of constants, making the code more readable and maintainable. They are commonly used for defining things like days of the week, months of the year, states of a process, and more."})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);