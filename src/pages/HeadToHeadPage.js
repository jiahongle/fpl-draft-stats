import React from 'react';
import AppTable from '../components/AppTable'

/**
 * Displays infographics for:
 * - headToHeadRecords
 * */
const HeadToHeadPage = () =>{
  return (
    <div>
      <AppTable
        filePath={"https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/headToHeadRecords.csv"}
        tableName={"Head To Head"}
      />
    </div>
  );
}
export default HeadToHeadPage;