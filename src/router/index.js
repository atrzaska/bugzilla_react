import { Router, Switch } from 'react-router-dom'
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

import { createBrowserHistory } from 'history'
import PublicRoute from 'src/components/routes/PublicRoute'
import PrivateRoute from 'src/components/routes/PrivateRoute'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Landing} />
      <PublicRoute path="/terms" component={Terms} />>
      <PublicRoute path="/privacy" component={Privacy} />
      <PublicRoute path="/help" component={Help} />
      <PublicRoute
        restricted
        path="/signup/success"
        component={SignupSuccess}
      />
      <PublicRoute restricted path="/signup" component={Signup} />
      <PublicRoute restricted path="/signin" component={Signin} />
      <PublicRoute
        restricted
        path="/recover/success"
        component={RecoverSuccess}
      />
      <PublicRoute restricted path="/recover" component={Recover} />
      <PublicRoute
        restricted
        path="/reset_password/:id"
        component={ResetPassword}
      />
      <PublicRoute restricted path="/confirm" component={Confirm} />
      <PrivateRoute procted path="/dashboard" component={Dashboard} />
      <PrivateRoute procted path="/users/settings" component={UsersSettings} />
      <PrivateRoute path="/projects/:id/current" component={StoriesCurrent} />
      <PrivateRoute path="/projects/:id/backlog" component={StoriesBacklog} />
      <PrivateRoute path="/projects/:id/icebox" component={StoriesIcebox} />
      <PrivateRoute procted path="/projects/:id/done" component={StoriesDone} />
      <PrivateRoute
        path="/projects/:id/members/:memberId/edit"
        component={MembersEdit}
      />
      <PrivateRoute path="/projects/:id/members/new" component={MembersNew} />
      <PrivateRoute path="/projects/:id/members" component={MembersList} />
      <PrivateRoute path="/projects/:id/stories/new" component={StoriesNew} />
      <PrivateRoute
        path="/projects/:projectId/stories/:id/edit"
        component={StoriesEdit}
      />
      <PrivateRoute procted path="/projects/new" component={ProjectsNew} />
      <PrivateRoute path="/projects/:id/edit" component={ProjectsEdit} />
      <PrivateRoute
        path="/stories/:storyId/comments/new"
        component={CommentsNew}
      />
      <PrivateRoute
        path="/stories/:storyId/comments/:id/edit"
        component={CommentsEdit}
      />
      <PrivateRoute path="/stories/:storyId/tasks/new" component={TasksNew} />
      <PrivateRoute
        path="/stories/:storyId/tasks/:id/edit"
        component={TasksEdit}
      />
      <PrivateRoute procted path="/projects" component={ProjectsList} />
    </Switch>
  </Router>
)

export default Routes
export { history }
