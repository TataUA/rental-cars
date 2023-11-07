"use strict";(self.webpackChunkrental_cars=self.webpackChunkrental_cars||[]).push([[5],{1005:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var i,o,r,a,l,c,s,p,d,x,u,h,m,b=t(9439),v=t(2791),g=t(9434),f=t(2286),k=t(6648),w=t(2892),y=t(6852),_=t(672),j=t(168),Z=t(1109),M=Z.Z.button(i||(i=(0,j.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 90px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid var(--blue);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--blue);\n  &:hover,\n  :focus {\n    color: var(--blue-active);\n    transition: var(--transition);\n  }\n"]))),C=t(184),N=function(){var n=(0,g.I0)(),e=(0,g.v9)(f.Zp),t=(0,g.v9)(f.Mo);return(0,C.jsx)(C.Fragment,{children:t&&(0,C.jsx)(M,{type:"button",onClick:function(){var t=e+1;n((0,w.YA)(t))},children:"Load more"})})},L=Z.Z.button(o||(o=(0,j.Z)(["\n  position: absolute;\n  display: inline-block;\n  bottom: 12px;\n  right: 14px;\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  background-color: transparent;\n  border: none;\n"]))),S=function(n){var e=n.visible,t=n.onHandleClick;return(0,C.jsx)(L,{onClick:function(){return t(!e)},children:e?(0,C.jsx)("svg",{className:"input_btn_up",viewBox:"0 0 1024 1024",fill:"currentColor",height:"16px",width:"16px",children:(0,C.jsx)("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"})}):(0,C.jsx)("svg",{className:"input_btn_down",viewBox:"0 0 1024 1024",fill:"currentColor",height:"16px",width:"16px",children:(0,C.jsx)("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"})})})},z=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),B=Z.Z.section(r||(r=(0,j.Z)(["\n  width: 860px;\n  height: 80px;\n  display: flex;\n  gap: 18px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 120px;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),I=Z.Z.label(a||(a=(0,j.Z)(["\n  position: relative;\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: var(--text-color-gray);\n\n  .input-make {\n    width: 224px;\n  }\n\n  .input-price {\n    width: 125px;\n  }\n\n  .input-mileageMin {\n    width: 100px;\n    padding-left: 60px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 1px solid var(--border-color-ten);\n  }\n\n  .input-mileageMax {\n    width: 114px;\n    padding-left: 46px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]))),A=Z.Z.input(l||(l=(0,j.Z)(["\n  display: block;\n  height: 38px;\n  margin: 8px 0 0;\n  border-radius: 14px;\n  border: none;\n  padding: 4px 8px;\n  background-color: var(--input-color);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-color);\n\n  &::placeholder {\n    color: var(--text-color);\n  }\n"]))),E=Z.Z.ul(c||(c=(0,j.Z)(["\n  display: block;\n  position: absolute;\n  z-index: 3;\n  width: 200px;\n  height: 272px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background-color: var(--white);\n  top: 78px;\n  left: 0;\n  border-top: 1px solid var(--border-color-five);\n  box-shadow: 0px 4px 36px 0px var(--border-color-five);\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  scrollbar-width: thin;\n  overflow-y: auto;\n  overscroll-behavior: auto;\n  cursor: pointer;\n  transition: opacity 0.3s;\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--border-color-ten);\n    border-radius: 6px;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--text-color-twenty);\n  }\n\n  .make_item {\n    margin-bottom: 8px;\n    &:hover {\n      color: var(--text-color);\n    }\n  }\n\n  &.makes_visible {\n    opacity: 1;\n  }\n\n  &.makes_hidden {\n    opacity: 0;\n    pointer-events: none;\n  }\n"]))),P=Z.Z.li(s||(s=(0,j.Z)(["\n  &.active_item {\n    color: var(--text-color);\n  }\n"]))),H=Z.Z.ul(p||(p=(0,j.Z)(["\n  display: block;\n  position: absolute;\n  z-index: 3;\n  width: 104px;\n  height: 188px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background-color: var(--white);\n  top: 78px;\n  left: 0;\n  border-top: 1px solid var(--border-color-five);\n  box-shadow: 0px 4px 36px 0px var(--border-color-five);\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  scrollbar-width: thin;\n  overflow-y: auto;\n  overscroll-behavior: auto;\n  cursor: pointer;\n  transition: opacity 0.3s;\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--border-color-ten);\n    border-radius: 6px;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--text-color-twenty);\n  }\n\n  .price_item {\n    margin-bottom: 8px;\n    &:hover {\n      color: var(--text-color);\n    }\n  }\n\n  &.prices_visible {\n    opacity: 1;\n  }\n\n  &.prices_hidden {\n    opacity: 0;\n    pointer-events: none;\n  }\n"]))),U=Z.Z.li(d||(d=(0,j.Z)(["\n  &.active_item {\n    color: var(--text-color);\n  }\n"]))),O=Z.Z.p(x||(x=(0,j.Z)(["\n  position: absolute;\n  bottom: 14px;\n  left: 10px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-color-gray);\n  &.active_item {\n    color: var(--text-color);\n  }\n"]))),Y=Z.Z.div(u||(u=(0,j.Z)(["\n  display: flex;\n\n  > p {\n    position: absolute;\n    left: 0;\n  }\n\n  .mileageMin {\n    left: 10px;\n  }\n\n  .mileageMax {\n    left: 186px;\n  }\n"]))),D=Z.Z.button(h||(h=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 136px;\n  height: 44px;\n  margin-top: 26px;\n  padding: 14px 44px;\n  border-radius: 12px;\n  background-color: var(--blue);\n  color: var(--white);\n  border: 0;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n\n  &:hover,\n  :focus {\n    background-color: var(--blue-active);\n    transition: var(--transition);\n  }\n"]))),F=function(){for(var n=(0,g.I0)(),e=(0,v.useState)(!1),t=(0,b.Z)(e,2),i=t[0],o=t[1],r=(0,v.useState)(!1),a=(0,b.Z)(r,2),l=a[0],c=a[1],s=(0,v.useState)(""),p=(0,b.Z)(s,2),d=p[0],x=p[1],u=(0,v.useState)(""),h=(0,b.Z)(u,2),m=h[0],f=h[1],k=(0,v.useState)(""),y=(0,b.Z)(k,2),_=y[0],j=y[1],Z=(0,v.useState)(""),M=(0,b.Z)(Z,2),N=M[0],L=M[1],F=[],T=10;T<=500;T+=10)F.push(T);return(0,C.jsxs)(B,{children:[(0,C.jsxs)(I,{children:["Car brand",(0,C.jsx)(A,{className:"input-make",type:"text",value:d,name:"make",placeholder:"Enter the text",readOnly:!0}),(0,C.jsx)(S,{visible:i,onHandleClick:o}),(0,C.jsxs)(E,{id:"listMakes",className:" ".concat(i?"makes_visible":"makes_hidden"),children:[(0,C.jsx)(P,{className:"make_item ".concat(""===d?"active_item":""),"data-value":"",onClick:function(){x(""),document.getElementById("listMakes").classList.add("makes_hidden"),o(!1)},children:"All"}),z.map((function(n,e){return(0,C.jsx)(P,{className:"make_item ".concat(d===n?"active_item":""),"data-value":n,onClick:function(){x(n),document.getElementById("listMakes").classList.add("makes_hidden"),o(!1)},children:n},e)}))]})]}),(0,C.jsxs)(I,{children:["Price/ 1 hour",(0,C.jsx)(A,{className:"input-price",type:"text",value:"",name:"price",readOnly:!0}),(0,C.jsx)(O,{className:"price_value ".concat(""===m?"":"active_item"),children:" To ".concat(m,"$")}),(0,C.jsx)(S,{visible:l,onHandleClick:c}),(0,C.jsxs)(H,{id:"listPrices",className:" ".concat(l?"prices_visible":"prices_hidden"),children:[(0,C.jsx)(U,{className:"price_item ".concat(""===m?"active_item":""),"data-value":"",onClick:function(){f(""),document.getElementById("listPrices").classList.add("prices_hidden"),c(!1)},children:"All"}),F.map((function(n,e){return(0,C.jsx)(U,{className:"price_item ".concat(m===n?"active_item":""),"data-value":n,onClick:function(){f(n),document.getElementById("listPrices").classList.add("prices_hidden"),c(!1)},children:n},e)}))]})]}),(0,C.jsxs)(I,{children:["\u0421ar mileage / km",(0,C.jsxs)(Y,{children:[(0,C.jsx)(A,{className:"input-mileageMin",type:"text",value:_?Number(_).toLocaleString("en-US"):"",name:"mileageMin",onChange:function(n){j(n.target.value.replace(/\D/g,""))}}),(0,C.jsx)(O,{className:"mileageMin ".concat(""===_?"":"active_item"),children:"From "}),(0,C.jsx)(A,{className:"input-mileageMax",type:"text",value:N?Number(N).toLocaleString("en-US"):"",name:"mileageMax",onChange:function(n){L(n.target.value.replace(/\D/g,""))}}),(0,C.jsx)(O,{className:"mileageMax ".concat(""===N?"":"active_item"),children:" To "})]})]}),(0,C.jsx)(D,{type:"submit",onClick:function(){n((0,w._L)({make:"".concat(d),rentalPrice:"".concat(m),mileageMin:"".concat(_),mileageMax:"".concat(N)}))},children:"Search"})]})},T=Z.Z.main(m||(m=(0,j.Z)(["\n    padding-bottom: 100px;\n"]))),q=function(){var n=(0,v.useState)(!0),e=(0,b.Z)(n,2),t=e[0],i=e[1],o=(0,g.I0)(),r=(0,g.v9)(f.xU),a=(0,g.v9)(f._k),l=(0,g.v9)(f.zh),c=(0,g.v9)(f.Zp);return(0,v.useEffect)((function(){if(t)return i(!1),o((0,w.YA)(1)),void o((0,w._L)({make:""}));o((0,k.Y)())}),[t,o,c]),(0,C.jsxs)(T,{children:[r&&(0,C.jsx)(y.a,{}),(0,C.jsx)(F,{}),(0,C.jsx)(_.q,{items:a}),l&&(0,C.jsx)("p",{children:"Sorry, something went wrong..."}),(0,C.jsx)(N,{})]})}}}]);
//# sourceMappingURL=5.86fdf57f.chunk.js.map