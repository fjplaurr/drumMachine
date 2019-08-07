import React from 'react';


const Display = (props) => {
        console.log('Rendering Display');       
        return(
            <div className="display">
                <div>
                {props.playlist === 'BANK 1' && props.keyPressed !== ''? 
                    props.firstPlayList.filter(x => x.key === props.keyPressed)[0].name.toUpperCase() :
                        props.playlist === 'BANK 2' && props.keyPressed !== ''? 
                            props.secondPlayList.filter(x => x.key === props.keyPressed)[0].name.toUpperCase(): 
                                ''
                }
                </div>
                <div>{props.parOnOff? `VOL:${props.parVolume}`: ''}</div>              
            </div>
        )    
}


export default Display;

