"use strict";var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var y=(e,r)=>{for(var a in r)c(e,a,{get:r[a],enumerable:!0})},S=(e,r,a,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of p(r))!C.call(e,o)&&o!==a&&c(e,o,{get:()=>r[o],enumerable:!(t=g(r,o))||t.enumerable});return e};var F=e=>S(c({},"__esModule",{value:!0}),e);var x={};y(x,{ColorModule:()=>k,CssFunction:()=>f,CssSpace:()=>b});module.exports=F(x);var h=require("../../internal/module-base"),b=(m=>(m.SRGB="sRGB",m.DisplayP3="display-p3",m.REC2020="rec2020",m.A98RGB="a98-rgb",m.ProphotoRGB="prophoto-rgb",m))(b||{}),f=(n=>(n.RGB="rgb",n.RGBA="rgba",n.HSL="hsl",n.HSLA="hsla",n.HWB="hwb",n.CMYK="cmyk",n.LAB="lab",n.LCH="lch",n.COLOR="color",n))(f||{});function d(e,r){const{prefix:a,casing:t}=r;switch(t){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"mixed":}return a&&(e=a+e),e}function u(e){return e.map(a=>{if(a%1!==0){const o=new ArrayBuffer(4);new DataView(o).setFloat32(0,a);const m=new Uint8Array(o);return u([...m]).replace(/ /g,"")}return(a>>>0).toString(2).padStart(8,"0")}).join(" ")}function $(e,r="rgb",a="sRGB"){const t=o=>Math.round(o*100);switch(r){case"rgba":return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;case"color":return`color(${a} ${e[0]} ${e[1]} ${e[2]})`;case"cmyk":return`cmyk(${t(e[0])}%, ${t(e[1])}%, ${t(e[2])}%, ${t(e[3])}%)`;case"hsl":return`hsl(${e[0]}deg ${t(e[1])}% ${t(e[2])}%)`;case"hsla":return`hsl(${e[0]}deg ${t(e[1])}% ${t(e[2])}% / ${t(e[3])})`;case"hwb":return`hwb(${e[0]} ${t(e[1])}% ${t(e[2])}%)`;case"lab":return`lab(${t(e[0])}% ${e[1]} ${e[2]})`;case"lch":return`lch(${t(e[0])}% ${e[1]} ${e[2]})`;case"rgb":default:return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}}function i(e,r,a="rgb",t="sRGB"){switch(r){case"css":return $(e,a,t);case"binary":return u(e);case"decimal":default:return e}}class k extends h.ModuleBase{human(){return this.faker.helpers.arrayElement(this.faker.definitions.color.human)}space(){return this.faker.helpers.arrayElement(this.faker.definitions.color.space)}cssSupportedFunction(){return this.faker.helpers.enumValue(f)}cssSupportedSpace(){return this.faker.helpers.enumValue(b)}rgb(r={}){const{format:a="hex",includeAlpha:t=!1,prefix:o="#",casing:m="lower"}=r;let l,s="rgb";return a==="hex"?(l=this.faker.string.hexadecimal({length:t?8:6,prefix:""}),l=d(l,{prefix:o,casing:m}),l):(l=Array.from({length:3},()=>this.faker.number.int(255)),t&&(l.push(this.faker.number.float({multipleOf:.01})),s="rgba"),i(l,a,s))}cmyk(r){const a=Array.from({length:4},()=>this.faker.number.float({multipleOf:.01}));return i(a,(r==null?void 0:r.format)||"decimal","cmyk")}hsl(r){const a=[this.faker.number.int(360)];for(let t=0;t<(r!=null&&r.includeAlpha?3:2);t++)a.push(this.faker.number.float({multipleOf:.01}));return i(a,(r==null?void 0:r.format)||"decimal",r!=null&&r.includeAlpha?"hsla":"hsl")}hwb(r){const a=[this.faker.number.int(360)];for(let t=0;t<2;t++)a.push(this.faker.number.float({multipleOf:.01}));return i(a,(r==null?void 0:r.format)||"decimal","hwb")}lab(r){const a=[this.faker.number.float({multipleOf:1e-6})];for(let t=0;t<2;t++)a.push(this.faker.number.float({min:-100,max:100,multipleOf:1e-4}));return i(a,(r==null?void 0:r.format)||"decimal","lab")}lch(r){const a=[this.faker.number.float({multipleOf:1e-6})];for(let t=0;t<2;t++)a.push(this.faker.number.float({max:230,multipleOf:.1}));return i(a,(r==null?void 0:r.format)||"decimal","lch")}colorByCSSColorSpace(r){(r==null?void 0:r.format)==="css"&&!(r!=null&&r.space)&&(r={...r,space:"sRGB"});const a=Array.from({length:3},()=>this.faker.number.float({multipleOf:1e-4}));return i(a,(r==null?void 0:r.format)||"decimal","color",r==null?void 0:r.space)}}0&&(module.exports={ColorModule,CssFunction,CssSpace});
