import { Link } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import ProjectTabs from 'src/components/ProjectTabs'
import TopPagination from 'src/components/pagination/TopPagination'
import Pagination from 'src/components/pagination/Pagination'
import Loading from 'src/components/Loading'
import Sort from 'src/components/Sort'
import CollectionWithFallback from 'src/components/CollectionWithFallback'
import Story from './components/Story'
import Empty from './components/Empty'
import { SORT_OPTIONS } from './helpers/sorting'
import useStories from './helpers/useStories'

const filters = {
  'filter.state': 'unstarted',
  'filter.container': 'backlog',
}

const Backlog = () => {
  const {
    id,
    data,
    project,
    collection,
    pagination,
    sorting,
    updateStoryState,
    onDelete,
  } = useStories({ filters })

  return (
    <AppLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>{project.name}</h5>
        <Link className="btn btn-primary" to={`/projects/${id}/stories/new`}>
          New
        </Link>
      </div>
      <ProjectTabs />
      <CollectionWithFallback data={data} Loading={Loading} Empty={Empty}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Sort model={sorting} options={SORT_OPTIONS} />
            <TopPagination pagination={pagination} />
          </div>
          <table className="table mb-3">
            <thead>
              <tr>
                <th className="border-0">Name</th>
                <th className="border-0">State</th>
                <th className="border-0">Type</th>
                <th className="border-0">Container</th>
                <th className="border-0">Tasks</th>
                <th className="border-0">Comments</th>
                <th className="border-0 w-1 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map((story) => (
                <Story
                  key={story.id}
                  story={story}
                  updateStoryState={updateStoryState}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} />
        </div>
      </CollectionWithFallback>
    </AppLayout>
  )
}

export default Backlog
