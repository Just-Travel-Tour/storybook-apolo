import{j as e,bg as m}from"./iframe-Djky-ZDc.js";import{n as r,a8 as a,a9 as c,aa as y,X as d}from"./index-BHqUQvf4.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-DkC2O83z.js";import"./index-DhNkc5of.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./pt-PT-C41_Zgu8.js";import"./index-BfmnFVfP.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";import{f as t}from"./index-DBfXTDUO.js";import"./preload-helper-b6bKU1NS.js";import"./date-BzoeRtiQ.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./hooks-DnH1Ipqq.js";import"./useDictionary-CTkXH_sh.js";import"./image-BU4RpAzz.js";const u=[{date:t(new Date,"yyyy-MM-dd"),price:1628.99,isAvailable:!1,installmentPrice:1628.99},{date:t(r(new Date,1),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99},{date:t(r(new Date,2),"yyyy-MM-dd"),price:1578.9,isAvailable:!0,installmentPrice:1578.9},{date:t(r(new Date,3),"yyyy-MM-dd"),price:1987.09,isAvailable:!0,installmentPrice:1987.09},{date:t(r(new Date,4),"yyyy-MM-dd"),price:1898,isAvailable:!0,installmentPrice:1898},{date:t(r(new Date,5),"yyyy-MM-dd"),price:1234.09,isAvailable:!0,installmentPrice:1234.09},{date:t(r(new Date,6),"yyyy-MM-dd"),price:1098.97,isAvailable:!0,installmentPrice:1098.97},{date:t(r(new Date,7),"yyyy-MM-dd"),price:1234.06,isAvailable:!0,installmentPrice:1234.06},{date:t(r(new Date,8),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99},{date:t(r(new Date,9),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99},{date:t(r(new Date,10),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99},{date:t(r(new Date,11),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99},{date:t(r(new Date,12),"yyyy-MM-dd"),price:1854.99,isAvailable:!0,installmentPrice:1854.99}],J={title:"Elements/InputStylish",args:{lang:"pt"},argTypes:{}},s={render:({lang:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(a.DateRange,{lang:n})})},i={render:n=>e.jsx(a.Toggle,{...n}),args:{label:"Just Travel Tour"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},children:[e.jsx(a.PeoplesAmount,{}),e.jsx("br",{}),e.jsx(a.PeoplesAmount,{variant:c.PeopleByRoom}),e.jsx("br",{}),e.jsx(a.PeoplesAmount,{size:y.Small,variant:c.People}),e.jsx("br",{}),e.jsx(a.PeoplesAmount,{size:y.Small,variant:c.PeopleByRoom})]})},l=()=>{const{register:n}=d();return e.jsxs(e.Fragment,{children:[e.jsx(a.Text,{register:n,name:"test",placeholder:"Storybook"}),e.jsx("br",{}),e.jsx(a.Text,{register:n,name:"test",placeholder:"Storybook",label:"Storybook"}),e.jsx("br",{}),e.jsx(a.Text,{register:n,name:"test",placeholder:"Storybook",leftIcon:e.jsx(m,{})}),e.jsx("br",{}),e.jsx(a.Text,{register:n,name:"test",placeholder:"Storybook",rightIcon:e.jsx(m,{})})]})},p={render:()=>e.jsx(a.AvailablesDates,{dateAndPrices:u})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    lang
  }) => <div style={{
    display: 'flex',
    justifyContent: 'center'
  }}>
      <InputStylish.DateRange lang={lang} />
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <InputStylish.Toggle {...args} />,
  args: {
    label: 'Just Travel Tour'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
        <InputStylish.PeoplesAmount />

        <br />

        <InputStylish.PeoplesAmount variant={PeopleVariant.PeopleByRoom} />

        <br />

        <InputStylish.PeoplesAmount size={Sizes.Small} variant={PeopleVariant.People} />

        <br />

        <InputStylish.PeoplesAmount size={Sizes.Small} variant={PeopleVariant.PeopleByRoom} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    register
  } = useForm();
  return <>
      <InputStylish.Text register={register} name="test" placeholder="Storybook" />

      <br />

      <InputStylish.Text register={register} name="test" placeholder="Storybook" label="Storybook" />

      <br />

      <InputStylish.Text register={register} name="test" placeholder="Storybook" leftIcon={<SearchMagnifyingGlass />} />

      <br />

      <InputStylish.Text register={register} name="test" placeholder="Storybook" rightIcon={<SearchMagnifyingGlass />} />
    </>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputStylish.AvailablesDates dateAndPrices={datePrice} />
}`,...p.parameters?.docs?.source}}};const _=["DateRange","Toggle","PeoplesAmount","Input","AvailablesDates"];export{p as AvailablesDates,s as DateRange,l as Input,o as PeoplesAmount,i as Toggle,_ as __namedExportsOrder,J as default};
