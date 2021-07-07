import { Button } from 'bootstrap';
import './styles/main.css'
const ButtonComponent = (editor) => {
    const blockManager = editor.BlockManager;
    blockManager.add('-id', {
        attributes: {
            class: "gjs-fonts gjs-f-button"
        },
        category: 'basic',
        label: 'Button',
        content: {
            tagName: 'Button',
            draggable: true,
            editable: true,
            droppable: true,
            content: '<button type="button" style="background-color:blue;border:none;color:white;width:200px">Click me!</button>',
            style:{
                margin: '50px 50px'
            }
        },
    }
        )
        
}
 
export default ButtonComponent;