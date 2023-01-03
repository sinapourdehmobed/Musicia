

import P5 from 'p5';
import * as Tone from 'tone';


import { Visualizer } from '../Visualizers';


export const MyatVisualizer = new Visualizer(
    'MyatKyaw121',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;


        const colorArray=['red','green','blue'];


        let index=0;
        let changeEllipseColor=()=>{
            index++;
            if(index>2){
                index=0;
            }
            return colorArray[index];
        }

        let calculateDimension=(width:number,height:number)=>{
            return  (Math.min(width, height)*0.25);
        }
        let draw=(x: number, y: number, w: number, h: number ,color2:string)=>{
            p5.stroke(`${color2}`);
            p5.ellipse(x,y,w,h*(0.65))
        }

        let makeCircle=(width:number,height:number,diameter:number)=>{
            p5.stroke('red')
            p5.circle(width, height, diameter);
        }
        let makeLines=(n:number,x:number,y:number)=>{
            switch (n){

                case 1:
                    draw(x-200,height*.11,1,y/2,'blue')
                    break;
                case 2:
                    draw(x-200,height*.4,1,y/2,'blue')
                    break;
                case 3:
                    draw(x-200,height*.77,1,y/2,'cyan')
                    break;

            }

        }

        let dim=calculateDimension(width,height);
        
        p5.background('black');

        p5.strokeWeight(dim*0.1);

        const values = analyzer.getValue();
        for (let i = 0; i < values.length; i++) {
            
            const amplitude = values[i] as number;
            const x = p5.map(i, 0, values.length - 1, 0, width);
            const y = 3 * amplitude * height;

            makeLines(1,x,y)
            makeCircle(width*0.5-400,height*0.44,amplitude*height*0.7)
            makeCircle(width*0.5-100,height*0.44,amplitude*height*0.7)
            makeLines(3,x,y)

        }
    },
);
