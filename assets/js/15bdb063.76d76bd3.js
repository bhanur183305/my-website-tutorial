"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[8288],{4758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(4848),n=r(8453);const o={sidebar_position:30},i="Java Iterator",s={id:"java/Java-Iterator",title:"Java-Iterator",description:"An iterator in Java is an interface provided by the java.util package, specifically the Iterator interface. It is used to traverse through a collection of objects, such as ArrayList, LinkedList, HashSet, etc., one element at a time. Iterators provide a uniform way to access elements of various collection types, regardless of their underlying implementation.",source:"@site/docs/java/Java-Iterator.md",sourceDirName:"java",slug:"/java/Java-Iterator",permalink:"/my-website-tutorial/docs/java/Java-Iterator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/Java-Iterator.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Java-Date",permalink:"/my-website-tutorial/docs/java/Java-Date"},next:{title:"Java-Wrapper Class",permalink:"/my-website-tutorial/docs/java/Java-Wrapper Class"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["An iterator in Java is an interface provided by the ",(0,a.jsx)(t.code,{children:"java.util"})," package, specifically the ",(0,a.jsx)(t.code,{children:"Iterator"})," interface. It is used to traverse through a collection of objects, such as ArrayList, LinkedList, HashSet, etc., one element at a time. Iterators provide a uniform way to access elements of various collection types, regardless of their underlying implementation."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h1,{id:"java-iterator",children:"Java Iterator"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Iterator"})," interface declares three main methods:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"boolean hasNext()"}),": Returns ",(0,a.jsx)(t.code,{children:"true"})," if there are more elements in the collection to iterate over, otherwise returns ",(0,a.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"E next()"}),": Returns the next element in the collection and advances the iterator position. Throws a ",(0,a.jsx)(t.code,{children:"NoSuchElementException"})," if there are no more elements to iterate over."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"void remove()"}),": Removes the last element returned by the iterator from the underlying collection (optional operation). Throws an ",(0,a.jsx)(t.code,{children:"UnsupportedOperationException"})," if the collection does not support removal or if the ",(0,a.jsx)(t.code,{children:"remove()"})," method is called more than once per call to ",(0,a.jsx)(t.code,{children:"next()"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here's an example of how to use an iterator to iterate over an ArrayList:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.ArrayList;\r\nimport java.util.Iterator;\r\n\r\npublic class IteratorExample {\r\n    public static void main(String[] args) {\r\n        // Create an ArrayList\r\n        ArrayList<String> list = new ArrayList<>();\r\n        list.add("Java");\r\n        list.add("Python");\r\n        list.add("C++");\r\n\r\n        // Get an iterator for the ArrayList\r\n        Iterator<String> iterator = list.iterator();\r\n\r\n        // Iterate over the elements using hasNext() and next() methods\r\n        while (iterator.hasNext()) {\r\n            String element = iterator.next();\r\n            System.out.println(element);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, we create an ArrayList and add some elements to it. Then, we obtain an iterator for the ArrayList using the ",(0,a.jsx)(t.code,{children:"iterator()"})," method. We iterate over the elements using a ",(0,a.jsx)(t.code,{children:"while"})," loop, calling ",(0,a.jsx)(t.code,{children:"hasNext()"})," to check if there are more elements, and ",(0,a.jsx)(t.code,{children:"next()"})," to retrieve the next element."]}),"\n",(0,a.jsxs)(t.p,{children:["It's important to note that iterators are fail-fast, meaning that if the underlying collection is modified after the iterator is created (except through the iterator's own ",(0,a.jsx)(t.code,{children:"remove()"})," method), it will throw a ",(0,a.jsx)(t.code,{children:"ConcurrentModificationException"})," to prevent concurrent modification."]}),"\n",(0,a.jsx)(t.p,{children:"Overall, iterators are a powerful and efficient way to iterate over collections in Java, providing a standardized approach for traversing elements."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(6540);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);