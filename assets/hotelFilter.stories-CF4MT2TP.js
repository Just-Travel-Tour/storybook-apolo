import{j as e}from"./iframe-Djky-ZDc.js";import{u as s}from"./useHotelFilters-DRa5BLZZ.js";import{K as r}from"./index-BHqUQvf4.js";import"./preload-helper-b6bKU1NS.js";import"./useDictionary-CTkXH_sh.js";import"./pt-PT-C41_Zgu8.js";import"./hooks-DnH1Ipqq.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./useFilterState-WqWdczkM.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./index-DhNkc5of.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-BfmnFVfP.js";import"./index-DkC2O83z.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./image-BU4RpAzz.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";const R={title:"Elements/Filters/HotelFilters",component:r,args:{},argTypes:{},parameters:{actions:{argTypesRegex:"^on.*"},nextjs:{navigation:{query:{type:"Hotel",destinationId:1010106,city:"Orlando",checkin:"2024-06-12",checkout:"2024-06-12",peopleAmount:'[{"id":1,"adults":2,"children":0,"childrenAge":[]}]'}}}}},m=i=>{const o=s({setFilteredItems:()=>null,setFilteredItemsByName:()=>null,itemsByName:[],items:[]});return e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{...i,filters:o})})},t=m.bind({});t.args={loading:!1,onClose:void 0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const filters = useHotelFilters({
    setFilteredItems: () => null,
    setFilteredItemsByName: () => null,
    itemsByName: [],
    items: []
  });
  return <div style={{
    maxWidth: '300px'
  }}>
      <HotelFilters {...args} filters={filters} />
    </div>;
}`,...t.parameters?.docs?.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,R as default};
