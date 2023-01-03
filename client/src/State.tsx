// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import {MyatVisualizer} from "./visualizers/MyatKyaw121";
import { WaveformVisualizer } from './visualizers/Waveform';
import {MyatKyaw121} from "./instruments/MyatKyaw121";
import {eloyVisualizer} from "./visualizers/eloyf26";
import {sinaVisualizer} from "./visualizers/sinapourdehmobed";
import {eloyf26} from "./instruments/eloyf26";
import {sinapourdehmobed} from "./instruments/sinapourdehmobed";
import {vsomisetty1} from "./instruments/vsomisetty1";
import { vsomiVisualizer } from './visualizers/vsomisetty1';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument,MyatKyaw121,eloyf26,sinapourdehmobed,vsomisetty1]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer,MyatVisualizer,eloyVisualizer,sinaVisualizer,vsomiVisualizer]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});
