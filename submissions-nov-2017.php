<?php
 $title = "Beiträge";
 include 'header.php';
?> 

<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.js"></script>
<script type="text/javascript" src="script/tableposts.js"></script>


<div id="maincontent" class="container-fuid" style="line-height:1;">   

    <div id="beschreibung" style="margin-bottom: 50px" style="line-height:0.5;">
        <h2>Beiträge November 2017</h2><br/>
        <p>Datum von: 2017.11.01</p>
        <p>Datum bis: 2017.11.30</p>
        <p>Anzahl Beiträge: 4314</p>        
    </div>    

    <table id="dtable" class="display table">
    </table>

</div>

<?php
$title = "first";
include 'footer.php';
?> 
