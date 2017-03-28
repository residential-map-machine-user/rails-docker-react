/**
 * Created by yukimatsuyama on 2017/03/27.
 */
import React from 'react'
export default class Navigator extends React.Component{
    render(){
       return (
           <nav>
               <div className="nav_list-wrap">
                   <ul>
                       <li>left1 contnets</li>
                       <li>left2 contents</li>
                   </ul>
               </div>
               <div>
                   <ul>
                       <li>right1</li>
                       <li>rihgt2</li>
                       <li>rihgt3</li>
                       <li>rihgt4</li>
                   </ul>
               </div>
           </nav>
       )
    }
}
