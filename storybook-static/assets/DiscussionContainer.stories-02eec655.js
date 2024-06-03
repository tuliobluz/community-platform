import{a as n}from"./jsx-runtime-913be41c.js";import{r as u}from"./index-2506bfc3.js";import{c as l}from"./utils-f4443561.js";import{D as e}from"./DiscussionContainer-91b8e8ca.js";import"./index-a7768622.js";import"./CommentList-836a4886.js";import"./Button-c1e2a791.js";import"./Icon-5a6c8159.js";import"./theme-ui-core-jsx-runtime.esm-9bc3c749.js";import"./emotion-element-6a883da9.browser.esm-becb4ad2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import"./hoist-non-react-statics.cjs-dd442a32.js";import"./theme-ui-css.esm-a1197288.js";import"./emotion-styled.browser.esm-935c8bd8.js";import"./supporter-29075ee8.js";import"./icon-arrow-down-33f070d5.js";import"./icon-star-active-309631d9.js";import"./theme-ui-components.esm-29c4d01e.js";import"./emotion-react.browser.esm-ac7fc07b.js";import"./ButtonShowReplies-35f37b48.js";import"./CommentItem-01e8a9ca.js";import"./ConfirmModal-0560c552.js";import"./Modal-7d6bff05.js";import"./index-0dfb046a.js";import"./index-4d501b15.js";import"./EditComment-2a6d43bd.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index.esm-f81faee8.js";import"./FieldTextarea-c63346af.js";import"./CharacterCount-07f29cce.js";import"./LinkifyText-46fe28a8.js";import"./ExternalLink-40fccc3c.js";import"./InternalLink-4cbd19ca.js";import"./index-54304c9c.js";import"./index-150eb7c2.js";import"./Username-a28a2833.js";import"./CreateReply-e3b3b21f.js";import"./CreateComment-d1d7be21.js";import"./MemberBadge-deeef9dd.js";import"./DiscussionTitle-3a1447df.js";const ve={title:"Components/DiscussionContainer",component:e},I=l(3),w=l(15),r={render:()=>n(e,{comment:"",comments:I,handleDelete:()=>Promise.resolve(),handleEditRequest:()=>Promise.resolve(),handleEdit:()=>Promise.resolve(),maxLength:1e3,onChange:()=>null,onMoreComments:()=>null,onSubmit:()=>null,onSubmitReply:()=>Promise.resolve(),isLoggedIn:!1,showAvatar:!0})},m={render:()=>n(e,{comments:[],handleDelete:()=>Promise.resolve(),handleEditRequest:()=>Promise.resolve(),handleEdit:()=>Promise.resolve(),maxLength:1e3,comment:"",onChange:()=>null,onMoreComments:()=>null,onSubmit:()=>null,onSubmitReply:()=>Promise.resolve(),isLoggedIn:!1,showAvatar:!0})},s={render:()=>{const[o,t]=u.useState("");return n(e,{comments:I,handleDelete:()=>Promise.resolve(),handleEditRequest:()=>Promise.resolve(),handleEdit:()=>Promise.resolve(),maxLength:1e3,comment:o,onChange:t,onMoreComments:()=>null,onSubmit:()=>null,onSubmitReply:()=>Promise.resolve(),isLoggedIn:!0,showAvatar:!0})}},i={render:()=>{const[o,t]=u.useState("");return n(e,{comments:w,handleDelete:()=>Promise.resolve(),handleEditRequest:()=>Promise.resolve(),handleEdit:()=>Promise.resolve(),maxLength:1e3,comment:o,onChange:t,onMoreComments:()=>null,onSubmit:()=>null,onSubmitReply:()=>Promise.resolve(),isLoggedIn:!0,showAvatar:!0})}},a={render:()=>{const[o,t]=u.useState(""),d=l(3);return d[0].replies=l(2),n(e,{supportReplies:!0,comments:d,handleDelete:()=>Promise.resolve(),handleEditRequest:()=>Promise.resolve(),handleEdit:()=>Promise.resolve(),maxLength:1e3,comment:o,onChange:t,onMoreComments:()=>null,onSubmit:()=>null,isLoggedIn:!0,onSubmitReply:async(y,k)=>alert(`reply to commentId: ${y} with comment: ${k}`),showAvatar:!0})}};var c,p,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <DiscussionContainer comment={''} comments={fakeComments} handleDelete={() => Promise.resolve()} handleEditRequest={() => Promise.resolve()} handleEdit={() => Promise.resolve()} maxLength={1000} onChange={() => null} onMoreComments={() => null} onSubmit={() => null} onSubmitReply={() => Promise.resolve()} isLoggedIn={false} showAvatar />;
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,C,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <DiscussionContainer comments={[]} handleDelete={() => Promise.resolve()} handleEditRequest={() => Promise.resolve()} handleEdit={() => Promise.resolve()} maxLength={1000} comment={''} onChange={() => null} onMoreComments={() => null} onSubmit={() => null} onSubmitReply={() => Promise.resolve()} isLoggedIn={false} showAvatar />;
  }
}`,...(v=(C=m.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,S,b;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = useState<string>('');
    return <DiscussionContainer comments={fakeComments} handleDelete={() => Promise.resolve()} handleEditRequest={() => Promise.resolve()} handleEdit={() => Promise.resolve()} maxLength={1000} comment={comment} onChange={setComment} onMoreComments={() => null} onSubmit={() => null} onSubmitReply={() => Promise.resolve()} isLoggedIn={true} showAvatar />;
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var E,R,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = useState<string>('');
    return <DiscussionContainer comments={expandableFakeComments} handleDelete={() => Promise.resolve()} handleEditRequest={() => Promise.resolve()} handleEdit={() => Promise.resolve()} maxLength={1000} comment={comment} onChange={setComment} onMoreComments={() => null} onSubmit={() => null} onSubmitReply={() => Promise.resolve()} isLoggedIn={true} showAvatar />;
  }
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var D,f,x;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = useState<string>('');
    const fakeComments = createFakeComments(3);
    fakeComments[0].replies = createFakeComments(2);
    return <DiscussionContainer supportReplies={true} comments={fakeComments} handleDelete={() => Promise.resolve()} handleEditRequest={() => Promise.resolve()} handleEdit={() => Promise.resolve()} maxLength={1000} comment={comment} onChange={setComment} onMoreComments={() => null} onSubmit={() => null} isLoggedIn={true} onSubmitReply={async (commentId, comment) => alert(\`reply to commentId: \${commentId} with comment: \${comment}\`)} showAvatar />;
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Pe=["Default","NoComments","LoggedIn","Expandable","WithReplies"];export{r as Default,i as Expandable,s as LoggedIn,m as NoComments,a as WithReplies,Pe as __namedExportsOrder,ve as default};
//# sourceMappingURL=DiscussionContainer.stories-02eec655.js.map
