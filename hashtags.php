<?
include_once "real_conn.php";
 class Query{
     # class properties
     private $hookup;
     private $tablename;
     #constructor
     public function __construct(){
         $this->hookup = UniversalConnect::doConnect();
}
     
/*
 *  method for collecting 
*/
 public function collectHash(){
     $query = "SELECT * FROM hashtags_and_images";
    $result = $this->hookup->query($query);
        if(!$result) echo"cannot fetch data";
        $rows = $result->num_rows;
        $tags = array();
        for($i = 0;$i<$rows;$i++){
            $result->data_seek($i);
            $row = $result->fetch_array(MYSQL_BOTH);   
            $tags[] =  $row['hashtag'];
         }
        return $tags;
     }
 }
#####################################
#######                         ####
####################################
$view_baba = new Query();
$tags  = $view_baba ->collectHash();
foreach ($tags as $tag => $t){
    echo $t."<br/>";
}
?>