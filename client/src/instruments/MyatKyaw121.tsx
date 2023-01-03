import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

import { Instrument, InstrumentProps } from '../Instruments';

interface GuitarCordProps {
    note: string;
    synth?: Tone.Synth;
    index: number;
}

export function GuitarChord({
                                note,
                                synth,
                                index,
                            }: GuitarCordProps): JSX.Element {

    const play=()=>{

        let local_val=1.1
        console.log(`${note}`)



        switch(`${note}`)
        {
            case 'A2':
                local_val+=0.1
                break;
            case 'B2':
                local_val+=0.3
                break;
            case 'C2':
                local_val+=0.5
                break;
            case 'D2':
                local_val+=0.6
                break;
            case 'E2':
                local_val+=0.7
                break;
            case 'F2':
                local_val+=0.8
                break;
            case 'G2':
                local_val+=0.9
                break;
        }
        console.log(local_val)
        synth?.triggerAttackRelease(`${note}`,local_val);
    }


    const local_style:React.CSSProperties={
        left: `${index * 4}rem`,
        width: '10px',
        height: '300px',
        marginRight:'100px'

    }

    return (
        <div
            onClick={() => play()}
            className={classNames('ba pointer absolute bg-light-red', {
            })}
            style={local_style}
        ></div>
    );
}

function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element {
    const guitarChords = List([
        { note: 'A', idx: 0.7},
        { note: 'B', idx: 1.3},
        { note: 'C', idx: 1.8},
        { note: 'D', idx: 2.3 },
        { note: 'E', idx: 2.8},
        { note: 'F', idx: 3.3},
        { note: 'G', idx: 3.8},
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();


            let local_type=`${newType}`
            console.log(`new type is ${newType}`)


            // fmsawtooth
            // fmtriangle

            let temp_params={
                oscillator: {
                    type: newType
                } as Tone.OmniOscillatorOptions,
                volume:-5,
                portamento : 0.005,
                envelope:{
                    attack: 1,
                    attackCurve:'step',
                    decay: 0.002,
                    decayCurve:'exponential',
                    sustain: 0.002,
                    release: 2
                },
            };

            let default_attack=1;
            let default_vol=-5;
            if(local_type==='fmsawtooth')
            {
                default_attack=0.5;
                default_vol=-9;

            }

            if(local_type==='fmtriangle')
            {
                default_attack=0.6;
                default_vol=-8;
            }


            return new Tone.Synth({
                    oscillator: {
                        type: newType
                    } as Tone.OmniOscillatorOptions,
                    volume:default_vol,
                    portamento : 0.005,
                    envelope:{
                        attack: default_attack,
                        attackCurve:'step',
                        decay: 0.002,
                        decayCurve:'exponential',
                        sustain: 0.002,
                        release: 2
                    },
                }
            ).toDestination();
        });
    };

    const oscillators: List<OscillatorType> = List([
        'sine5',
        'square',
        'triangle',
        'fmsine',
        'fmsawtooth',
        // 'fmtriangle',
        // 'amsine',
        // 'amsawtooth',
        // 'amtriangle',
    ]) as List<OscillatorType>;

    const oscillators2: List<OscillatorType> = List([
        'sine',
        'fmtriangle',
        'amsine',
        'amsawtooth',
        'amtriangle',
    ]) as List<OscillatorType>;

    const inner_style:React.CSSProperties={
        // borderRadius:'15px',
        // alignContent:"Center",
        //  alignSelf:'Center',
        //  justifySelf:'Center',
        height: '300px',
        width: '300px',
        backgroundColor: 'black',
        marginLeft:'100px',
        borderRadius: '50%',
        // display: 'inline-block',
    }


    const oscillator_style:React.CSSProperties={
        // borderRadius:'15px',
        // alignContent:"Center",
        //  alignSelf:'Center',
        //  justifySelf:'Center',
        height:'100px',
        marginLeft:'300px',
        display:'flex',
        marginRight:'50px',
        // display: 'inline-block',
    }

    return (
        <div className="pv5-l  bg-left  w-100 bg-light-gray"
             style={{
                 backgroundColor:'#deb887'
                 // alignContent:"Center",
                 //  alignSelf:'Center',
                 //  justifySelf:'Center',
                 //  height: '100px',
                 //  width: '100px',
                 //  backgroundColor: '#bbb',
                 //  borderRadius: '50%',
                 //  display: 'inline-block',

             }}
        >


            <div className="relative dib h2  w-100 ml4 bg-black bg-left"
                 style={inner_style}
            >

                {
                    guitarChords.map(guitar_key => {
                        return (
                            <GuitarChord
                                note={`${guitar_key.note}${2}`}
                                synth={synth}
                                index={ 0.2 +guitar_key.idx}
                            />
                        );
                    })

                }
                <div className={'pl2 pt5 flex bg-light-grey'}
                     style={oscillator_style
                     }>
                    {oscillators.map(o => (
                        <GuitarTuneType
                            title={o}
                            onClick={() => setOscillator(o)}
                        />
                    ))}
                </div>
                <div className={'pl2 pt5 flex bg-light-grey'}
                     style={oscillator_style
                     }>
                    {oscillators2.map(o => (
                        <GuitarTuneType
                            title={o}
                            onClick={() => setOscillator(o)}
                        />
                    ))}
                </div>
            </div>



        </div>
    );
}

function GuitarTuneType({ title, onClick }: any): JSX.Element {
    console.log(`${title}`)
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', { })}
        >
            {title}
        </div>
    );
}


export const MyatKyaw121 = new Instrument("Myat's Instrument", Guitar);


