import React from 'react';
import LineChart from '../components/LineChart';

/**
 * Displays infographics for:
 * - leagueStandingProgression
 * - totalScoreAvgDiffProgression
 * - totalScoreProgression
 * */
const ProgressionsPage = () =>{
  const NUM_PLAYERS = 12;
  const rgbs = [];
  for (var i = 0; i < NUM_PLAYERS; i++) {
    var r = (Math.floor(Math.random() * 255));
    var g = (Math.floor(Math.random() * 255));
    var b = (Math.floor(Math.random() * 255));
    rgbs.push("rgb(" + r + "," + g + "," + b + ")");

  }
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