var width = 85;
var height = 85;

var origin = 5;
var rectw = 25;

var root = d3.select('#logo').append('svg')
    .attr('width', width)
    .attr('height', height)

var rects = [
    { x:  origin, y: origin, w:  rectw, h: rectw, fill: '#bd7' },
    { x:  origin, y: origin+rectw, w:  rectw, h: rectw, fill: '#bd7' },
    { x:  origin+rectw, y: origin, w:  rectw, h: rectw, fill: '#8B3' },
    { x:  origin+rectw, y: origin+rectw, w:  rectw, h: rectw, fill: '#8B3' },
    { x:  origin+2*rectw, y: origin, w:  rectw, h: rectw, fill: '#184' },
    { x:  origin+2*rectw, y: origin+rectw, w:  rectw, h: rectw, fill: '#184' },
];

root.selectAll('rect')
    .data(rects).enter()
    .append('rect')
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y; })
    .attr('width', function(d) { return d.w; })
    .attr('height', function(d) { return d.h; })
    .attr('fill', function(d) { return d.fill })
    .attr('stroke-width', 5)
    .attr('stroke', 'whitesmoke');
