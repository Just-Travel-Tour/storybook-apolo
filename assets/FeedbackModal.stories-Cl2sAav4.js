import{j as e,c as f,f1 as h,r as b,s as v,P as x}from"./iframe-Djky-ZDc.js";import{u as p,a as y}from"./hooks-DnH1Ipqq.js";import{M as w,c as C}from"./index-BHqUQvf4.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import{H as M}from"./index-DkC2O83z.js";import{S as k}from"./index-DhNkc5of.js";import{L as F}from"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./pt-PT-C41_Zgu8.js";import{T as N}from"./index-BfmnFVfP.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";import"./preload-helper-b6bKU1NS.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./useDictionary-CTkXH_sh.js";import"./image-BU4RpAzz.js";const l=({height:o=79,width:n=79,...s})=>e.jsxs("svg",{width:n,height:o,fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.5 69.125V69.125C23.1371 69.125 9.875 55.8629 9.875 39.5V39.5C9.875 23.1371 23.1371 9.875 39.5 9.875V9.875C55.8629 9.875 69.125 23.1371 69.125 39.5V39.5C69.125 55.8629 55.8629 69.125 39.5 69.125Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M39.5006 55.9583V39.5H36.209",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M38.6738 26.3332C38.2196 26.3332 37.8509 26.7018 37.8542 27.1561C37.8542 27.6103 38.2228 27.979 38.6771 27.979C39.1313 27.979 39.5 27.6103 39.5 27.1561C39.5 26.7018 39.1313 26.3332 38.6738 26.3332",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});try{l.displayName="InfoOutline",l.__docgenInfo={description:"",displayName:"InfoOutline",props:{}}}catch{}const E="_feedback_modal_1huur_1",V="_feedback_modal__icon_warning_1huur_10",O="_feedback_modal__icon_error_1huur_13",W="_feedback_modal__title_1huur_16",L="_feedback_modal__description_1huur_20",P="_feedback_modal__action_button_1huur_24",A="_feedback_modal__spinner_1huur_28",a={feedback_modal:E,feedback_modal__icon_warning:V,feedback_modal__icon_error:O,feedback_modal__title:W,feedback_modal__description:L,feedback_modal__action_button:P,feedback_modal__spinner:A},r=({className:o})=>{const n=p(),{title:s,description:_,variant:m,action:d,hideCloseButton:u}=y(c=>c.feedback),g=()=>{u||n(h())},j=()=>{d?.type==="reload"?window.location.reload():console.error("Action type not found"),n(h())};return e.jsxs(w,{noTitle:!0,contentClassName:f(a.feedback_modal,o),isOpen:!!m,onCloseModal:g,showCloseButton:!u,children:[e.jsx(l,{className:f(a[`feedback_modal__icon_${m}`])}),e.jsx(M,{className:a.feedback_modal__title,children:s}),e.jsx(k,{condition:!!_,children:e.jsx(F,{from:_.split(`
`),keyPrefix:"feedback_modal_description",render:c=>e.jsx(N,{className:a.feedback_modal__description,children:c})})}),e.jsx(k,{condition:!!d?.label,children:e.jsx(C,{className:a.feedback_modal__action_button,size:"small",onClick:j,children:d?.label})})]})};try{r.displayName="FeedbackModal",r.__docgenInfo={description:"",displayName:"FeedbackModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Elements/FeedbackModal",component:r},t=()=>{const o=p();return b.useEffect(()=>{o(v({variant:"warning",title:"Ops, houve um erro.",description:`Mas não se preocupe.
 Você pode atualizar a página e tentar novamente.`}))},[o]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(x,{children:e.jsx(r,{})})})})},i=()=>{const o=p();return b.useEffect(()=>{o(v({variant:"error",title:"Ops, houve um erro.",description:`Mas não se preocupe.
 Você pode atualizar a página e tentar novamente.`,action:{label:"Recarregar",type:"reload"}}))},[o]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(x,{children:e.jsx(r,{})})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFeedback({
      variant: 'warning',
      title: 'Ops, houve um erro.',
      description: 'Mas não se preocupe.\\n Você pode atualizar a página e tentar novamente.'
    }));
  }, [dispatch]);
  return <div style={{
    backgroundColor: '#f0f0f0',
    width: '100vw',
    height: '100vh'
  }}>
      <div style={{
      maxWidth: '1000px',
      margin: '12px auto'
    }}>
        <Providers>
          <FeedbackModal />
        </Providers>
      </div>
    </div>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFeedback({
      variant: 'error',
      title: 'Ops, houve um erro.',
      description: 'Mas não se preocupe.\\n Você pode atualizar a página e tentar novamente.',
      action: {
        label: 'Recarregar',
        type: 'reload'
      }
    }));
  }, [dispatch]);
  return <div style={{
    backgroundColor: '#f0f0f0',
    width: '100vw',
    height: '100vh'
  }}>
      <div style={{
      maxWidth: '1000px',
      margin: '12px auto'
    }}>
        <Providers>
          <FeedbackModal />
        </Providers>
      </div>
    </div>;
}`,...i.parameters?.docs?.source}}};const se=["Warning","ErrorFeedback"];export{i as ErrorFeedback,t as Warning,se as __namedExportsOrder,ie as default};
