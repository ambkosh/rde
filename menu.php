<?php
$title = "r/de stats";
$menuItems = array(
    1 => "First Item",
    2 => "Second Item",
    3 => "Third Item"
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
        echo "<li>$item</li>";
    }
    ?>
</ul>