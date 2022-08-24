<!-- https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/php -->


<?php
function solution($a, $x) {
    //in_array method Checks if a specified value exists in an array
    
  $Result = in_array($x, $a)? true : false;
  
  //print $Result;
  return $Result;
}

?>