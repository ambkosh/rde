<?php
 $title = "Beiträge";
 include 'header.php';
?> 

<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.js"></script>
<script type="text/javascript" src="script/tableposts.js"></script>
<script src="http://d3js.org/d3.v4.min.js" charset="utf-8"></script>



<div id="maincontent" class="container-fuid">    

<div id="beschreibung">
<h2>Histogramm Kommentare 2017</h2>
    <div id="items">
    <p><strong>Datum von:</strong> 2017-01-01</p>
    <p><strong>Datum bis:</strong> 2017-12-31</p>
    <p><strong>Anzahl Kommentare:</strong> 1.291.096 </p>
    <p style="font-size: 14px">Gewertet wurden nur Autoren mit mehr als 20 Posts.</p>
    </div>
<div id="option">
<input name="updateButton" 
        type="button"
        class="btn btn-secondary" 
        value="Posts" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button"
        class="btn btn-secondary" 
        value="Score" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button" 
        class="btn btn-secondary" 
        value="Controversiality" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button" 
        class="btn btn-secondary" 
        value="Replies" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button" 
        class="btn btn-secondary" 
        value="Score/Comment" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button" 
        class="btn btn-secondary" 
        value="Controversiality/Comment" 
        onclick="updatehistogram(this.value)" />
<input name="updateButton" 
        type="button" 
        class="btn btn-secondary" 
        value="Replies/Comment" 
        onclick="updatehistogram(this.value)" />
</div>
</div>


<script type="text/javascript" src="/script/histogram.js"></script>



</div>

<?php
$title = "first";
include 'footer.php';
?> 
