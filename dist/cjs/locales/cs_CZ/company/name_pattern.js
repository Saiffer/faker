"use strict";var m=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var t=(e,a)=>{for(var s in a)m(e,s,{get:a[s],enumerable:!0})},_=(e,a,s,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of p(a))!f.call(e,n)&&n!==s&&m(e,n,{get:()=>a[n],enumerable:!(l=o(a,n))||l.enumerable});return e};var r=e=>_(m({},"__esModule",{value:!0}),e);var x={};t(x,{default:()=>u});module.exports=r(x);var u=["{{person.last_name}} {{company.suffix}}","{{person.male_last_name}} a {{person.male_last_name}} {{company.suffix}}"];
