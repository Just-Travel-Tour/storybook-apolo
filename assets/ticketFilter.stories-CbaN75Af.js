import{j as r,P as s}from"./iframe-Djky-ZDc.js";import{u as m}from"./useTicketFilters-Dd23KJF6.js";import{V as e}from"./index-BHqUQvf4.js";import"./preload-helper-b6bKU1NS.js";import"./useFilterState-WqWdczkM.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./index-DhNkc5of.js";import"./hooks-DnH1Ipqq.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./pt-PT-C41_Zgu8.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-BfmnFVfP.js";import"./index-DkC2O83z.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./image-BU4RpAzz.js";import"./useDictionary-CTkXH_sh.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";const I={title:"Elements/Filters/TicketFilters",component:e,args:{},argTypes:{},parameters:{actions:{argTypesRegex:"^on.*"},nextjs:{navigation:{query:{type:"Ticket",destinationId:3,city:"Orlando",checkin:"2024-06-10",checkout:"2024-06-14",peopleAmount:'[{"id":1,"adults":2,"children":0,"childrenAge":[]}]'}}}}},p=i=>{const o=m({items:[]});return r.jsx(s,{children:r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(e,{...i,filters:o})})})},t=p.bind({});t.args={loading:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const filters = useTicketFilters({
    items: []
  });
  return <Providers>
      <div style={{
      maxWidth: '300px'
    }}>
        <TicketFilters {...args} filters={filters} />
      </div>
   </Providers>;
}`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,I as default};
