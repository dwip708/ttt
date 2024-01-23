import Line123 from "./Lines/Line123";
import Line147 from "./Lines/Line147";
import Line159 from "./Lines/Line159";
import Line258 from "./Lines/Line258";
import Line357 from "./Lines/Line357";
import Line369 from "./Lines/Line369";
import Line456 from "./Lines/Line456";
import Line789 from "./Lines/Line789";

export default function DrawLines({win,squares,lines,setLines}){
    console.log("inside");
    console.log(lines);
    
    for(let i=0;i<8 ;i++)
    {
        

        let p = <></>;
        if(lines[0]===true)
            p=<Line123/>
        else if(lines[1]===true)
            p=<Line147/>
            else if(lines[2]===true)
            p=<Line456/>
            else if(lines[3]===true)
            p=<Line789/>
            else if(lines[4]===true)
            p=<Line258/>
            else if(lines[5]===true)
            p=<Line369/>
            else if(lines[6]===true)
            p=<Line159/>
            else if(lines[7]===true)
            p=<Line357/>
            else
            p=<></>
            
            
     

       
        
        return(
           <>{p}</>
        );
        
        // const nextLines = lines.slice();
        // nextLines[i] = true;
        // console.log(nextLines);
            
            
                
            
        }
    }
    
