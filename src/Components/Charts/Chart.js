import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart=props=>{
    const dataPointsValue= props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum=Math.max(...dataPointsValue);
    return <div className="chart">

        {props?.dataPoints?.length !== 0 && props?.dataPoints?.map((dataPoint)=>{
            return(
                <ChartBar key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum} 
                label={dataPoint.label} />

            )
        }
       )}
    </div>
};
export default Chart;