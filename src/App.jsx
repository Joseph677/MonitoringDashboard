import { useState } from 'react'
import './App.css'
import Data from './database.json'

function App() {
  const data = useState(Data)

  return (
    <>
      <table>
        <thead>
        <tr>
          <th>Camera ID</th>
          <th>Merge ID</th>
          <th>Car Count</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{data[0][0].cameraID}</td>
          <td>{data[0][0].mergeID}</td>
          <td>{data[0][0].carCount}</td>
        </tr>
        <tr>
          <td>{data[0][1].cameraID}</td>
          <td>{data[0][1].mergeID}</td>
          <td>{data[0][1].carCount}</td>
        </tr>
        <tr>
          <td>{data[0][2].cameraID}</td>
          <td>{data[0][2].mergeID}</td>
          <td>{data[0][2].carCount}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
