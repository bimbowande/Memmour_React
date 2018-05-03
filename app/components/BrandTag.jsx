import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const styles = {
    backgroundColor:'rgba(200,200,200,.2)',
    position:'relative'
}
/**
 * styles for playbtn
 */
const styles2 = {
    position:'absolute',
    right:-50,
    flex:1,
    height:100,
    borderRadius:100,
    width:100,
    backgroundColor:'rgba(255,255,255,.9)',
    alignItems:'center',
    top:200

}
const API = 'http://localhost/Memmour_Web/memm-api/getImages.php';
let img = [];

export default class BrandTag extends Component{
    constructor(props){
        super(props);
        this.collectData = this.collectData.bind(this);
        this.state = {
            posts: [],
            isLoading:true,
        };
        
    }

 //load images from server
    componentDidMount(){
        axios.get(API)
        .then(res=>{
            this.setState({ posts:res.data });
        })
    }

    //store the images inside the 
   collectData(){
       this.state.posts.forEach((elem)=>{
            let val  = elem['image_name'];
            img.push(val);
       })
   }
    render(){
        return(
            <div style={styles} className="brandname-section section">
                <h1>Memmour</h1>
                <div style={styles2} className='playbtn' onClick={this.collectData}>
                    <span className="ion ion-play"></span>
                </div>
            </div>
        )
    }
}