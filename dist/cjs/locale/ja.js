"use strict";var l=Object.create;var t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var x=(o,r)=>{for(var m in r)t(o,m,{get:r[m],enumerable:!0})},p=(o,r,m,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of b(r))!w.call(o,e)&&e!==m&&t(o,e,{get:()=>r[e],enumerable:!(f=s(r,e))||f.enumerable});return o};var a=(o,r,m)=>(m=o!=null?l(j(o)):{},p(r||!o||!o.__esModule?t(m,"default",{value:o,enumerable:!0}):m,o)),F=o=>p(t({},"__esModule",{value:!0}),o);var g={};x(g,{faker:()=>d});module.exports=F(g);var i=require("../faker"),n=a(require("../locales/base")),c=a(require("../locales/en")),k=a(require("../locales/ja"));const d=new i.Faker({locale:[k.default,c.default,n.default]});0&&(module.exports={faker});