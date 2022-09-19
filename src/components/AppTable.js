import { useState } from "react"
import CsvParser from "../utils/CsvParser"
import { Button, Collapse, Table } from 'react-bootstrap'
import "./AppTable.css"

const AppTable = (props) => {
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)

  CsvParser(props.filePath, setData)

  const labels = data?.meta.fields
  
  return (
    <div className="table">
      <Button className="expandButton"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.tableName}
      </Button>
      <Collapse in={open}>
        <div>
          <Table>
            <thead><tr>{labels?.map(column => <th>{column}</th>)}</tr></thead>
            {data?.data.map(row => {
              return (
                <tr>
                  {labels?.map((label, i) => {
                    return (i !== 0 ? 
                      <td>{row[label]}</td>
                      : <th>{row[label]}</th>)
                  }
                  )}
                </tr>
              );
            })}
          </Table>
        </div>
      </Collapse>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  )
}

export default AppTable




            // <td>{row[labels[0]]}</td>
            // <td>{row[1]}</td>
            // <td>{row[2]}</td>
            // <td>{row[3]}</td>
            // <td>{row[4]}</td>
            // <td>{row[5]}</td>
            // <td>{row[6]}</td>
            // <td>{row[7]}</td>
            // <td>{row[8]}</td>
            // <td>{row[9]}</td>
            // <td>{row[10]}</td>