height = 500;
width = 1000;

var margin = {top: 20, right: 30, bottom: 70, left: 30};

var svg = d3.select("#maincontent").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("/json/histogram.json", function(jdata){
            
    const criteria = "Score"; //which key from the json-data should be rendered?

    console.log(d3.extent(jdata.data, function (d) { return d[criteria] }));

    var x = d3.scaleLinear()
        .domain(d3.extent(jdata.data, function (d) { return d[criteria] }))
        .range([0, width])
        .nice(); //rounds to nice values
    
    var color = d3.rgb(69,117,193);

    var histogram = d3.histogram()
        .value(function (d) {return d[criteria]})
        .domain(x.domain())
        .thresholds(15);

    var bins = histogram(jdata.data);
    
    var y = d3.scaleSqrt() //y-scale with log-scaling
        .domain([0, d3.max(bins, function (d)  {return d.length })])
        .range([height, 0]);

    var div = d3.select("body").append("div")
        .attr("class", "d3hover");	


    var bars = svg.selectAll(".bar")
        .data(bins)
        .enter().append("g") //group each bar in a g-element
        .attr("class", "bar")
        .attr("transform", function (d, i) { //define d.x and d.y here for better positioning of text later
            d.x = x(d.x0),
            d.y = y(d.length);
            return "translate(" + x(d.x0) + "," + y(d.length) + ")"
        });  

    var hovertext = function (d) {
        d3.selectAll(".hovertext").remove();
        d3.selectAll(".table").remove();
        var hovertextdiv = d3.select("#maincontent").append("table")
                                .attr("class", "table table-bordered");

        var hovertextdivheading = hovertextdiv.append("tr").attr("class", "tableheading");
        hovertextdivheading.append("th").append("text").text("Author");
        hovertextdivheading.append("th").append("text").text(criteria);
        

        for (i=0; i < d.length; i++) {
            hovertextdiv.append("tr")
            hovertextdiv.append("td").append("text")
                .text(d[i]['Author']);
            hovertextdiv.append("td").append("text")
                .text(d[i][criteria]);
        }

    }

    bars.append("rect")
        .attr("x", margin.left)
        .attr("y", 0)
        .attr("width", function (d) {return x(d.x1) - x(d.x0) -1})
        .attr("height", function (d) {return height - y(d.length)})
        .attr("fill", function (d, i) {return color.darker(10/d.length) })
        .on("click", function (d) {
            hovertext (d);
            d3.selectAll("rect").attr("class", "nonactivebar");
            d3.select(this).attr("class", "activebar");

        })
        .on("mouseover", function (d) {
                d3.select(this).transition()
                .duration(250)
                .style("fill", "#ed9407")
                .style("cursor", "pointer") 
            })
        .on("mouseout", function (d) { 
            d3.select(this).transition()
                .duration(200)
                .style("fill", color.darker(10/d.length)) 
            })


    bars.append("text")
        .attr("x", margin.left)
        .attr("dx", function (d) { return (x(d.x1) - x(d.x0))/2 }) //add half of the width to the relative x position
        .attr("dy", function (d) { return height - y(d.length/2) })
        .attr("text-anchor", "middle")     
        .text(function (d) { return d.length });
    

    g.append("g") //appends x-axis
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    g.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + (margin.bottom-10)) + ")") 
        .attr("text-anchor", "middle")       
        .text(criteria);

    g.append("text")    
        .attr("transform", "translate(" + -20 +" ," + height/2 + ")rotate(-90)")
        .attr("text-anchor", "middle")
        .text("Anzahl Autoren");
    
    console.log(bins);
    console.log(x(bins[2].x0));
    console.log(x(1000));
            
})
    





function updatehistogram (criteria) {

    d3.json("/json/histogram.json", function(jdata){

    d3.selectAll("bins").remove();
    d3.selectAll("g").remove();

    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    console.log(d3.extent(jdata.data, function (d) { return d[criteria] }));

    var x = d3.scaleLinear()
        .domain(d3.extent(jdata.data, function (d) { return d[criteria] }))
        .range([0, width])
        .nice(); //rounds to nice values
    
    var color = d3.rgb(69,117,193);

    var histogram = d3.histogram()
        .value(function (d) {return d[criteria]})
        .domain(x.domain())
        .thresholds(15);

    var bins = histogram(jdata.data);
    
    var y = d3.scaleSqrt() //y-scale with log-scaling
        .domain([0, d3.max(bins, function (d)  {return d.length })])
        .range([height, 0]);

    var div = d3.select("body").append("div")
        .attr("class", "d3hover");	

    d3.selectAll(".bar").transition()
    var bars = svg.selectAll(".bar")
        .data(bins)
        .enter().append("g") //group each bar in a g-element
        .attr("class", "bar")
        .attr("transform", function (d, i) { //define d.x and d.y here for better positioning of text later
            d.x = x(d.x0),
            d.y = y(d.length);
            return "translate(" + x(d.x0) + "," + y(d.length) + ")"
        });  

    var hovertext = function (d) {
        d3.selectAll(".hovertext").remove();
        d3.selectAll(".table").remove();
        var hovertextdiv = d3.select("#maincontent").append("table")
                                .attr("class", "table table-bordered");

        var hovertextdivheading = hovertextdiv.append("tr").attr("class", "tableheading");
        hovertextdivheading.append("th").append("text").text("Author");
        hovertextdivheading.append("th").append("text").text(criteria);
        

        for (i=0; i < d.length; i++) {
            hovertextdiv.append("tr")
            hovertextdiv.append("td").append("text")
                .text(d[i]['Author']);
            hovertextdiv.append("td").append("text")
                .text(d[i][criteria]);
        }

    }

    bars.append("rect")
        .attr("x", margin.left)
        .attr("y", 0)
        .attr("width", function (d) {return x(d.x1) - x(d.x0) -1})
        .attr("height", function (d) {return height - y(d.length)})
        .attr("fill", function (d, i) {return color.darker(10/d.length) })
        .on("click", function (d) {
            hovertext (d);
            d3.selectAll("rect").attr("class", "nonactivebar");
            d3.select(this).attr("class", "activebar");

        })
        .on("mouseover", function (d) {
             d3.select(this).transition()
                .duration(250)
                .style("fill", "#ed9407")
                .style("cursor", "pointer") 
            })
        .on("mouseout", function (d) { 
            d3.select(this).transition()
                .duration(200)
                .style("fill", color.darker(10/d.length)) 
            })

           
    bars.append("text")
        .attr("x", margin.left)
        .attr("dx", function (d) { return (x(d.x1) - x(d.x0))/2 }) //add half of the width to the relative x position
        .attr("dy", function (d) { return height - y(d.length/2) })
        .attr("text-anchor", "middle")     
        .text(function (d) { return d.length });
    

    g.append("g") //appends x-axis
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    g.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + (margin.bottom-10)) + ")") 
        .attr("text-anchor", "middle")       
        .text(criteria);

    g.append("text")    
        .attr("transform", "translate(" + -20 +" ," + height/2 + ")rotate(-90)")
        .attr("text-anchor", "middle")
        .text("Anzahl Autoren");
    
    console.log(bins);
    console.log(x(bins[2].x0));
    console.log(x(1000));

    })




}