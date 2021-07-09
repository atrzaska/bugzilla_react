import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CommentsEdit from 'src/views/Comments/Edit'
import CommentsNew from 'src/views/Comments/New'
import Confirm from 'src/views/Auth/Confirm'
import Dashboard from 'src/views/Dashboard/Index'
import Help from 'src/views/Pages/Help'
import MembersNew from 'src/views/Members/New'
import Landing from 'src/views/Pages/Landing'
import MembersList from 'src/views/Members/Index'
import MembersEdit from 'src/views/Members/Edit'
import Privacy from 'src/views/Pages/Privacy'
import ProjectsEdit from 'src/views/Projects/Edit'
import ProjectsList from 'src/views/Projects/Index'
import ProjectsNew from 'src/views/Projects/New'
import Recover from 'src/views/Auth/Recover'
import RecoverSuccess from 'src/views/Auth/RecoverSuccess'
import ResetPassword from 'src/views/Auth/ResetPassword'
import Signin from 'src/views/Auth/Signin'
import Signup from 'src/views/Auth/Signup'
import SignupSuccess from 'src/views/Auth/SignupSuccess'
import StoriesCurrent from 'src/views/Stories/Current'
import StoriesBacklog from 'src/views/Stories/Backlog'
import StoriesDone from 'src/views/Stories/Done'
import StoriesEdit from 'src/views/Stories/Edit'
import StoriesIcebox from 'src/views/Stories/Icebox'
import StoriesNew from 'src/views/Stories/New'
import TasksEdit from 'src/views/Tasks/Edit'
import TasksNew from 'src/views/Tasks/New'
import Terms from 'src/views/Pages/Terms'
import UsersSettings from 'src/views/Users/Settings'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/terms">
        <Terms />
      </Route>
      <Route path="/privacy">
        <Privacy />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signup/success">
        <SignupSuccess />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/recover">
        <Recover />
      </Route>
      <Route path="/recover/success">
        <RecoverSuccess />
      </Route>
      <Route path="/reset_password/:id">
        <ResetPassword />
      </Route>
      <Route path="/confirm">
        <Confirm />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/users/settings">
        <UsersSettings />
      </Route>
      <Route path="/projects/:id/current">
        <StoriesCurrent />
      </Route>
      <Route path="/projects/:id/backlog">
        <StoriesBacklog />
      </Route>
      <Route path="/projects/:id/icebox">
        <StoriesIcebox />
      </Route>
      <Route path="/projects/:id/done">
        <StoriesDone />
      </Route>
      <Route path="/projects/:id/members">
        <MembersList />
      </Route>
      <Route path="/projects/:id/members/:memberId/edit">
        <MembersEdit />
      </Route>
      <Route path="/projects/:id/members/new">
        <MembersNew />
      </Route>
      <Route path="/projects/:id/stories/new">
        <StoriesNew />
      </Route>
      <Route path="/projects/:projectId/stories/:id/edit">
        <StoriesEdit />
      </Route>
      <Route path="/projects/new">
        <ProjectsNew />
      </Route>
      <Route path="/projects/:id/edit">
        <ProjectsEdit />
      </Route>
      <Route path="/stories/:storyId/comments/new">
        <CommentsNew />
      </Route>
      <Route path="/stories/:storyId/comments/:id/edit">
        <CommentsEdit />
      </Route>
      <Route path="/stories/:storyId/tasks/new">
        <TasksNew />
      </Route>
      <Route path="/stories/:storyId/tasks/:id/edit">
        <TasksEdit />
      </Route>
      <Route path="/projects">
        <ProjectsList />
      </Route>
    </Switch>
  </Router>
)

export default Routes
