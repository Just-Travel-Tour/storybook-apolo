import{j as e,c as N,dS as F,r as m,dR as b,P as y}from"./iframe-Djky-ZDc.js";import{u as c,a as W}from"./hooks-DnH1Ipqq.js";import{M as A,aG as T,c as D}from"./index-BHqUQvf4.js";import"./index-D2SwX3la.js";import{C as k,I as i,E as I}from"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import{H as x}from"./index-DkC2O83z.js";import{S as M}from"./index-DhNkc5of.js";import{L as V}from"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import{u as O}from"./useDictionary-CTkXH_sh.js";import{T as u}from"./index-BfmnFVfP.js";import{F as R}from"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";import{u as q}from"./useSeats-DhJt4uuo.js";import"./postcode-regexes-2LyVrQre.js";import"./pt-PT-C41_Zgu8.js";import{S as H}from"./index-D12PEWH5.js";import"./preload-helper-b6bKU1NS.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./image-BU4RpAzz.js";import"./use-merged-ref-C_BSXtDp.js";const g=({height:a=79,width:f=79,...d})=>e.jsxs("svg",{width:f,height:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",...d,children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.5 69.125V69.125C23.1371 69.125 9.875 55.8629 9.875 39.5V39.5C9.875 23.1371 23.1371 9.875 39.5 9.875V9.875C55.8629 9.875 69.125 23.1371 69.125 39.5V39.5C69.125 55.8629 55.8629 69.125 39.5 69.125Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M39.5006 55.9583V39.5H36.209",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M38.6738 26.3332C38.2196 26.3332 37.8509 26.7018 37.8542 27.1561C37.8542 27.6103 38.2228 27.979 38.6771 27.979C39.1313 27.979 39.5 27.6103 39.5 27.1561C39.5 26.7018 39.1313 26.3332 38.6738 26.3332",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});try{g.displayName="InfoOutline",g.__docgenInfo={description:"",displayName:"InfoOutline",props:{}}}catch{}const z="_ticket_ab92y_1",$={ticket:z},v=({ticketName:a})=>e.jsxs("div",{className:$.ticket,children:[e.jsx(R,{width:36,height:36}),e.jsx(u,{weight:"semibold",size:"sm",children:a})]});try{v.displayName="LoadingTicket",v.__docgenInfo={description:"",displayName:"LoadingTicket",props:{ticketName:{defaultValue:null,description:"",name:"ticketName",required:!0,type:{name:"string"}}}}}catch{}const G="_broadway_feedback_1xjjl_1",J="_broadway_feedback__icon_warning_1xjjl_10",Z="_broadway_feedback__icon_error_1xjjl_13",K="_broadway_feedback__title_1xjjl_16",Q="_broadway_feedback__description_1xjjl_20",U="_broadway_feedback__action_button_1xjjl_24",X="_broadway_feedback__spinner_1xjjl_28",r={broadway_feedback:G,broadway_feedback__icon_warning:J,broadway_feedback__icon_error:Z,broadway_feedback__title:K,broadway_feedback__description:Q,broadway_feedback__action_button:U,broadway_feedback__spinner:X},s=({className:a,product:f})=>{const d=c(),o=O(),{fetchSeats:S}=q(f,o),{variant:t,action:j,hideCloseButton:C,ticketName:P,seatsData:B}=W(n=>n.broadwayFeedback),E=()=>{C||d(F())},L=async n=>{switch(n.type){case"search_new_seats":await S(!0);break;case"custom":n.action?.();break;default:console.error("Action type not found")}d(F())};return e.jsxs(A,{noTitle:!0,contentClassName:N(r.broadway_feedback,a),isOpen:!!t,onCloseModal:E,showCloseButton:!C,children:[e.jsxs(k,{children:[e.jsx(i,{condition:t==="loading",children:e.jsx(T,{className:r.broadway_feedback__spinner,variant:"classic"})}),e.jsx(I,{children:e.jsx(g,{className:N(r[`broadway_feedback__icon_${t}`])})})]}),e.jsxs(k,{children:[e.jsxs(i,{condition:t==="loading",children:[e.jsx(x,{className:r.broadway_feedback__title,children:o.tickets.broadway.loadingSeats}),e.jsx(u,{className:r.broadway_feedback__description,children:o.tickets.broadway.loadingSeatsDescription})]}),e.jsxs(i,{condition:t==="warning",children:[e.jsx(x,{className:r.broadway_feedback__title,children:o.tickets.broadway.seatsTimeout}),e.jsx(u,{className:r.broadway_feedback__description,children:o.tickets.broadway.timeoutDescription})]}),e.jsxs(i,{condition:t==="error",children:[e.jsx(x,{className:r.broadway_feedback__title,children:o.tickets.broadway.seatsError}),e.jsx(u,{className:r.broadway_feedback__description,children:o.tickets.broadway.seatsErrorDescription})]})]}),e.jsxs(k,{children:[e.jsx(i,{condition:t==="loading",children:e.jsx(v,{ticketName:P})}),e.jsx(i,{condition:t==="error",children:e.jsx(H,{seats:B?.seats,sector:B?.sector})})]}),e.jsx(M,{condition:!!j?.length,children:e.jsx(V,{from:j,render:n=>e.jsx(D,{className:r.broadway_feedback__action_button,size:"small",onClick:()=>L(n),children:n?.label})})})]})};try{s.displayName="BroadwayFeedback",s.__docgenInfo={description:"",displayName:"BroadwayFeedback",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const Ce={title:"Feedbacks/BroadwayFeedbackModal",component:s},w={cartId:"1",dateFrom:"2025-05-21",dateTo:"2025-05-22",type:"ticket",productJson:{wlActions:["fetch_broadway_seats"]},available:!0,bookingConditions:[],pricesAndMargins:[]},l=()=>{const a=c();return m.useEffect(()=>{a(b({variant:"warning"}))},[a]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(y,{children:e.jsx(s,{product:w})})})})},p=()=>{const a=c();return m.useEffect(()=>{a(b({variant:"warning",action:[{label:"Buscar Novos assentos",type:"search_new_seats"}]}))},[a]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(y,{children:e.jsx(s,{product:w})})})})},_=()=>{const a=c();return m.useEffect(()=>{a(b({variant:"warning",action:[{label:"Buscar Novos assentos",type:"search_new_seats"},{label:"Manter Assentos anteriores",type:"search_new_seats",intent:"outlined"}]}))},[a]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(y,{children:e.jsx(s,{product:w})})})})},h=()=>{const a=c();return m.useEffect(()=>{a(b({variant:"loading"}))},[a]),e.jsx("div",{style:{backgroundColor:"#f0f0f0",width:"100vw",height:"100vh"},children:e.jsx("div",{style:{maxWidth:"1000px",margin:"12px auto"},children:e.jsx(y,{children:e.jsx(s,{product:w})})})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBroadwayFeedback({
      variant: 'warning'
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
          <BroadwayFeedback product={mockProduct} />
        </Providers>
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBroadwayFeedback({
      variant: 'warning',
      action: [{
        label: 'Buscar Novos assentos',
        type: 'search_new_seats'
      }]
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
          <BroadwayFeedback product={mockProduct} />
        </Providers>
      </div>
    </div>;
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBroadwayFeedback({
      variant: 'warning',
      action: [{
        label: 'Buscar Novos assentos',
        type: 'search_new_seats'
      }, {
        label: 'Manter Assentos anteriores',
        type: 'search_new_seats',
        intent: 'outlined'
      }]
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
          <BroadwayFeedback product={mockProduct} />
        </Providers>
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBroadwayFeedback({
      variant: 'loading'
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
          <BroadwayFeedback product={mockProduct} />
        </Providers>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}};const Be=["Warning","BroadwayTimeOut","BroadwaySearchSeats","BroadwaySearchLoading"];export{h as BroadwaySearchLoading,_ as BroadwaySearchSeats,p as BroadwayTimeOut,l as Warning,Be as __namedExportsOrder,Ce as default};
