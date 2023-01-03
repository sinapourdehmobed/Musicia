// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react'
// project imports
import { Instrument, InstrumentProps } from '../Instruments'
import { stringify } from 'querystring';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface HarpStringProps {
  note: string; // C, D, E, F, G, A, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function HarpString({
  note,
  synth,
  octave,
  index,
}: HarpStringProps): JSX.Element {
  /**
   * This React component corresponds to any string of the harp.
   */
   const string_style:React.CSSProperties={
    left: `${index}rem`,
    width: '3px',
    height: '180px',
    marginRight:'50px',
    marginLeft: '250px',
    backgroundColor: 'light grey',
 
    }
  return (
   
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)}  //start sound on-click
      onMouseUp={() => synth?.triggerRelease('+0.1')} 
      className={classNames('ba pointer absolute bg-grey')}
      style={string_style}
    ></div>


  );
}

function HarpType({ title, onClick, active }: any): JSX.Element {
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

function Harp({ synth, setSynth }: InstrumentProps): JSX.Element {
  const strings = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);
  

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
        envelope: { attack: 1,
          decay: 0.002,
          sustain: 0.002,
          release: 2,
          //release: 0.01 
        }       
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
  
  const instrument_space:React.CSSProperties={
    height: '200px',
    color: 'brown',
    flex:'0',
    //MozOutlineRadius: '50px'
    }
  const Oscilatorbox_style:React.CSSProperties={
    marginTop: '0px',
    height: '75px',
    width: '100px',
    color: 'grey'
    }  
  const arch_style1:React.CSSProperties={
    width:'500px',
    height:'200px',
    backgroundColor: 'brown',
    outlineColor:'brawn',
    flex:'1',
    marginLeft:'225px',
    borderRadius:'30px'
    }
  const arch_style2:React.CSSProperties={
    width:'475px',
    height:'160px',
    backgroundColor: 'white',
    alignContent:"Center",
    marginTop:'20px',
    marginRight:'20px',
    borderRadius:'30px',
    borderTopLeftRadius:'0px',
    borderBottomLeftRadius:'0px',
    }

  return (
    <div className="pv2">
      <div className={'pl4 pt0 pb2 flex'} >
        {oscillators.map(o => (
          <HarpType
            key={o}
            title={o}
            onClick={() =>  setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
      <div className=' crelative dib h2  w-100 ml4 bg-black bg-leftircle' style={arch_style1}>
        <div className='right-20 left-20'style={arch_style2}>
          <div className="white  right-0 left-0" style={instrument_space} >   
            {Range(0, 4).map(octave =>
              strings.map(string => {
                const note = `${string.note}${octave + 3}`;
                return (
                  <HarpString
                    note={note}
                    synth={synth}
                    octave={octave}
                    index={(octave) * 7 + string.idx}
                  />
                );
              }),
            )}
          </div>
        </div>
        
      </div> 
      
    </div>
  );
}

export const eloyf26 = new Instrument("eloy's instrument", Harp);
