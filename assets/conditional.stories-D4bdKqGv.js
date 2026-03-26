import{j as e}from"./iframe-Djky-ZDc.js";import{C as r,I as d,E as t,a as i}from"./index-lt11qAWP.js";import"./preload-helper-b6bKU1NS.js";const m={title:"Helpers/Conditional",argTypes:{}},n=()=>e.jsxs(r,{children:[e.jsx(d,{condition:!0,children:"Rendered If Component"}),e.jsx(t,{children:"Rendered Else Component"})]}),o=()=>e.jsxs(r,{children:[e.jsx(d,{condition:!1,children:"Rendered If Component"}),e.jsx(i,{condition:!0,children:"Rendered ElseIf Component"}),e.jsx(t,{children:"Rendered Else Component"})]}),s=()=>e.jsxs(r,{children:[e.jsx(d,{condition:!1,children:"Rendered If Component"}),e.jsx(t,{children:"Rendered Else Component"})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Conditional>
    <If condition={true}>Rendered If Component</If>
    <Else>Rendered Else Component</Else>
  </Conditional>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Conditional>
    <If condition={false}>Rendered If Component</If>
    <ElseIf condition={true}>Rendered ElseIf Component</ElseIf>
    <Else>Rendered Else Component</Else>
  </Conditional>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Conditional>
    <If condition={false}>Rendered If Component</If>
    <Else>Rendered Else Component</Else>
  </Conditional>`,...s.parameters?.docs?.source}}};const p=["IfConditionIsTrue","ElseIfConditionIsTrue","IfConditionIsFalse"];export{o as ElseIfConditionIsTrue,s as IfConditionIsFalse,n as IfConditionIsTrue,p as __namedExportsOrder,m as default};
