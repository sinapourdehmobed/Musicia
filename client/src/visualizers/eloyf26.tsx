// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import { Abs } from 'tone';

// project imports
import { Visualizer } from '../Visualizers';




export const eloyVisualizer = new Visualizer(
  'eloyf26',
  (p5: P5, analyzer1: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    //radius: distance to centre
    //angle
    //diameter: diameter of the circle
    
    let makeCircle= (radius:number,angle:number,diameter:number)=>{
      //86400 seconds per day, 3600 per hour,60 per minute
      //how many seconds have passed today:
      function getSecondsToday() {
        let d = new Date();
        if (d.getSeconds()<20){
          if (d.getSeconds()<10){
            return d.getSeconds()
          }
          return Math.abs(d.getSeconds()-20)
        }
        if (d.getSeconds()<40){
          if (d.getSeconds()<30){
            return d.getSeconds()-20
          }
          return Math.abs(d.getSeconds()-40)
        }
        if (d.getSeconds()<50){
          return d.getSeconds()-40
        }
        return Math.abs(d.getSeconds()-60)
      }

      let x=(radius*Math.cos(angle))+470
      let y=(radius*Math.sin(angle))+150
      let color1= 255*((angle*2/(Math.PI*2)+radius/120)/2)-50
      let color2=Math.abs(255*((angle*3/(Math.PI*2)+radius/120)/2)-255)
      p5.stroke(255*(getSecondsToday()/86400)+125,color1*(getSecondsToday()/15)+60,color2*(getSecondsToday()/15))
      p5.circle(x,y,diameter*0.8)
    }

    p5.background(155, 100, 100)
    p5.strokeWeight(dim * 0.02);
    

    p5.noFill();

    const amountofcircles:number=12
    const values = analyzer1.getValue();

    for (let j=0; j< values.length;j++){
        
      for (let i = 0; i < amountofcircles; i++) {
        const amplitude = values[j] as number;
    
        if(i*2*Math.PI/(amountofcircles)<Math.PI){
          makeCircle(120,i*2*Math.PI/(amountofcircles),amplitude*(height-250)+i*Math.PI/(amountofcircles/1.5)*20)  
        }
        if(i*2*Math.PI/(amountofcircles)>=Math.PI){
          makeCircle(120,i*2*Math.PI/(amountofcircles),amplitude*(height-250)+(amountofcircles/2+(amountofcircles/2-i))*Math.PI/(amountofcircles/1.5)*20)  
        }
        
      }
      
    }
  },
);
