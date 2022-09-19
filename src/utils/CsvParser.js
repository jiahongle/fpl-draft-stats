import Papa from 'papaparse'
import { useEffect } from 'react'

const CsvParser = (filePath, setData) => {

  useEffect(() => {
    console.log("Parsing from: ", filePath)
    Papa.parse(filePath, {
      download: true,
      header: true,
      complete: data => {
        console.log("Finished:", data)
        setData(data)
      }
    })
  }, [filePath, setData])

}

export default CsvParser