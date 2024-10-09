import{j as a}from"./jsx-runtime-CexXSJP5.js";import{f as v,V as _,S as N}from"./supporter-D7hp958O.js";import{r as f}from"./index-BP8_t0zE.js";import{n as C}from"./emotion-styled.browser.esm-mtFmFg5E.js";import{a as F,F as l,T as b,I as y}from"./theme-ui-components.esm-D5Q63Fx1.js";import{I as A}from"./InternalLink-kE4CsJJO.js";function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function E(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],!(r.indexOf(t)>=0)&&(a[t]=e[t]);return a}var B=["cdnSuffix","cdnUrl","countryCode","style","svg"],G="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",L="svg",R=127397,x=function(e){var r=e.cdnSuffix,t=void 0===r?L:r,n=e.cdnUrl,a=void 0===n?G:n,i=e.countryCode,s=e.style,o=e.svg,l=void 0!==o&&o,d=E(e,B);if("string"!=typeof i)return null;if(l){var p=""+a+i.toLowerCase()+"."+t;return f.createElement("img",Object.assign({},d,{src:p,style:c({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var u=i.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+R)}));return f.createElement("span",Object.assign({role:"img"},d,{style:c({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),u)};const u=C(x)`
  border-radius: 5px;
  background-size: cover !important;
  height: 23px;
  width: 35px !important;
`,p=C(x)`
  border-radius: 3px;
  background-size: cover !important;
  height: 14px;
  width: 21px !important;
`,h=e=>a.jsx(F,{...e,children:a.jsx(u,{countryCode:e.code,title:e.code,svg:!0,children:e.children})});try{u.displayName="FlagIconEvents",u.__docgenInfo={description:"",displayName:"FlagIconEvents",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}}}catch{}try{p.displayName="FlagIconHowTos",p.__docgenInfo={description:"",displayName:"FlagIconHowTos",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}}}catch{}try{h.displayName="FlagIcon",h.__docgenInfo={description:"",displayName:"FlagIcon",props:{}}}catch{}const j=new Set(["AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"]),O=e=>e&&j.has(e.toUpperCase()),S=({user:e,sx:r,isLink:t=!0})=>{const{countryCode:n,userName:i,isSupporter:s,isVerified:o}=e,d=a.jsxs(l,{"data-cy":"Username",sx:{fontFamily:"body",alignItems:"center"},children:[a.jsx(l,{mr:1,children:n&&O(n)?a.jsx(l,{"data-testid":"Username: known flag",children:a.jsx(p,{countryCode:n,svg:!0,title:n,"data-cy":`country:${n}`})}):a.jsx(l,{"data-testid":"Username: unknown flag",sx:{backgroundImage:`url("${v}")`,backgroundSize:"cover",borderRadius:"3px",height:"14px",width:"21px !important",justifyContent:"center",alignItems:"center",lineHeight:0,overflow:"hidden"}})}),a.jsx(b,{sx:{color:"black"},children:i}),o&&a.jsx(y,{src:_,sx:{ml:1,height:16,width:16},"data-testid":"Username: verified badge"}),s&&!o&&a.jsx(y,{src:N,sx:{ml:1,height:16,width:16},"data-testid":"Username: supporter badge"})]});return t?a.jsx(A,{to:`/u/${i}`,sx:{border:"1px solid transparent",display:"inline-flex",paddingX:1,paddingY:"3px",borderRadius:1,marginLeft:-1,color:"black",fontSize:2,transition:"80ms ease-out all","&:focus":{borderColor:"#20B7EB",background:"softblue",outline:"none",color:"bluetag"},"&:hover":{borderColor:"#20B7EB",background:"softblue",textcolor:"bluetag"},...r||{}},children:d}):d};try{S.displayName="Username",S.__docgenInfo={description:"",displayName:"Username",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}},isLink:{defaultValue:{value:"true"},description:"",name:"isLink",required:!1,type:{name:"boolean"}}}}}catch{}export{S as U};