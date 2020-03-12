import React from 'react'
import { rating_search } from '../../actions/actions'
import { connect } from 'react-redux'

const Rating = (props) => {
let starArray=[]
for (let i=0;i<5;i++){
    if (i<props.rate){
starArray.push(
  <span key={i} role="img" onClick={()=>props.rating_search(i+1)}>★</span>
)
    }
    else {
      starArray.push(
        <span key={i} role="img" onClick={()=>props.rating_search(i+1)}>✰</span>
      )
    }
}


  return <div> {starArray}</div>
  
}



export default connect(null,{rating_search})(Rating)