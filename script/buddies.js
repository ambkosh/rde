var mydata = JSON.parse(data);


let jsonarray = [mydata['nodes']][0]
let nummerarray = [mydata['links']][0]

var ids = jsonarray.map(x => x.id) //nur die autornamen in nem array

var app = new Vue({
  el: '#app',
  data: {
    message: 'harzach',
    result: 'kjkkjkj',
    source: '',
    target:''
  },
  methods: {
      check: function (event) {
          if (this.message == "test") {
            this.result = "true"         
          }
      },
      searchin: function (event) {
        resultsearch = [];
        suche = this.message.toUpperCase();
        var resultsearch = ids.filter(function(x){
        if (x.toUpperCase() == suche) return x
      });
  
        if (resultsearch.length > 0) {this.result = "Du bist drin!"} else {this.result = "Ich kann dich nirgends finden!"};
        console.log(resultsearch)

      },
      checkbuddy: function (event) {
        resultsource = [];
        suche = this.message.toUpperCase();
        var resultsource = nummerarray.filter(function(x){
        if (suche == x.source.toUpperCase()) return x
        });
        console.log(resultsource)
        this.source = resultsource[0].target

        resulttarget = [];
        suche = this.message.toUpperCase();
        var resulttarget = nummerarray.filter(function(x){
        if (suche == x.target.toUpperCase()) return x
        });
        //console.log(resulttarget.map(x => x.value))

        console.log(resulttarget)
        this.target = resulttarget[0].source
      }
  }
})
