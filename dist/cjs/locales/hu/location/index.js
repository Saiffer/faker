"use strict";var c=Object.create;var e=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty;var D=(o,t)=>{for(var i in t)e(o,i,{get:t[i],enumerable:!0})},f=(o,t,i,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of p(t))!s.call(o,n)&&n!==i&&e(o,n,{get:()=>t[n],enumerable:!(a=m(t,n))||a.enumerable});return o};var L=(o,t,i)=>(i=o!=null?c(l(o)):{},f(t||!o||!o.__esModule?e(i,"default",{value:o,enumerable:!0}):i,o)),d=o=>f(e({},"__esModule",{value:!0}),o);var y={};D(y,{default:()=>x});module.exports=d(y);var r=L(require("./state"));const u={state:r.default};var x=u;