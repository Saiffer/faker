"use strict";var l=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var u=(t,e)=>{for(var a in e)l(t,a,{get:e[a],enumerable:!0})},T=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of f(e))!c.call(t,n)&&n!==a&&l(t,n,{get:()=>e[n],enumerable:!(o=y(e,n))||o.enumerable});return t};var d=t=>T(l({},"__esModule",{value:!0}),t);var D={};u(D,{assertLocaleData:()=>s,createLocaleProxy:()=>h});module.exports=d(D);var i=require("./errors/faker-error");const r=()=>{throw new i.FakerError("You cannot edit the locale data on the faker instance")};function h(t){const e={};return new Proxy(t,{has(){return!0},get(a,o){return typeof o=="symbol"||o==="nodeType"?a[o]:o in e?e[o]:e[o]=p(o,a[o])},set:r,deleteProperty:r})}function s(t,...e){if(t===null)throw new i.FakerError(`The locale data for '${e.join(".")}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);if(t===void 0)throw new i.FakerError(`The locale data for '${e.join(".")}' are missing in this locale.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`)}function p(t,e={}){return new Proxy(e,{has(a,o){return a[o]!=null},get(a,o){const n=a[o];return typeof o=="symbol"||o==="nodeType"||s(n,t,o.toString()),n},set:r,deleteProperty:r})}0&&(module.exports={assertLocaleData,createLocaleProxy});
