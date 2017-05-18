!function(){"use strict";nodeApp.directive("nodeChart",["$window","$rootScope","$compile",function(a,b,c){var d=function(){return function(){var a=this;a.chartType="0",a.chartData=[],a.dataCount="50",a.makeData=function(){for(var b=[],c=[],d=[],e=parseInt(a.dataCount,10),f=1;f<=e;f++)b.push({x:f,y:Math.log(f),size:Math.random()}),c.push({x:f,y:Math.log2(f),size:Math.random()}),d.push({x:f,y:Math.log10(f),size:Math.random()});a.chartData=[{values:b,key:"LogE(n)",color:"#1f77b4"},{values:c,key:"Log2(n)",color:"#2ca02c"},{values:d,key:"Log10(n)",color:"#ffcc00"}]},a.changeChart=function(){b.$emit("changeChart")},a.changeCount=function(){a.makeData(),b.$emit("changeChart")},a.makeData()}},e=function(a){return function(c,d,e){if(e){var f=c.dirCtrl,g=function(){a.select("#chart svg g").remove(),a.select(".nvtooltip").remove()},h=function(b,c){nv.addGraph(function(){var d=nv.models.multiBarChart().useInteractiveGuideline(!0).showControls(!0).showLegend(!0).showYAxis(!0).showXAxis(!0).margin(c);return d.xAxis.axisLabel("Numbers").showMaxMin(!0).tickFormat(a.format("r")),d.yAxis.axisLabel("Values").tickFormat(a.format(".02f")),a.select("#chart svg").datum(b).transition().duration(500).call(d),d})},i=function(b,c){nv.addGraph(function(){var d=nv.models.lineChart().useInteractiveGuideline(!0).showLegend(!0).showYAxis(!0).showXAxis(!0).margin(c);return d.xAxis.axisLabel("Numbers").showMaxMin(!0).tickFormat(a.format("r")),d.yAxis.axisLabel("Values").tickFormat(a.format(".02f")),a.select("#chart svg").datum(b).transition().duration(500).call(d),d})},j=function(b,c){nv.addGraph(function(){var d=nv.models.stackedAreaChart().useInteractiveGuideline(!0).showControls(!0).showLegend(!0).showYAxis(!0).showXAxis(!0).clipEdge(!0).margin(c);return d.xAxis.axisLabel("Numbers").showMaxMin(!0).tickFormat(a.format("r")),d.yAxis.axisLabel("Values").tickFormat(a.format(".02f")),a.select("#chart svg").datum(b).transition().duration(500).call(d),d})},k=function(b,c){var d=a.format(".02f");nv.addGraph(function(){var c=nv.models.scatterChart().showDistX(!0).showDistY(!0).color(a.scale.category10().range());return c.xAxis.axisLabel("Numbers").showMaxMin(!0).tickFormat(a.format("r")),c.yAxis.axisLabel("Values").tickFormat(d),a.select("#chart svg").datum(b).transition().duration(500).call(c),c})},l=function(){var a=f.chartData,b={left:80,bottom:50,top:30,right:40};switch(g(),f.chartType){case"0":h.call(this,a,b);break;case"1":i.call(this,a,b);break;case"2":j.call(this,a,b);break;case"3":k.call(this,a,b)}};b.$on("changeChart",function(){l.call(this)}),angular.element(window).on("resize",function(){l.call(this)}),l.call(this)}}};return{restrict:"E",scope:!0,templateUrl:"../templates/chart.template.html",controller:d(),controllerAs:"dirCtrl",link:e(a.d3)}}])}();