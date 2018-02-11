<?php
$menuItems = array(
    array(title => "Birth of a Meme", url => "meme-birth.php"),
    array(title => "Comments November 2017", url => "comments-nov-2017.php"),
    array(title => "Submissions November 2017", url => "submissions-nov-2017.php")
);

$home = "index.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!-- datatables css Bootstrap included -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4-4.0.0-beta/dt-1.10.16/datatables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/sandstone/bootstrap.min.css"/> 

    <!-- Jquery for the side menu toggle -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <!-- Vue.js for the vue-app in the content -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>

    
    <title><?php echo $title ?></title>
</head>
<body>


<div id="wrapper">

<div id="sidebar-wrapper">
    <ul id="menu" class="sidebar-nav" >
            <li class="sidebar-brand"><a href=<?php echo $home ?>> r/de stats </li>
            <?php
            foreach ($menuItems as $item) {
                echo "<li> <a href=$item[url]> $item[title] </a> </li>";
            }
            ?>
    </ul>
</div> <!-- /#sidebar-wrapper -->


<div id="page-content-wrapper">

<div id="menu-toggle">
    <div id="menu-background"> 
        <a href="#menu-toggle">Menü</a>
    </div>
</div>

