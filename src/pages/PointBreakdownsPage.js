import React from 'react';
import AppTable from '../components/AppTable.js'

/**
 * Displays infographics for:
 * - bestClubsPerManager
 * - bestManagersByAction
 * - bestManagersByPosition
 * - bestPlayersPerManager
 * - bestPlayersOverall
 * */
const PointBreakdownsPage = () =>{
  return (
    <div>
      <AppTable
        filePath={"/extractor/csv/bestClubsPerManager.csv"}
        tableName={"Best Clubs Per Manager"}
      />
      <AppTable
        filePath={"/extractor/csv/bestManagersByAction.csv"}
        tableName={"Best Managers By Action"}
      />
      <AppTable
        filePath={"/extractor/csv/bestManagersByPosition.csv"}
        tableName={"Best Managers By Position"}
      />
      <AppTable
        filePath={"/extractor/csv/bestPlayersPerManager.csv"}
        tableName={"Best Players Per Manager"}
      />
      <AppTable
        filePath={"/extractor/csv/bestPlayersOverall.csv"}
        tableName={"Best Players Overall"}
      />
    </div>
  );
}
export default PointBreakdownsPage;