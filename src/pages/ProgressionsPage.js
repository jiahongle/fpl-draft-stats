import React from 'react';
import LineChart from '../components/LineChart';

/**
 * Displays infographics for:
 * - leagueStandingProgression
 * - totalScoreAvgDiffProgression
 * - totalScoreProgression
 * */
const rgbs = [
  "rgb(255, 0, 0)",
  "rgb(255, 128, 0)",
  "rgb(255, 255, 0)",
  "rgb(128, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 128)",
  "rgb(0, 255, 255)",
  "rgb(0, 128, 255)",
  "rgb(0, 0, 255)",
  "rgb(128, 0, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 0, 128)"
]

const ProgressionsPage = () =>{
  return (
    <div>
      <LineChart
        filePath={'https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/totalScoreProgression.csv'}
        chartLabel={"Total Score Progression"}
        xLabel={"Gameweek"}
        yLabel={"Points"}
        rgbArray={rgbs}/>
      <LineChart
        filePath={'https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/leagueStandingProgression.csv'}
        chartLabel={"League Standing Progression"}
        xLabel={"Gameweek"}
        yLabel={"Position"}
        reverse={true}
        rgbArray={rgbs}/>
      <LineChart
        filePath={'https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/totalScoreAvgDiffProgression.csv'}
        chartLabel={"Total Score Avg Diff Progression"}
        xLabel={"Gameweek"}
        yLabel={"Points"}
        rgbArray={rgbs}/>
    </div>
  );
}
export default ProgressionsPage;