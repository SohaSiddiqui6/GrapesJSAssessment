import './styles/main.css'
const ArtworkBlock = (editor) => {
    const blockManager = editor.BlockManager;
    blockManager.add('my-block-id', {
        // ...
        label:"ArtWork Presenter",
        attributes: {
          class: 'fa fa-cube'
      },
        content: {
          tagName: 'Root',
          draggable: true,
          editable: true,
          style: {
            height: '100%',
            width: '100%',
            position: 'absolute'
          },
          components: [
            {
                name: 'Background Veil',
                activeOnRender: 1,  
              content: ' <img src="https://i0.wp.com/www.charcoalgravel.com/wp-content/uploads/2018/10/feature-gall.jpg?w=1400&ssl=1"/>',
              style: {
                position:'absolute',
                opacity: '0.6'
              },
            }, {
              name: 'Container',
              components: [
                  {
                      name: 'Left Conatiner',
                      type:'div',
                      style:{
                        top : '20%',
                        left: '30%',
                        position:'absolute',
                        background:'white'
                      },
                      components : [
                          {
                            name: 'Artwork Image',
                            type:'image-block',
                            activeOnRender: 1,
                            content : '<img src="https://m.media-amazon.com/images/I/91Q0mrhpGBL._AC_UL320_.jpg"/>',
                            style: {
                                padding:"20px"
                                },
                        },
                        {
                            name:'Artwork Text',
                            type:'text',
                            content:'<p><em style="font-size:10px">Click on the image to zoom in</em></p>',
                             style:{
                                margin: "-10px 20px",
                           
                            }


                        },

                      ],


                },
                {
                    name: 'Right Conatiner',
                      type:'div',
                      style:{
                        top : '20%',
                        left: '48%',
                        width:"300px",
                        height: "383px",
                        position:'absolute',
                        background:'white'
                      },
                      components : [
                          {
                            name: 'Logo',
                            type:'image-block',
                            activeOnRender: 1,
                            content : '<img style="width:180px;height:80px"src="https://www.refractiv.co.uk/wp-content/uploads/2015/01/snap-logo.jpg"/>',
                            style: {
                                padding:"30px 60px",
                                },
                        },
                        {
                            name:'Artist Name',
                            type:'text',
                            content:'<p><b style="font-size:25px">Harry Borden</b></p>',
                             style:{
                                margin: "0px 65px",  
                            }

                        },
                        {
                            name:'Art Name',
                            type:'text',
                            content:'<p><b style="font-size:20px">Baroness Thatcher</b></p>',
                             style:{
                                margin: "0px 65px",  
                            }

                        },
                        {
                            name:'Date',
                            type:'text',
                            content:'<p style="font-size:15px">London 2006</p>',
                             style:{
                                margin: "-15px 100px",  
                            }

                        }, {
                            name:'Artwork Description',
                            type:'text',
                            content:'<p style="font-size:10px">Limited edition photograph available in choice of physical size</p>',
                             style:{
                                margin: "25px 100px",  
                            }

                        },
                        {
                            name:'Exit Button',
                            type:'Button',
                            content:'<button style="background:none;border:none"><b>X</b></button>',
                             style:{
                                margin: "-290px 270px", 
                                position:"absolute"
                            }

                        },
                        {
                            name:'Enquire Button',
                            type:'Button',
                            content:'<button style="background:black;color:white;border:none;width:160px;border-radius:0.5rem;padding:10px">Price and size info</button>',
                             style:{
                                margin: "0px 65px", 
                                position:'absolute'
                            }

                        }

                    
                    
                    
                    

                      ],
                }
            ],
            }
          ]
        }
      })
}
 
export default ArtworkBlock;