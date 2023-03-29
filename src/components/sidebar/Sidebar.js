import React from 'react'

import Projects from './Projects'
import TeamMembers from './TeamMembers'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Projects/>
      <TeamMembers/>
    </div>
  )
}

export default Sidebar