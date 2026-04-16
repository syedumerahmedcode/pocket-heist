// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
    <Clock8 className="logo" strokeWidth={2.75} />Pocket Heist
  </h1>
    <div>Missions. Mayhem. Mondays sorted.</div>
        <p className="intro">
          Welcome to Pocket Heist — the only task manager that makes stealing
          the last coffee pod feel like a carefully orchestrated operation.
          Assign sneaky missions to your colleagues, rack up points, and prove
          once and for all who runs this office.
        </p>
      </div>
    </div>
  )
}
