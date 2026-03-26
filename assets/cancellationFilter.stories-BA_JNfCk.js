import{r as o,j as t,P as C}from"./iframe-Djky-ZDc.js";import{q as l}from"./index-BHqUQvf4.js";import"./preload-helper-b6bKU1NS.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./index-DhNkc5of.js";import"./hooks-DnH1Ipqq.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./pt-PT-C41_Zgu8.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-BfmnFVfP.js";import"./index-DkC2O83z.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./image-BU4RpAzz.js";import"./useDictionary-CTkXH_sh.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";const w={title:"Elements/Filters/CancellationFilter",component:l,args:{},argTypes:{},parameters:{actions:{argTypesRegex:"^on.*"}}},d=()=>{const[a,s]=o.useState(!0),[i,c]=o.useState(!0),n={isChecked:a,numberOfItems:10},r={isChecked:i,numberOfItems:5};return t.jsx(C,{children:t.jsx("div",{style:{maxWidth:"300px"},children:t.jsx(l,{label:"Cancelamento",freeCancellation:{value:n.isChecked,numberOfItems:n.numberOfItems},paidCancellation:{value:r.isChecked,numberOfItems:r.numberOfItems},onValueChange:m=>{m==="free"?s(!a):c(!i)}})})})},e=d.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [isFreeCancellationChecked, setIsFreeCancellationChecked] = useState<boolean>(true);
  const [isPaidCancellationChecked, setIsPaidCancellationChecked] = useState<boolean>(true);
  const freeCancellation = {
    isChecked: isFreeCancellationChecked,
    numberOfItems: 10
  };
  const paidCancellation = {
    isChecked: isPaidCancellationChecked,
    numberOfItems: 5
  };
  return <Providers>
      <div style={{
      maxWidth: '300px'
    }}>
        <CancellationFilter label="Cancelamento" freeCancellation={{
        value: freeCancellation.isChecked,
        numberOfItems: freeCancellation.numberOfItems
      }} paidCancellation={{
        value: paidCancellation.isChecked,
        numberOfItems: paidCancellation.numberOfItems
      }} onValueChange={value => {
        if (value === 'free') {
          setIsFreeCancellationChecked(!isFreeCancellationChecked);
        } else {
          setIsPaidCancellationChecked(!isPaidCancellationChecked);
        }
      }} />
      </div>
    </Providers>;
}`,...e.parameters?.docs?.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,w as default};
