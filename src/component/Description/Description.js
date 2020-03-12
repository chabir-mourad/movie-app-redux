import React from "react";
import { connect } from "react-redux";

function Description(props) {
  const movie = props.trailer.filter( 
    el =>el.id == props.match.params.id
  );
  
  return (
      <div>
        
      <iframe
        height="350"
        width="610"
        title="trailer"
        frameborder="0" 
        allowfullscreen
        src={movie[0].trailer}
    
      ></iframe>
      {console.log(movie[0].trailer)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
       trailer: state.movieItems };
};
export default connect(mapStateToProps)(Description);
