import React from 'react';


const DrumVisualizer = (props) => {
        console.log('Rendering DrumVisualizer');       
        return(
            <div className="drumVisualizer">
                <div className='drumVisLeft'>
                {props.playlist === 'BANK 1' && props.keyPressed !== ''? 
                    props.firstPlayList.filter(x => x.key === props.keyPressed)[0].name.toUpperCase() :
                        props.playlist === 'BANK 2' && props.keyPressed !== ''? 
                            props.secondPlayList.filter(x => x.key === props.keyPressed)[0].name.toUpperCase(): 
                                ''
                }
                </div>
                <div className='drumVisRight'>{props.parOnOff? `VOL:${props.parVolume}`: ''}</div>              
            </div>
        )    
}


export default DrumVisualizer;

