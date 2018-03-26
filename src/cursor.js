import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

require('./index.css');

class Cursor extends Component {
    render() {
        //Icon
        $(document).mousemove(function(e){
            $('#cursor-icon').css({left:e.pageX-15, top:e.pageY-25});
        });
        $(document).bind('touchstart',function(e){
            $('#cursor-icon').css({ left:e.originalEvent.touches[0].pageX-15, top:e.originalEvent.touches[0].pageY-25 });            
        });
        $(document).bind('touchmove',function(e){
            $('#cursor-icon').css({ opacity: 0 });            
        });

        //Text
         $(document).mousemove(function(e){
            $('#cursor-text').css({left:e.pageX-50, top:e.pageY-60});
        });
        $(document).bind('touchstart',function(e){
            $('#cursor-text').css({ left:e.originalEvent.touches[0].pageX-50, top:e.originalEvent.touches[0].pageY-60 });            
        });
        $(document).bind('touchmove',function(e){
            $('#cursor-text').css({ opacity: 0 });            
        });

      return (
        <div>
            <div style={{
                    fontSize: '23px',
                    color: '#446E9B',
                    position: 'absolute',
                    zIndex: 1,
                    opacity: this.props.cursorTextOpacity,
                    transition: 'opacity 0.1s'
                }}
            id='cursor-text'>
                Click For Details
            </div>
            <div style={{ 
                    width:0, 
                    height: 0,
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderTop: '23px solid #f46b42',
                    position: 'absolute',
                    zIndex: 1,
                    opacity: this.props.cursorOpacity,
                    transition: 'opacity 0.1s'
                }} 
            id='cursor-icon'>
            </div>
        </div>
      );
    }
  }

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        cursorOpacity: state.cursorOpacity,
        cursorTextOpacity: state.cursorTextOpacity
    }
}

export default connect(mapStateToProps)(Cursor);  