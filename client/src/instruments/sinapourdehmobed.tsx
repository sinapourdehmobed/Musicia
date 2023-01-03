import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import { Instrument, InstrumentProps } from '../Instruments';
import React from 'react'
import { useState } from 'react'; 

interface DrumBeatProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    minor?: boolean; // True if minor key, false if major key
    octave: number;
    index: number;
}

export function DrumBeat({
                              note,
                              octave,
                              synth,
                                minor,
                              index,}: DrumBeatProps): JSX.Element {
                                const [newSample] = useState(
                                    new Tone.Sampler({
                                      urls:{
                                        B1: "drum.mp3",
                                        B4: "drum.mp3",
                                      },
                                    }).toDestination()
                                  );
                                    
                                  const drum_sample = (note: string) => {
                                    newSample.triggerAttackRelease([`${note}`], 1);
                                  };
    return (
        <div
            onMouseDown={() => drum_sample(`${note}`)} 
            onMouseUp={() => synth?.triggerRelease('+0.05')}
            className={classNames('ba pointer absolute dim',
            {
                'bg-black black h3': minor, 
                'black bg-white h4': !minor, 
            }

            )}
            style={{
                left: `${index *8}rem`,
                alignItems: 'center',
                width: '100px',
                height: '100px',
                borderRadius: '60px',
                backgroundColor: 'yellow',
                marginLeft: '20px'
            }}
        ></div>
    );
}


function DrumBeatType({ title, onClick,active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
                'b--black black': active,
                'gray b--light-gray': !active,})}
        >
            {title}
        </div>
    );
}

function Drum({ synth, setSynth }: InstrumentProps): JSX.Element {
    const DrumBeats = List([
        { note: 'C', idx: 0},
        { note: 'D', idx: 1},
        { note: 'E', idx: 2},
        { note: 'Gb', idx: 3},
        { note: 'Ab', idx: 4},
        { note: 'B', idx: 5},
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();
            return new Tone.Synth({
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                
            }).toDestination();
        });
    };

    const oscillators: List<OscillatorType> = List([
        'sine',
        'sawtooth',
        'square',
        'triangle',
        'fmsine',
        'fmsawtooth',
        'fmtriangle',
        'amsine',
        'amsawtooth',
        'amtriangle',
    ]) as List<OscillatorType>;

    return (
        <div className="pv4">
            <div className="relative dib h4  w-100 ml4"
                 style={{
                     height: '100px',
                     width: '770px',
                     backgroundColor: 'lightblue'}}>


                {Range(2, 3).map(octave =>
                    DrumBeats.map(key => {
                        const isMinor = key.note.indexOf('b') !== -1;
                        const note = `${key.note}${octave}`;
                        return (
                            <DrumBeat
                                key={note} //react key
                                note={note}
                                synth={synth}
                                minor={isMinor}
                                octave={octave}
                                index={(octave - 2) * 7 + key.idx}
                            />
                        );
                    }),
                )}

            </div>
            <div className={'pl4 pt4 flex'} >
                {oscillators.map(o => (
                    <DrumBeatType
                        title={o}
                        onClick={() => setOscillator(o)}
                        active={synth?.oscillator.type === o}
                    />
                ))}
            </div>
        </div>
    );
}



export const sinapourdehmobed = new Instrument("Sina's Instrument", Drum);
