"use strict";var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var l=(n,e)=>{for(var r in e)s(n,r,{get:e[r],enumerable:!0})},b=(n,e,r,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of o(e))!h.call(n,t)&&t!==r&&s(n,t,{get:()=>e[t],enumerable:!(m=a(e,t))||m.enumerable});return n};var g=n=>b(s({},"__esModule",{value:!0}),n);var c={};l(c,{LoremModule:()=>p});module.exports=g(c);var i=require("../../internal/module-base"),u=require("../word/filter-word-list-by-length");class p extends i.ModuleBase{word(e={}){const r=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement((0,u.filterWordListByLength)({...r,wordList:this.faker.definitions.lorem.words}))}words(e=3){return this.faker.helpers.multiple(()=>this.word(),{count:e}).join(" ")}sentence(e={min:3,max:10}){const r=this.words(e);return`${r.charAt(0).toUpperCase()+r.substring(1)}.`}slug(e=3){const r=this.words(e);return this.faker.helpers.slugify(r)}sentences(e={min:2,max:6},r=" "){return this.faker.helpers.multiple(()=>this.sentence(),{count:e}).join(r)}paragraph(e=3){return this.sentences(e)}paragraphs(e=3,r=`
`){return this.faker.helpers.multiple(()=>this.paragraph(),{count:e}).join(r)}text(){const e=["sentence","sentences","paragraph","paragraphs","lines"],r=this.faker.helpers.arrayElement(e);return this[r]()}lines(e={min:1,max:5}){return this.sentences(e,`
`)}}0&&(module.exports={LoremModule});