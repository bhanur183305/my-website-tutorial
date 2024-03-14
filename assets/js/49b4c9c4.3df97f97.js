"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[7925],{504:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=o(4848),i=o(8453);const s={sidebar_position:20},r="Python While Loops",c={id:"python/Python-While Loops",title:"Python-While Loops",description:"A while loop is a control flow statement in programming that allows a block of code to be executed repeatedly as long as a specified condition is true. It is used when you want to repeat a certain action or code block until a specific condition is no longer satisfied.",source:"@site/docs/python/Python-While Loops.md",sourceDirName:"python",slug:"/python/Python-While Loops",permalink:"/my-website-tutorial/docs/python/Python-While Loops",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Python-While Loops.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Python-For Loops",permalink:"/my-website-tutorial/docs/python/Python-For Loops"},next:{title:"Python-User Input",permalink:"/my-website-tutorial/docs/python/Python-User Input"}},l={},h=[];function d(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A while loop is a control flow statement in programming that allows a block of code to be executed repeatedly as long as a specified condition is true. It is used when you want to repeat a certain action or code block until a specific condition is no longer satisfied."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"python-while-loops",children:"Python While Loops"}),"\n",(0,t.jsx)(n.p,{children:"The general syntax of a while loop is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"while condition:\r\n    # Code block to be executed while the condition is true\r\n    # The code may modify variables that affect the condition\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here's how a while loop works:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Condition Evaluation:"})," The condition specified after the ",(0,t.jsx)(n.code,{children:"while"})," keyword is evaluated. If the condition is true, the code inside the loop's body is executed. If the condition is initially false, the loop is not executed at all, and the program moves to the first statement after the loop."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Execution:"})," The code inside the loop's body is executed. This block of code may contain one or more statements."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Re-evaluation of Condition:"})," After executing the code inside the loop, the condition is evaluated again. If the condition is still true, the loop repeats the execution of the code inside the loop's body. If the condition is false, the loop terminates, and the program continues with the next line of code after the loop."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The loop continues to execute as long as the condition remains true. If the condition becomes false during the execution of the loop, the loop exits, and the program continues with the statements after the loop."}),"\n",(0,t.jsx)(n.p,{children:"While loops are useful when you want to perform a task repeatedly until a specific condition is met. However, it's crucial to ensure that the loop condition eventually becomes false to prevent infinite loops, which could lead to program crashes or excessive resource usage. Therefore, it's essential to modify the loop control variable or update the loop condition within the loop body, so the loop can eventually terminate."}),"\n",(0,t.jsx)(n.p,{children:"Example of a while loop in Python:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"count = 1\r\n\r\nwhile count <= 5:\r\n    print(count)\r\n    count += 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1\r\n2\r\n3\r\n4\r\n5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the while loop starts with ",(0,t.jsx)(n.code,{children:"count"})," equal to 1. The condition ",(0,t.jsx)(n.code,{children:"count <= 5"})," is true, so the loop executes the code inside its body. The ",(0,t.jsx)(n.code,{children:"print"})," statement outputs the current value of ",(0,t.jsx)(n.code,{children:"count"}),", and then ",(0,t.jsx)(n.code,{children:"count"})," is incremented by 1 with ",(0,t.jsx)(n.code,{children:"count += 1"}),". This process continues until ",(0,t.jsx)(n.code,{children:"count"})," becomes 6, at which point the condition ",(0,t.jsx)(n.code,{children:"count <= 5"})," becomes false, and the loop terminates."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's see some more examples to understand how ",(0,t.jsx)(n.code,{children:"while"})," loops work:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1: Counting from 1 to 5"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"count = 1\r\nwhile count <= 5:\r\n    print(count)\r\n    count += 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1\r\n2\r\n3\r\n4\r\n5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we use a ",(0,t.jsx)(n.code,{children:"while"})," loop to print numbers from 1 to 5. The ",(0,t.jsx)(n.code,{children:"count"})," variable starts at 1, and the loop runs as long as ",(0,t.jsx)(n.code,{children:"count"})," is less than or equal to 5. Inside the loop, we print the value of ",(0,t.jsx)(n.code,{children:"count"}),", and then increment it by 1 with ",(0,t.jsx)(n.code,{children:"count += 1"})," at the end of each iteration."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2: User Input"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'sum = 0\r\nwhile True:\r\n    num = int(input("Enter a number (or 0 to exit): "))\r\n    if num == 0:\r\n        break  # Exit the loop when the user enters 0\r\n    sum += num\r\n\r\nprint("Sum of numbers:", sum)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we use a ",(0,t.jsx)(n.code,{children:"while"})," loop to continuously ask the user to enter numbers until they enter 0. The loop runs indefinitely as we have used ",(0,t.jsx)(n.code,{children:"True"})," as the condition, but inside the loop, we use a conditional ",(0,t.jsx)(n.code,{children:"if"})," statement to check if the user entered 0, and if so, we use the ",(0,t.jsx)(n.code,{children:"break"})," statement to exit the loop. Otherwise, we add the entered number to the ",(0,t.jsx)(n.code,{children:"sum"})," variable."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3: Countdown"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'countdown = 5\r\nwhile countdown > 0:\r\n    print(countdown)\r\n    countdown -= 1\r\nelse:\r\n    print("Liftoff!")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"5\r\n4\r\n3\r\n2\r\n1\r\nLiftoff!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we use a ",(0,t.jsx)(n.code,{children:"while"})," loop to perform a countdown from 5 to 1. The loop continues as long as the ",(0,t.jsx)(n.code,{children:"countdown"})," variable is greater than 0. After the loop exits normally (when the condition becomes ",(0,t.jsx)(n.code,{children:"False"}),"), the ",(0,t.jsx)(n.code,{children:"else"}),' block is executed, and "Liftoff!" is printed.']}),"\n",(0,t.jsxs)(n.p,{children:["Remember to be cautious with ",(0,t.jsx)(n.code,{children:"while"})," loops as they can lead to infinite loops if the condition never becomes ",(0,t.jsx)(n.code,{children:"False"}),", causing your program to get stuck. Always ensure that there is a way to break out of the loop based on the logic you are implementing."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);