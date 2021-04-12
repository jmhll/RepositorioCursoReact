import React from 'react';

function ClipBoard(){

    let handlerClipBoard = (event) => {
        let data = event.clipboardData.getData('Text');
        
        console.log(`Texto en el clipboard: ${data || "<Sin datos>"}`);
      }
      
      return (
        <div className="input-group container">
          <input type="text" onPaste={handlerClipBoard} />
        </div>
      );
}

export default ClipBoard;