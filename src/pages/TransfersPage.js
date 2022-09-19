import React from 'react';
import AppTable from '../components/AppTable'

/**
 * Displays infographics for:
 * - mostTransferredPlayers
 * - mostTransfersByManager
 * */
const TransfersPage = () =>{
  return (
    <div>
      <AppTable
        filePath={"https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/mostTransfersByManager.csv"}
        tableName={"Most Transfers By Manager"}
      />
      <AppTable
        filePath={"https://raw.githubusercontent.com/jiahongle/fpl-draft-stats/master/public/extractor/csv/mostTransferredPlayers.csv"}
        tableName={"Most Transferred Players"}
      />
    </div>
  );
}
export default TransfersPage;