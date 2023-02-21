import React from 'react'
import { collegeData } from '../collegedata';

export default class SearchCollege extends React.Component
{
    constructor()
    {
        super();
        this.state={  
            searchedCollege : sessionStorage.getItem("SC"),
            sortedlist : collegeData,
            arr : []
           
        }
        for(let i = 0; i<3 ; i++ )
        {
            
            if(this.state.sortedlist[i].collegeName === this.state.searchedCollege)
            {
                this.state.arr.push(this.state.sortedlist[i])
            }
        }
    }
    componentDidMount()
    {
       
    }
    render()
       
        {   
        return(
            <div class="container-fluid">
             <div class="row"> 
                            
                        { 
                        this.state.arr.map((data, key) => {
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
