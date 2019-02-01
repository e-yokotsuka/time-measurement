import { performance } from "perf_hooks";

class TimeMasurement
{
    logOutFunc = text =>{ throw text }
    measuringPoints = new Map();

    constructor(logOutFunc){
        if( logOutFunc ) this.logOutFunc = logOutFunc;
        this.measuringPoints.set("",performance.now());
    }

    measurement = (func =()=>{}, name = "" ) =>
    {
        const startTime = performance.now();
        func();
        const t = Math.round(performance.now() - startTime);       
        this.logOutFunc(`${name}${name && "="}${t}msec`);
    }

    StartMeasurement = (pointName = "") => this.measuringPoints.set(pointName,performance.now());
    EndMeasurement = (pointName = "") => this.logOutFunc(`${pointName} = ${Math.round(performance.now() - this.measuringPoints.get(pointName))} msec`);
}

export default TimeMasurement;
