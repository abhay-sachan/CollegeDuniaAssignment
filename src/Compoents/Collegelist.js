import React from 'react'
import { collegeData } from '../collegedata';
import ReactDOM from 'react-dom/client';
import SearchCollege from './SearchCollege';

export default class Collegelist extends React.Component
{
    constructor()
    {
        super();
        this.state={  
            searchedCollege : "",
            sortedlist : collegeData
             
        }
    }
    sortratingasc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.collegeRating > b.collegeRating) ? 1 : -1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
        
    }
    sortratingdesc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.collegeRating > b.collegeRating) ? -1 : 1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
        
    }
    sortfeesasc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.fees > b.fees) ? 1 : -1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
        
    }
    sortfeesdesc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.fees > b.fees) ? -1 : 1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
        
    }
    userreviewasc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.userReviews > b.userReviews) ? 1 : -1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
        
    }
    userreviewdesc = (e) => {
        e.preventDefault();
        this.state.sortedlist.sort((a, b) => (a.userReviews > b.userReviews) ? -1 : 1)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Collegelist />);
    }    
    getData = (e) => {
            this.setState({ searchedCollege: e.target.value })
            console.log(this.state.searchedCollege)
        }    
    search = (e) => {
        e.preventDefault();
        sessionStorage.setItem("SC", this.state.searchedCollege)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SearchCollege />);
    }    
    render()
    {
        return(
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal navsize">
                                <li><button class="btn btn-light btn-lg "><b>College Rating</b></button></li>  
                                <li><button onClick={this.sortratingasc} class="btn btn-light btn-lg "><b>↑</b></button></li>
                                <li> <button onClick={this.sortratingdesc} class="btn btn-light btn-lg "><b>↓</b></button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button class="btn btn-light btn-lg "><b>College Fees</b></button></li>  
                                <li><button onClick={this.sortfeesasc} class="btn btn-light btn-lg "><b>↑</b></button></li>
                                <li> <button onClick={this.sortfeesdesc} class="btn btn-light btn-lg "><b>↓</b></button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button class="btn btn-light btn-lg "><b>User Review</b></button></li>  
                                <li><button onClick={this.userreviewasc} class="btn btn-light btn-lg "><b>↑</b></button></li>
                                <li> <button onClick={this.userreviewdesc} class="btn btn-light btn-lg "><b>↓</b></button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="searchstyle">
                                <li><input class="form-control me-2" id="searchedCollege" type="search" placeholder="Search" onInput={this.getData} aria-label="Search" /></li>
                                &nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.search}  class="btn btn-outline-primary ">Search</button></li>
                                </div>
                               
                            </ul>
                    </nav>

             <div class="row"> 
                            
                        { 
                        this.state.sortedlist.map((data, key) => {
                            return(
                            <div key={key} className="card col-md-2 card_design" style={{ width: "31%", height: "600px" }} >
                                <img src={data.collegeImage}  alt="Card image"/>
                                <p class = "uppertext"><b> {data.collegeName} </b><br />
                                    
                                   </p> 
                                    <div class = "centertext">
                                        <b><span style={{color: "orange"}}> ₹ {data.fees} </span>BE/BTECH FIRST YEAR FEES</b>
                                        <b><span style={{color: "orange"}}>{data.collegeRating} / 10 </span>BASED ON 415 USER REVIEWS</b>
                                        <b style={{color: "white"}}>a</b>
                                    </div>   
                                    <hr/>
                                    <div class = "middletext">
                                        <b>RANKED {data.nirfRanking} OUT OF 300 NIRF</b>
                                        <b>RANKED {data.weeklyRanking} OUT OF 216 THE WEEK</b>
                                    </div>    
                                    <div class = "lowertext">
                                        <b>ADMISSION 2O22 &nbsp;&nbsp;&nbsp; REVIEWS &nbsp;&nbsp;&nbsp; COURSES & FEES </b>
                                    </div>    
                                    <div class = "buttondesign"> 
                                    <button class="btn btn-block btn-outline apply " type="submit">APPLY NOW</button> 
                                    <button class="btn btn-block btn-outline bro " type="submit">BROCHURE</button>
                                    </div>                            
                            </div>
                            );    
})}
                    </div>    
            </div>
        )
    }
}
