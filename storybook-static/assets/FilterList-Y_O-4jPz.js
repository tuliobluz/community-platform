import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{B as x}from"./ButtonIcon-BgGeW-Be.js";import{C as L}from"./CardButton-D47sjuxH.js";import{M as w}from"./MemberBadge-69En_t8p.js";import{F as c,T as _}from"./theme-ui-components.esm-D5Q63Fx1.js";const g=t=>{const i=n.useRef(null),[r,o]=n.useState(!0),[l,s]=n.useState(!1),{activeFilters:a,availableFilters:d,onFilterChange:p}=t;if(!d||d.length<2)return null;const h=e=>{const t=i.current;let r=0;const n=setInterval((()=>{if(t){t.scrollLeft+=e,r+=Math.abs(e),r>=121&&clearInterval(n);const{scrollLeft:i,scrollWidth:l,clientWidth:a}=t;switch(i+a){case a:o(!0);break;case l:s(!0);break;default:o(!1),s(!1)}}}),10)};return n.useEffect((()=>{h(0)}),[]),e.jsxs(c,{sx:{flexDirection:"column",position:"relative"},children:[e.jsx(c,{as:"ul","data-cy":"FilterList",ref:i,sx:{listStyle:"none",flexWrap:"nowrap",overflow:"hidden",paddingY:2,paddingX:4,gap:2,zIndex:1,top:"-80px",height:"auto"},children:d.map((({label:t,type:i},r)=>{const n=a.find((e=>e===i));return e.jsxs(L,{as:"li","data-cy":"MapListFilter"+(n?"-active":""),onClick:()=>p(i),extrastyles:{backgroundColor:"offWhite",padding:1,textAlign:"center",width:"130px",minWidth:"130px",height:"75px",flexDirection:"column",...n?{borderColor:"green",":hover":{borderColor:"green"}}:{borderColor:"offWhite",":hover":{borderColor:"offWhite"}}},children:[e.jsx(w,{size:30,profileType:i}),e.jsx("br",{}),e.jsx(_,{variant:"quiet",sx:{fontSize:1},children:t})]},r)}))}),d.length>3&&e.jsxs(c,{sx:{justifyContent:"space-between",zIndex:2,paddingX:2,position:"relative",top:"-62px",height:0},children:[e.jsx(x,{onClick:()=>h(-10),icon:"chevron-left",disabled:r,sx:{height:"28px",borderColor:"grey"}}),e.jsx(x,{"data-cy":"FilterList-ButtonRight",onClick:()=>h(10),icon:"chevron-right",disabled:l,sx:{height:"28px",borderColor:"grey"}})]})]})};try{g.displayName="FilterList",g.__docgenInfo={description:"",displayName:"FilterList",props:{activeFilters:{defaultValue:null,description:"",name:"activeFilters",required:!0,type:{name:"string[]"}},availableFilters:{defaultValue:null,description:"",name:"availableFilters",required:!0,type:{name:"FilterOption[]"}},onFilterChange:{defaultValue:null,description:"",name:"onFilterChange",required:!0,type:{name:"(label: string) => void"}}}}}catch{}export{g as F};