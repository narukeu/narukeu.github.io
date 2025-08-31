import{p as U}from"./chunk-ANTBXLJU.E01s8RBn.js";import{_ as s,g as q,s as V,a as Z,b as j,q as H,p as J,l as w,c as K,E as Q,I as X,L as Y,M as G,N as ee,e as te,y as ae,O as re,G as ie}from"./theme.DZbgZz2m.js";import{p as se}from"./treemap-75Q7IDZK.DvtLo88a.js";import"./framework.8GrsvcDK.js";import"./baseUniq.Ch7rBI19.js";import"./basePickBy.wCBXMVRf.js";import"./clone.C_d_BPY1.js";var le=ie.pie,D={sections:new Map,showData:!1},g=D.sections,C=D.showData,oe=structuredClone(le),ne=s(()=>structuredClone(oe),"getConfig"),ce=s(()=>{g=new Map,C=D.showData,ae()},"clear"),pe=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=s(()=>g,"getSections"),ge=s(e=>{C=e},"setShowData"),ue=s(()=>C,"getShowData"),M={getConfig:ne,clear:ce,setDiagramTitle:J,getDiagramTitle:H,setAccTitle:j,getAccTitle:Z,setAccDescription:V,getAccDescription:q,addSection:pe,getSections:de,setShowData:ge,getShowData:ue},fe=s((e,a)=>{U(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:s(async e=>{const a=await se("pie",e);w.debug(a),fe(a,M)},"parse")},me=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=me,Se=s(e=>{const a=[...e.values()].reduce((r,l)=>r+l,0),y=[...e.entries()].map(([r,l])=>({label:r,value:l})).filter(r=>r.value/a*100>=1).sort((r,l)=>l.value-r.value);return re().value(r=>r.value)(y)},"createPieArcs"),xe=s((e,a,y,$)=>{w.debug(`rendering pie chart
`+e);const r=$.db,l=K(),T=Q(r.getConfig(),l.pie),A=40,o=18,p=4,c=450,u=c,f=X(a),n=f.append("g");n.attr("transform","translate("+u/2+","+c/2+")");const{themeVariables:i}=l;let[b]=Y(i.pieOuterStrokeWidth);b??(b=2);const E=T.textPosition,d=Math.min(u,c)/2-A,O=G().innerRadius(0).outerRadius(d),W=G().innerRadius(d*E).outerRadius(d*E);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const h=r.getSections(),I=Se(h),L=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const _=I.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=ee(L);n.selectAll("mySlices").data(_).enter().append("path").attr("d",O).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(_).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const F=o+p,P=F*k.length/2,R=12*o,B=x*F-P;return"translate("+R+","+B+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",o+p).attr("y",o-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const N=Math.max(...S.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),z=u+A+o+p+N;f.attr("viewBox",`0 0 ${z} ${c}`),te(f,c,z,T.useMaxWidth)},"draw"),we={draw:xe},Ee={parser:he,db:M,renderer:we,styles:ve};export{Ee as diagram};
