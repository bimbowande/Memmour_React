<? 
include_once('conn/universal_connect.php');
class ConnectClient{
    private $hookup;
    ##construct for assigning values to the properties
    public function __construct(){
        //one line for the entire connection
        $this->hookup = UniversalConnect::doConnect();
    }
}
$worker = new ConnectClient();
?>