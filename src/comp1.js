import React from 'react';
import "./App.css";
import image from "./person.jpg";
import "bootstrap/dist/css/bootstrap-grid.css"

class Facebook extends React.Component{
    render(){
        return(<div>

{/* 
            <div class="Container">
                
            <img src={image} width="100px" height="100px"></img>
            <a>Hani</a>
            <p>I have something to say</p>
            <a class="foot">Like</a>
            <label class="foot1">__</label>
            <a class="foot2">Replay</a>
            <p class="foot3">1W ago</p>

           
            </div> */}


<div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={image} maxWidth="150px" height="160px"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <a class="card-title" style={{fontSize: '24px' , color:"blue"}} >Hani </a>
        <p class="card-text" style={{fontSize: '24px'}}>I have something to say</p>
        <p class="card-text"><small class="text-muted"><label style={{fontSize: '14px' , color:"blue"}}>like. &nbsp; &nbsp;</label><label style={{fontSize: '14px' , color:"blue"}}>Repaly&nbsp;&nbsp;</label><label style={{fontSize: '10px' , color:"blue"}}>&nbsp;&nbsp;__&nbsp;&nbsp;</label><label>1W ago</label> </small></p>
      </div>
    </div>
  </div>
</div>


        </div>)
    }








}

export default Facebook; 