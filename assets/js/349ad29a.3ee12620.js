"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[8264],{2281:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:32},c="Java Exception Handling",a={id:"java/Java-Exception-Handling",title:"Java-Exception-Handling",description:"Exception handling in Java is a mechanism used to handle runtime errors or exceptional conditions that occur during the execution of a program. Exceptions can arise due to various reasons, such as invalid input, file not found, network failure, or arithmetic errors like division by zero. By handling exceptions effectively, you can gracefully deal with unexpected situations and prevent program crashes.",source:"@site/docs/java/Java-Exception-Handling.md",sourceDirName:"java",slug:"/java/Java-Exception-Handling",permalink:"/my-website-tutorial/docs/java/Java-Exception-Handling",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Exception-Handling.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Java-Wrapper Class",permalink:"/my-website-tutorial/docs/java/Java-Wrapper Class"},next:{title:"Java-File-Handling",permalink:"/my-website-tutorial/docs/java/Java-File-Handling"}},o={},l=[];function d(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Exception handling in Java is a mechanism used to handle runtime errors or exceptional conditions that occur during the execution of a program. Exceptions can arise due to various reasons, such as invalid input, file not found, network failure, or arithmetic errors like division by zero. By handling exceptions effectively, you can gracefully deal with unexpected situations and prevent program crashes."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"java-exception-handling",children:"Java Exception Handling"}),"\n",(0,s.jsx)(n.p,{children:"Here's a detailed explanation of exception handling in Java along with examples:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Types of Exceptions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Java divides exceptions into two main categories: checked exceptions and unchecked exceptions."}),"\n",(0,s.jsxs)(n.li,{children:["Checked exceptions: These are exceptions that must be either caught or declared in the method signature using the ",(0,s.jsx)(n.code,{children:"throws"})," keyword. Examples include ",(0,s.jsx)(n.code,{children:"IOException"}),", ",(0,s.jsx)(n.code,{children:"SQLException"}),", etc."]}),"\n",(0,s.jsxs)(n.li,{children:["Unchecked exceptions: These are exceptions that do not need to be explicitly caught or declared. They are subclasses of ",(0,s.jsx)(n.code,{children:"RuntimeException"}),". Examples include ",(0,s.jsx)(n.code,{children:"NullPointerException"}),", ",(0,s.jsx)(n.code,{children:"ArrayIndexOutOfBoundsException"}),", ",(0,s.jsx)(n.code,{children:"ArithmeticException"}),", etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"try-catch Blocks"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"try"})," block is used to enclose the code that might throw an exception."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"catch"})," block follows the ",(0,s.jsx)(n.code,{children:"try"})," block and is used to handle the exception if it occurs."]}),"\n",(0,s.jsxs)(n.li,{children:["You can have multiple ",(0,s.jsx)(n.code,{children:"catch"})," blocks to handle different types of exceptions."]}),"\n",(0,s.jsxs)(n.li,{children:["The syntax is as follows:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"try {\r\n    // Code that may throw an exception\r\n} catch (ExceptionType1 e1) {\r\n    // Handler for ExceptionType1\r\n} catch (ExceptionType2 e2) {\r\n    // Handler for ExceptionType2\r\n} finally {\r\n    // Optional finally block (executed whether exception occurs or not)\r\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["The ",(0,s.jsx)(n.code,{children:"finally"})," Block"]}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"finally"})," block is optional and is used to execute code that should always run, regardless of whether an exception occurred or not."]}),"\n",(0,s.jsx)(n.li,{children:"It is commonly used to release resources like closing files, database connections, etc."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"finally"})," block executes even if an exception is thrown and not caught."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import java.io.File;\r\nimport java.io.FileNotFoundException;\r\nimport java.util.Scanner;\r\n\r\npublic class ExceptionHandlingExample {\r\n    public static void main(String[] args) {\r\n        Scanner scanner = null;\r\n        try {\r\n            File file = new File("input.txt");\r\n            scanner = new Scanner(file);\r\n            while (scanner.hasNextLine()) {\r\n                System.out.println(scanner.nextLine());\r\n            }\r\n        } catch (FileNotFoundException e) {\r\n            System.out.println("File not found: " + e.getMessage());\r\n        } finally {\r\n            if (scanner != null) {\r\n                scanner.close();\r\n            }\r\n        }\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Throwing Exceptions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can manually throw exceptions using the ",(0,s.jsx)(n.code,{children:"throw"})," keyword."]}),"\n",(0,s.jsx)(n.li,{children:"This is useful when you want to signal that an error condition has occurred."}),"\n",(0,s.jsxs)(n.li,{children:["Example:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class CustomExceptionExample {\r\n    public static void main(String[] args) {\r\n        try {\r\n            int age = -5;\r\n            if (age < 0) {\r\n                throw new IllegalArgumentException("Age cannot be negative");\r\n            }\r\n        } catch (IllegalArgumentException e) {\r\n            System.out.println("Invalid age: " + e.getMessage());\r\n        }\r\n    }\r\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Creating Custom Exceptions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can create your own custom exception classes by extending the ",(0,s.jsx)(n.code,{children:"Exception"})," class or one of its subclasses."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public class CustomException extends Exception {\r\n    public CustomException(String message) {\r\n        super(message);\r\n    }\r\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can then throw and catch instances of your custom exception class as needed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Exception handling is an essential aspect of writing robust and reliable Java programs. By anticipating and handling exceptions appropriately, you can improve the stability and usability of your applications."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);