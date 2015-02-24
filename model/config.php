<?php

    require_once(__DIR__ . "/Database.php");
    session_start();
    
    $path = "/MiguelBlog/";
    /* This is the pathway to my blog */

    $host = "localhost";
    /* This is where my blog host at */

    $username = "root";
    /* This is the username at localhost */

    $password = "root";
    /* This is the password at localhost */

    $database = "blog_db";
    /* This is the name of my database */
   
    
    
    if(!isset($_SESSION["connection"])){       
       echo "new session";
    $connection = new Database($host, $username, $password, $database);
    $_SESSION["connection"] = $connection;
   }