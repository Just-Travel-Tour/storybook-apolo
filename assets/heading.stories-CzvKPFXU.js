import{j as e}from"./iframe-Djky-ZDc.js";import{L as d}from"./postcode-regexes-2LyVrQre.js";import{aC as h}from"./index-BHqUQvf4.js";import"./index-D2SwX3la.js";import"./index-lt11qAWP.js";import"./index-DZZPN7kB.js";import"./index-DkC2O83z.js";import{S as k}from"./index-DhNkc5of.js";import"./index-BzkExmyF.js";import"./index-BiPkgsEZ.js";import{u}from"./useDictionary-CTkXH_sh.js";import{T as c}from"./index-BfmnFVfP.js";import"./index-DCWxv_T9.js";import"./index-sLLNCS6b.js";import"./preload-helper-b6bKU1NS.js";import"./use-merged-ref-C_BSXtDp.js";import"./index-DBfXTDUO.js";import"./date-BzoeRtiQ.js";import"./index-BQ_DAIzt.js";import"./index-CWUU7WyA.js";import"./index-47ikvMxW.js";import"./pt-PT-C41_Zgu8.js";import"./hooks-DnH1Ipqq.js";import"./image-BU4RpAzz.js";const n={id:"1",name:"Concert Ticket",description:`<h2>Event Description</h2><p>This is a <strong>special event</strong> that you won't want to miss!</p><ul><li>Amazing performances</li><li>Great atmosphere</li><li>Unforgettable experience</li></ul><p>Join us for an incredible night of entertainment.</p><img src="https://via.placeholder.com/600x300" alt="Event" />`,exhibitionType:"concert",price:{amount:100,currency:"USD",__typename:"Price"},__typename:"TicketStatics"},g={...n,name:"Theater Show - Complex Description",description:`
    <h1>Amazing Theater Show</h1>
    <p>Experience the magic of live theater with our spectacular production!</p>
    <h2>About the Show</h2>
    <p>This critically acclaimed performance brings together world-class actors in an unforgettable story.</p>
    <div class="image-container">
      <img src="https://via.placeholder.com/800x400" alt="Theater Show" />
      <p class="caption">Act I - The Beginning</p>
    </div>
    <h3>Performance Details</h3>
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Duration</th>
      </tr>
      <tr>
        <td>March 24, 2025</td>
        <td>7:00 PM</td>
        <td>2.5 hours</td>
      </tr>
    </table>
    <h3>Cast</h3>
    <ul>
      <li>John Smith as the Protagonist</li>
      <li>Jane Doe as the Antagonist</li>
      <li>Many other talented performers</li>
    </ul>
    <blockquote>
      "One of the most impressive shows of the year!" - Theater Critics Association
    </blockquote>
    <p>Don't miss this once-in-a-lifetime opportunity!</p>
  `},_="_know_more_button_ka9gt_1",T={know_more_button:_},s=({ticket:t,detailsLink:m})=>{const p=u(),l=!!t.exhibitionType&&h(t.exhibitionType);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(c,{size:"lg",weight:"bold","data-testid":"ticket_item_name",children:t.name}),e.jsx(k,{condition:!l,children:e.jsx(d,{href:m,className:T.know_more_button,"data-testid":"ticket_item_know_more_link",target:"_blank",children:e.jsx(c,{"data-testid":"ticket_know_more_button",size:"sm",weight:"bold",children:p.tickets.knowMore})})})]})})};try{s.displayName="TicketHeader",s.__docgenInfo={description:"",displayName:"TicketHeader",props:{ticket:{defaultValue:null,description:"",name:"ticket",required:!0,type:{name:"TicketStatics"}},detailsLink:{defaultValue:null,description:"",name:"detailsLink",required:!0,type:{name:"string"}}}}}catch{}const U={title:"Modules/StaticTicketItem/Components/TicketHeader",component:s,parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px",width:"100%"},children:e.jsx(t,{})})]},i={args:{ticket:n,detailsLink:"/details/1"}},o={args:{ticket:g,detailsLink:"/details/2"}},r={args:{ticket:{...n,name:"Ticket Without Description",description:null},detailsLink:"/details/3"}},a={args:{ticket:{...n,name:"Broadway Show",exhibitionType:"broadway"},detailsLink:"/details/4"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: mockTicket,
    detailsLink: '/details/1'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: mockTicketComplex,
    detailsLink: '/details/2'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: {
      ...mockTicket,
      name: 'Ticket Without Description',
      description: null
    },
    detailsLink: '/details/3'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: {
      ...mockTicket,
      name: 'Broadway Show',
      exhibitionType: 'broadway'
    },
    detailsLink: '/details/4'
  }
}`,...a.parameters?.docs?.source}}};const V=["Default","WithComplexDescription","NoDescription","BroadwayTicket"];export{a as BroadwayTicket,i as Default,r as NoDescription,o as WithComplexDescription,V as __namedExportsOrder,U as default};
