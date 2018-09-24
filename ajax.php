<?php ob_start();
require_once("db_connection.php");//database connection made
 function confirm_query($result_set,$connection)// Database correction function
             {    
                  //confirm if the query you have made is true or false and if false then to kill the program 
                    if(!$result_set)
                 {
                  $noo=mysqli_error($connection);
                   
                 die ("Database Query has failed"." ".mysqli_error($connection));
                 }  
             
             }
if(isset($_POST['status']) && !empty($_POST['status']))
 { 
    $query="select did,state,dateist,timeist from lost order by id desc";
    $result= mysqli_query($connection, $query);
    confirm_query($result,$connection);
    $car = mysqli_fetch_row($result);
    $car = json_encode($car);
    echo $car;
    //$file = fopen("tar.txt","w");
    //$tar = var_export($car , true);
    //echo fwrite($file,"$tar");
    //fclose($file);
}


?>