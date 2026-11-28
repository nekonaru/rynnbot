import fs from "fs";
const l=fs.readFileSync("lib/function.js","utf8").split("\n");
const i=l.findIndex(x=>x.includes('const fetchJson'));
for(let j=i-1;j<i+12;j++) console.log((j+1)+": "+l[j].replace(/\r$/,""));
