import { useState } from 'react'
import './App.css'
import Data from './database.json'

function App() {
  const [data] = useState(Data)
  const totalCars = data.reduce((s, d) => s + (d.carCount || 0), 0)

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">MD</div>
          <div>
            <h1 className="sidebar-title">Monitoring</h1>
            <p className="sidebar-sub">Live dashboard</p>
          </div>
        </div>

        <div className="section-title">Views</div>
        <a className="nav-item active" href="#"> <span className="dot"></span>Overview</a>
        <a className="nav-item" href="#"> <span className="dot"></span>Cameras</a>
        <a className="nav-item" href="#"> <span className="dot"></span>Settings</a>
      </aside>

      <main className="content">
        <header className="header">
          <div className="brand">
            <div className="logo float">MD</div>
            <div>
              <h1 className="header-title">Monitoring Dashboard</h1>
              <p className="header-sub">Real-time camera merge counts</p>
            </div>
          </div>

          <div className="row">
            <div className="badge">Live</div>
          </div>
        </header>

        <div className="grid">
          <div className="card">
            <div className="title">Total Cars</div>
            <div className="metric">
              <div className="value">{totalCars}</div>
              <div className="label">Across {data.length} cameras</div>
            </div>
          </div>

          <div className="card">
            <div className="title">Active Cameras</div>
            <div className="metric">
              <div className="value">{data.length}</div>
              <div className="label">Reporting</div>
            </div>
          </div>

          <div className="card">
            <div className="title">Traffic Health</div>
            <div className="status up"><span className="dot"></span><span className="small">All systems operational</span></div>
          </div>

          <div className="card full">
            <div className="flex-between-baseline">
              <div>
                <div className="title">Camera table</div>
                <div className="subtitle">Live feed of camera merge counts</div>
              </div>
            </div>

            <div className="spacer-12" />

            <table className="table">
              <thead>
                <tr>
                  <th>Camera ID</th>
                  <th>Merge ID</th>
                  <th>Car Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.cameraID}</td>
                    <td>{d.mergeID}</td>
                    <td>{d.carCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
