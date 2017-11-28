<?php
$title = "r/de stats";
$menuItems = array(
    array(title => "First Item", url => "first.php"),
    array(title => "Second Item", url => "second.php"),
    array(title => "Third Item", url => "third.php")
)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php $title?></title>
</head>
<body>

<ul>
    <?php
    foreach ($menuItems as $item) {
        echo "<li> <a href=$item[url]> $item[title] </a> </li>";
    }
    ?>
</ul>