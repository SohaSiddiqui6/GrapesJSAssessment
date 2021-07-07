import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebage from "grapesjs-preset-webpage";
import "./styles/main.css";
import ArtworkBlock from "./ArtworkBlock";

const Editor = () => {

  useEffect(() => {
    const editor = grapesjs.init({  
      container: "#gjs",
      fromElement: true,
      storageManager: false,
      canvas: {
        styles: [
          '/styles/main.css',
        ]
      },
      blockManager : {
        appendTo: '#my-block-id',
    // Append blocks to canvas on click
        appendOnClick: 0,
        blocks: []
      },
      plugins: [gjsPresetWebage],
      pluginsOpts: {
        gjsPresetWebage: {},
      },
    });

    ArtworkBlock(editor);
  }, []);
  
  

//   return <div id="editor"> </div>;
return (
    <>
    <div id="gjs"></div>
    <div id="my-block-id"></div>
    {/* <CustomBlocks editor={editor}/> */}
    
    </>
)
    
    
  
 
}

export default Editor;