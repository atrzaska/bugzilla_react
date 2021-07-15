import { useParams } from 'react-router-dom'
import Tab from 'src/components/Tab'

const ProjectTabs = () => {
  const { id } = useParams()

  return (
    <ul className="nav nav-tabs mb-3">
      <Tab to={`/projects/${id}/current`}>Current</Tab>
      <Tab to={`/projects/${id}/backlog`}>Backlog</Tab>
      <Tab to={`/projects/${id}/icebox`}>Icebox</Tab>
      <Tab to={`/projects/${id}/done`}>Done</Tab>
      <Tab to={`/projects/${id}/members`}>Members</Tab>
    </ul>
  )
}

export default ProjectTabs
