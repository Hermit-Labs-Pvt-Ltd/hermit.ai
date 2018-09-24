<?php
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
// Fetching and decoding and putting the values in different variables             
$vali= file_get_contents('php://input');

$tar = json_decode($vali,true);

function isJson($string) {
 json_decode($string);
 return (json_last_error() == JSON_ERROR_NONE);
}

//$car = isJson($vali);

//var_dump($tar);
//$car = var_export($tar , true);
//$file = fopen("test.txt","w");
//echo fwrite($file,"$tar");
//fclose($file);
//exit;
//$car = var_export($tar , true);
//$file = fopen("test.txt","w");
//echo fwrite($file,"$tar");
//fclose($file);
if($tar['status'] == 0)
{
 $did = $tar['device_id'];
date_default_timezone_set('Asia/Kolkata');
           $dat=date("d-m-Y");
           $time=date('H:i:s');
//Putting the decoded values into the database
$query = "INSERT INTO  lost(did,dateist,timeist,state) VALUES ('$did','$dat','$time',0)";
        //echo $query;
       $result= mysqli_query($connection, $query);
        confirm_query($result,$connection);
}
if($tar['status'] == 1)
{
 $did = $tar['device_id'];
date_default_timezone_set('Asia/Kolkata');
           $dat=date("d-m-Y");
           $time=date('H:i:s');
//Putting the decoded values into the database
$query = "INSERT INTO  lost(did,dateist,timeist,state) VALUES ('$did','$dat','$time',1)";
        //echo $query;
       $result= mysqli_query($connection, $query);
        confirm_query($result,$connection);
}
//Adding date and time into array
        $tar['Date'] = $dat;
        $tar['Time'] = $time;

//$cobra = json_encode($tar);
//var_dump($cobra);
//Fetching the contents from the json file and then appending it with the json objects
//$inp = file_get_contents('cat.json');
//$tempArray = array();

//$tempArray = json_decode($inp,true);
//var_dump($tempArray);
//$tempa = json_decode($tempArray,true) ;
//var_dump($tempArray);
                              //array_push($tempArray, $tar);
                              //$jsonData = json_encode($tempArray);
//file_put_contents('cat.json', $jsonData);//$vali
//Storing the previous value in a text file
//$file = fopen("test.txt","w");
//echo fwrite($file,"$car");
//fclose($file);


?>