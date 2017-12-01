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
