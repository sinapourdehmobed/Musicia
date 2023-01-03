import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';



export const vsomiVisualizer = new Visualizer(
    'vsomisetty1',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
    
        p5.background(32, 66, 132, 255);
    
        p5.strokeWeight(-5);
        p5.stroke(255, 23, 154, 255);
        p5.angleMode("radians");
        p5.noFill();
        p5.translate(750, 200);
    
        const values = analyzer.getValue();
        p5.beginShape();
        for (let i = 0; i < values.length; i++) {
          const amplitude = values[i] as number;
          let r = p5.map(amplitude * 200, 0, 150, 180, 250);
          const x = r * Math.sin(i*2);
          const y = r * Math.cos(i);
          
          // Place vertex
          p5.vertex(x*2, y);
        }
        p5.endShape();
      },
    );