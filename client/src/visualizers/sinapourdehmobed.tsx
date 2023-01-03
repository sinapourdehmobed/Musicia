// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const sinaVisualizer = new Visualizer(
  'sinapourdehmobed',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight/4 ;
    const dim = Math.min(width, height);

    p5.background(128,128,128);
    p5.strokeWeight(dim * 0.007);
    p5.noFill();

    let createTriangle1=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
      p5.stroke('violet')
      p5.triangle(x1*1-270,y1*1+30,x2*1-50,y2*0.1-10,x3*1-86,y3*1+75);
}
    let createTriangle2=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
      p5.stroke('blue')
      p5.triangle(x1*1-270,y1*1+30,x2*1-40,y2*0.1-10,x3*1-76,y3*1+85);
}
    let createTriangle3=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
      p5.stroke('green')
      p5.triangle(x1*1-270,y1*1+30,x2*1-30,y2*0.1-10,x3*1-66,y3*1+95);
}
    let createTriangle4=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
      p5.stroke('yellow')
      p5.triangle(x1*1-270,y1*1+30,x2*1-20,y2*0.1-10,x3*1-56,y3*1+105);
}
    let createTriangle5=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
    p5.stroke('orange')
    p5.triangle(x1*1-270,y1*1+30,x2*1-10,y2*0.1-10,x3*1-46,y3*1+115);
  } 
    let createTriangle6=(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)=>{
    p5.stroke('red')
    p5.triangle(x1*1-270,y1*1+30,x2*1-5,y2*0.1-10,x3*1-36,y3*1+125);
  } 



    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
      createTriangle1(width,height,y,width,height,y)
      createTriangle2(width,height,y,width,height,y)
      createTriangle3(width,height,y,width,height,y)
      createTriangle4(width,height,y,width,height,y)
      createTriangle5(width,height,y,width,height,y)
      createTriangle6(width,height,y,width,height,y)





    }
    p5.endShape();
  },
);

