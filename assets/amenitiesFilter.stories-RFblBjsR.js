import{r as p,j as i,P as b}from"./iframe-Djky-ZDc.js";import{p as m}from"./index-BHqUQvf4.js";import"./preload-helper-b6bKU1NS.js";import"./date-BzoeRtiQ.js";import"./index-DBfXTDUO.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./index-DhNkc5of.js";import"./hooks-DnH1Ipqq.js";import"./postcode-regexes-2LyVrQre.js";import"./use-merged-ref-C_BSXtDp.js";import"./pt-PT-C41_Zgu8.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-BfmnFVfP.js";import"./index-DkC2O83z.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import"./image-BU4RpAzz.js";import"./useDictionary-CTkXH_sh.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";const L={title:"Elements/Filters/AmenitiesFilter",component:m,args:{},argTypes:{},parameters:{actions:{argTypesRegex:"^on.*"}}},u=()=>{const r=[{label:"Academia",numberOfItems:84},{label:"Café da manhã",numberOfItems:18},{label:"Carpete",numberOfItems:93},{label:"Cozinha",numberOfItems:132},{label:"Estacionamento",numberOfItems:9},{label:"Wi-fi gratuito",numberOfItems:5},{label:"Lavanderia",numberOfItems:24},{label:"Piscina",numberOfItems:24},{label:"Serviço de Quarto",numberOfItems:9},{label:"Restaurante",numberOfItems:24}],[s,n]=p.useState(r.map(a=>({...a,isChecked:!0,onChange:o=>{n(l=>l.map(t=>t.label===a.label?{...t,isChecked:o}:t))}})));return i.jsx(b,{children:i.jsx("div",{style:{maxWidth:"300px"},children:i.jsx(m,{label:"Principais comodidades",amenities:s})})})},e=u.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const initialAmenities = [{
    label: 'Academia',
    numberOfItems: 84
  }, {
    label: 'Café da manhã',
    numberOfItems: 18
  }, {
    label: 'Carpete',
    numberOfItems: 93
  }, {
    label: 'Cozinha',
    numberOfItems: 132
  }, {
    label: 'Estacionamento',
    numberOfItems: 9
  }, {
    label: 'Wi-fi gratuito',
    numberOfItems: 5
  }, {
    label: 'Lavanderia',
    numberOfItems: 24
  }, {
    label: 'Piscina',
    numberOfItems: 24
  }, {
    label: 'Serviço de Quarto',
    numberOfItems: 9
  }, {
    label: 'Restaurante',
    numberOfItems: 24
  }];
  const [amenities, setAmenities] = useState(initialAmenities.map(amenity => ({
    ...amenity,
    isChecked: true,
    onChange: (isChecked: boolean) => {
      setAmenities(prevAmenities => prevAmenities.map(prevAmenity => prevAmenity.label === amenity.label ? {
        ...prevAmenity,
        isChecked
      } : prevAmenity));
    }
  })));
  return <Providers>
      <div style={{
      maxWidth: '300px'
    }}>
        <AmenitiesFilter label="Principais comodidades" amenities={amenities} />
      </div>
    </Providers>;
}`,...e.parameters?.docs?.source}}};const Q=["Default"];export{e as Default,Q as __namedExportsOrder,L as default};
