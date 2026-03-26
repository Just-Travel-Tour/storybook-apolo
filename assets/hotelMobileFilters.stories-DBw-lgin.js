import{j as o,P as s}from"./iframe-Djky-ZDc.js";import{u as l}from"./useHotelFilters-DRa5BLZZ.js";import{w as m}from"./index-BU59Tt0H.js";import{S as i}from"./index-BHqUQvf4.js";import"./preload-helper-b6bKU1NS.js";import"./useDictionary-CTkXH_sh.js";import"./pt-PT-C41_Zgu8.js";import"./hooks-DnH1Ipqq.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./useFilterState-WqWdczkM.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./index-DhNkc5of.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-BfmnFVfP.js";import"./index-DkC2O83z.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./image-BU4RpAzz.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";const R={title:"Elements/Filters/HotelMobileFilters",component:i,args:{},argTypes:{},parameters:{actions:{argTypesRegex:"^on.*"},viewport:{defaultViewport:"mobile1"},nextjs:{navigation:{query:{type:"Hotel",destinationId:1010106,city:"Orlando",checkin:"2024-06-12",checkout:"2024-06-12",peopleAmount:'[{"id":1,"adults":2,"children":0,"childrenAge":[]}]'}}}},play:async({canvasElement:e})=>{m(e).getByTestId("hotel_mobile_filters_button").click()}},n=e=>{const r=l({setFilteredItems:()=>null,setFilteredItemsByName:()=>null,items:[],itemsByName:[]});return o.jsx(s,{children:o.jsx(i,{...e,filters:r})})},t=n.bind({});t.args={loading:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const filters = useHotelFilters({
    setFilteredItems: () => null,
    setFilteredItemsByName: () => null,
    items: [],
    itemsByName: []
  });
  return <Providers>
      <HotelMobileFilters {...args} filters={filters} />
    </Providers>;
}`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,R as default};
