import React from 'react';
import LineChart from '../components/LineChart';

/**
 * Displays infographics for:
 * - leagueStandingProgression
 * - totalScoreAvgDiffProgression
 * - totalScoreProgression
 * */
const ProgressionsPage = () =>{
  return (
    <div>
      <LineChart 
        filePath={'/extractor/csv/totalScoreProgression.csv'}
        chartLabel={"Total Score Progression"}
        xLabel={"Gameweek"}
        yLabel={"Points"}/>
      <LineChart 
        filePath={'/extractor/csv/leagueStandingProgression.csv'}
        chartLabel={"League Standing Progression"}
        xLabel={"Gameweek"}
        yLabel={"Position"}
        reverse={true}/>
      <LineChart 
        filePath={'/extractor/csv/totalScoreAvgDiffProgression.csv'}
        chartLabel={"Total Score Avg Diff Progression"}
        xLabel={"Gameweek"}
        yLabel={"Points"}/>
    </div>
  );
}
export default ProgressionsPage;