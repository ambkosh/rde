/* $.getJSON("comments.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
 */

$(document).ready(function() {
        // Using a 2D array data source
    var t =   $('#dtable').DataTable({
            ajax: "/../json/topcomments.json",
            columnDefs: [
                {"searchable": false,
                "orderable": false,
                "targets": 0}
            ],
            "columns": [
                { data: null , title: "Index"},
                { data: "author", title:"Author" },  
                { data: "total_comments", title:"Comments" },
                { data: "total_score", title:"Score" },
                { data: "avg_score", title:"Avg Score" },
                { data: "controversiality", title:"Avg Controversiality" },
                { data: "replies", title:"Replies" },
                { data: "top_domain", title:"Top Domain" },
                { data: "domain_freq", title:"Comments in Top Domain" },
                { data: "perc_domain", title:"% Top Domain" },
                { data: "top_flair", title:"Top flair" },
                { data: "flair_freq", title:"Comments in Top Flair" },
                { data: "perc_flair", title:"% Top Flair" },
                { data: "avg_words", title:"Avg Words" }        
                
            ]
            });

         
            t.on( 'order.dt', function () {
                t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                    cell.innerHTML = i+1;
                } );
            } ).draw();
})


/* https://datatables.net/examples/api/counter_columns.html */