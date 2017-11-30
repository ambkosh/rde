<?php
$menuItems = array(
    array(title => "Comments November 2017", url => "comments-nov-2017.php"),
    array(title => "Submissions November 2017", url => "submissions-nov-2017.php")
)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.css"/>

    <title><?php echo $title ?></title>
</head>
<body>


<div id="menu">
    <ul>
        <?php
        foreach ($menuItems as $item) {
            echo "<li> <a href=$item[url]> $item[title] </a> </li>";
        }
        ?>
    </ul>
</div>