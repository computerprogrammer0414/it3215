 		
  <?php
  echo "<div style='font-size:18px;color:black;font-family:Verdana;margin:40px;background:#d0d7e2;padding:10px;'>";
  echo "<h3>POSTED DATA:</h3>";

  echo "<div style='margin:40px;background-color:#ccc;padding:20px;font-size:18px;'>";
 
  echo "==================<br>";
  foreach ($_POST as $key => $value) {        
    $output .= $key."---".$value."<br>";
    echo $key; 
    echo "--------------------".$value;
    echo "<br>";         
  }
  echo "==================<br>";
  echo "</div>";


?>
 