<?php
 $title = "first";
 include 'header.php';
?> 

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.js"></script>

<script type="text/javascript" src="script/tablesubmitter.js"></script>




    <div id="maincontent" class="container-fuid" style="line-height:1;">    
        <table id="dtable" class="display table">
        </table>
    </div>



</div> <!-- page page-content-wrapper close --> 
</div> <!-- wrapper close -->
<script>

    window.onload = $("menu-toogle").toggleClass("toggled");

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
</script>
 </body>
</html>
