import{j as t,r as P,fj as w}from"./iframe-Djky-ZDc.js";import{u as p,W as C,O as D}from"./index-xoRUxwHF.js";import{i as f,S as c}from"./index-DhNkc5of.js";import{u as j,j as N}from"./index-BHqUQvf4.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-DkC2O83z.js";import{L as b}from"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./pt-PT-C41_Zgu8.js";import{T as r}from"./index-BfmnFVfP.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";import"./postcode-regexes-2LyVrQre.js";import"./preload-helper-b6bKU1NS.js";import"./useDictionary-CTkXH_sh.js";import"./tickets-GXYTR5xm.js";import"./hotels-Ct6YnHP1.js";import"./hooks-DnH1Ipqq.js";import"./index-COpXqY5g.js";import"./checkout-BEILHobv.js";import"./index-CgrzRoEx.js";import"./image-BU4RpAzz.js";import"./use-merged-ref-C_BSXtDp.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-ka1ycd8J.js";import"./mdc-tranfers-ticket-ju5_YhhO.js";import"./index-DB9GX1h1.js";import"./useSeats-DhJt4uuo.js";import"./index-DKCyA0J7.js";import"./lodash-n4UqieYn.js";import"./useCheckout-Cw6lWXiP.js";import"./index-eKznQyA-.js";import"./useActivityData-BRvhFZun.js";import"./extractors-DuguPHvt.js";import"./index-Chz836DE.js";import"./getFormatedProductPrice-BgzcXm6z.js";import"./getBestInstallment-DWIkj07i.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";const S="_comparator_1nepo_1",T="_comparator__title_1nepo_6",O="_comparator__values_1nepo_11",k="_discount_badge_1nepo_23",o={comparator:S,comparator__title:T,comparator__values:O,discount_badge:k},y=({option:s,isFirst:e=!1})=>{const{dictionary:n}=p(),i=j(),a=e?"bold":"regular";return t.jsxs("div",{className:o.comparator__values,children:[t.jsx(r,{as:"span",size:"xs",weight:a,children:f(n.checkout.paymentInsights.installmentOptions,{installments:String(s.installments),price:i(s.installmentValue)})}),t.jsxs(r,{as:"span",size:"xxs",className:o.discount_badge,weight:a,children:[s.discount,"% OFF"]}),t.jsx(r,{as:"span",size:"xs",weight:a,children:i(s.totalPrice)})]})};try{y.displayName="InstallmentOption",y.__docgenInfo={description:"",displayName:"InstallmentOption",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"Installment"}},isFirst:{defaultValue:{value:"false"},description:"",name:"isFirst",required:!1,type:{name:"boolean"}}}}}catch{}const u=()=>{const{getInstallmentComparison:s,dictionary:e}=p(),n=P.useMemo(()=>s(),[s]),[i]=N();return!n||n.length===0?t.jsx("div",{className:o.comparator,"data-testid":"comparator-empty",children:t.jsx(r,{size:"sm","data-testid":"no-installment-message",children:e.checkout.paymentInsights.noInstallmentOptions})}):t.jsxs("article",{className:o.comparator,role:"region","aria-labelledby":"installment-comparison","data-testid":"comparator",children:[t.jsxs("header",{className:o.comparator__title,"data-testid":"comparator-header",children:[t.jsx(w,{"aria-hidden":"true"}),t.jsx(r,{as:"span",size:i>576?"sm":"xs",id:"installment-comparison","data-testid":"comparator-title",children:e.checkout.paymentInsights.creditPayment})]}),t.jsx("section",{"data-testid":"installment-options-section",children:t.jsx(b,{from:n,render:(a,m)=>t.jsx(y,{option:a,isFirst:m===0},`installment-${a.installments}-${m}`)})})]})};try{u.displayName="InstallmentComparison",u.__docgenInfo={description:`InstallmentComparison component displays installment payment options with discounts
for credit card payments in the order details section.`,displayName:"InstallmentComparison",props:{}}}catch{}const z="_offer_1ykv7_1",F="_label_container_1ykv7_10",X="_value_1ykv7_45",V="_comparison_1ykv7_49",d={offer:z,label_container:F,value:X,comparison:V},W=()=>{const{loading:s,cartValues:{percentDiscount:e,discount:n},dictionary:i,paymentType:a,bestInstallment:m}=p(),I=j(),v=a==="credit_card"?"sm":"xs";return t.jsxs(c,{condition:s||!!e&&!!n,children:[t.jsxs("div",{className:d.offer,children:[t.jsx("div",{className:d.label_container,children:t.jsxs(r,{size:v,as:"span",children:[i.checkout.saving," "]})}),t.jsx(r,{loading:!n||s,className:d.value,children:t.jsxs("strong",{children:["- ",I(n)]})})]}),t.jsx(c,{condition:a!=="credit_card",children:t.jsx(r,{size:"xxs",as:"span",className:d.comparison,children:`(${f(i.checkout.comparison,{installments:String(m?.installment)})})`})})]})},$="_payment_insights__header_150dt_1",E="_payment_insights__title_150dt_10",x={payment_insights__header:$,payment_insights__title:E},g=()=>{const{paymentType:s,dictionary:e}=p();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:x.payment_insights__header,children:t.jsx(r,{size:"sm",as:"span",weight:"bold",className:x.payment_insights__title,children:e.checkout.paymentInsights.type.specialDiscount})}),t.jsx(c,{condition:s!=="credit_card",children:t.jsx(W,{})})]})};try{g.displayName="SpecialDiscount",g.__docgenInfo={description:`SpecialDiscount

Displays special discount information for PIX or billet payments within the order details.
This component promotes cash payment methods by showing the discount percentage and savings amount.`,displayName:"SpecialDiscount",props:{}}}catch{}const q=()=>{const{paymentType:s,loading:e}=p();return t.jsxs(C,{children:[t.jsx(c,{condition:s!=="credit_card",children:t.jsx(g,{})}),t.jsx(c,{condition:s==="credit_card",children:t.jsx(u,{})})]})},H=s=>t.jsx(D,{loading:!1,children:t.jsx("div",{style:{maxWidth:"700px",margin:"0 auto"},children:t.jsx(q,{...s})})}),kt={title:"Components/OrderDetails/PaymentInsights/PaymentInsights",component:H,parameters:{layout:"centered",docs:{description:{component:"Component that displays payment insights with discount information for cash/PIX payments"}}},tags:["autodocs"]},l={args:{paymentType:"pix"},parameters:{docs:{description:{story:"Default payment insights showing discount for cash/PIX payment"}}}},_={args:{paymentType:"credit_card"},parameters:{docs:{description:{story:"Payment insights for credit card payment showing comparator with PIX discount"}}}},h={args:{paymentType:"pix"},decorators:[s=>t.jsx(s,{})],parameters:{docs:{description:{story:"Payment insights with discount percentage"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    paymentType: 'pix'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default payment insights showing discount for cash/PIX payment'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    paymentType: 'credit_card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Payment insights for credit card payment showing comparator with PIX discount'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    paymentType: 'pix'
  },
  decorators: [Story => {
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Payment insights with discount percentage'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const zt=["Default","CreditCardPayment","HighDiscount"];export{_ as CreditCardPayment,l as Default,h as HighDiscount,zt as __namedExportsOrder,kt as default};
