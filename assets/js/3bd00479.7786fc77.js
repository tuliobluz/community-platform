"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"overview",title:"Testing Overview"},a=void 0,s={unversionedId:"Testing/overview",id:"Testing/overview",title:"Testing Overview",description:"In the earlier stages of our platform when it consisted of a small number of modules and use cases, we relied on user testing and strict TypeScript typings. However, as the platform grew in complexity, we acknowledged the need for a more comprehensive testing strategy and first started introducing end-to-end (E2E) tests, focusing primarily on core modules like reading and creating how-tos, updating user profiles, etc. For E2E testing, we use Cypress, which has proven to be a valuable asset in our testing arsenal.",source:"@site/docs/Testing/overview.md",sourceDirName:"Testing",slug:"/Testing/overview",permalink:"/Testing/overview",draft:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Testing/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Testing Overview"},sidebar:"mainSidebar",previous:{title:"Tests",permalink:"/Backend Development/tests"},next:{title:"E2E Testing",permalink:"/Testing/end-to-end"}},l={},c=[{value:"Running tests",id:"running-tests",level:2},{value:"Core application",id:"core-application",level:3},{value:"Components",id:"components",level:3},{value:"Functions",id:"functions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the earlier stages of our platform when it consisted of a small number of modules and use cases, we relied on user testing and strict TypeScript typings. However, as the platform grew in complexity, we acknowledged the need for a more comprehensive testing strategy and first started introducing end-to-end (E2E) tests, focusing primarily on core modules like reading and creating how-tos, updating user profiles, etc. For E2E testing, we use Cypress, which has proven to be a valuable asset in our testing arsenal."),(0,o.kt)("p",null,"While this approach has served us well, we are continuously evolving our testing strategies to ensure the robustness of our platform. Recently, we've expanded our tools to adopt ",(0,o.kt)("a",{parentName:"p",href:"https://testing-library.com/"},(0,o.kt)("inlineCode",{parentName:"a"},"@testing-library"))," so that we can continue to write tests which mimic user interactions but run significantly faster than the Cypress E2E test suites."),(0,o.kt)("p",null,"There are two specific aims of this approach:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Speed up local development workflows by providing fast feedback after changes have been made"),(0,o.kt)("li",{parentName:"ul"},"Reduce the cost around introducing new tests so that it is easier for contributors to include tests as part of their changes.")),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("h3",{id:"core-application"},"Core application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test:unit\n## Application e2e\nyarn test\n")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn test\n")),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn test\n")))}d.isMDXComponent=!0}}]);