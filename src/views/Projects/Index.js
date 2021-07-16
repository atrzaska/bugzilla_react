/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import TopPagination from 'src/components/pagination/TopPagination'
import CompactPagination from 'src/components/pagination/CompactPagination'
import BootstrapPagination from 'src/components/pagination/BootstrapPagination'
import Pagination from 'src/components/pagination/Pagination'
import AllegroPagination from 'src/components/pagination/AllegroPagination'
import PageResults from 'src/components/pagination/PageResults'
import Loading from 'src/components/Loading'
import Empty from './components/Empty'
import Sort from 'src/components/Sort'
import threeDots from 'src/assets/threeDots.svg'
import API from 'src/services/requests'
import usePagination from 'src/hooks/usePagination'
import useSorting from 'src/hooks/useSorting'
import useCollection from 'src/hooks/async/useCollection'
import React, { useEffect } from 'react'
import useDidMountEffect from 'src/hooks/useDidMountEffect'
import CollectionWithFallback from 'src/components/CollectionWithFallback'

const SORT_OPTIONS = {
  id_desc: { name: 'Creation time: newest', value: 'id_desc' },
  id_asc: { name: 'Creation time: oldest', value: 'id_asc' },
  name_asc: { name: 'Name A-Z', value: 'name_asc' },
  name_desc: { name: 'Name Z-A', value: 'name_desc' },
}

const ProjectsIndex = () => {
  const defaultSorting = SORT_OPTIONS.id_desc.value
  const sorting = useSorting(defaultSorting)
  const data = useCollection()
  const { collection, total, setCollection, startLoading } = data
  const pagination = usePagination({ collection, total })
  const { page } = pagination
  const { sort } = sorting

  const fetchCollection = () => {
    startLoading()
    API.fetchProjects({ page, sort }, { refresh: true }).then((res) =>
      setCollection(res.data)
    )
  }

  const onDeleteConfirmed = (project) => {
    API.deleteProject(project.id).then((res) => {
      window.Toast.success(`Project ${project.name} deleted successfully.`)
      fetchCollection()
    })
  }

  const onDelete = (project) =>
    window.Modal.confirmDelete({
      name: project.name,
      onConfirm: () => onDeleteConfirmed(project),
    })

  useDidMountEffect(() => pagination.goToPage(1), [sort])
  useEffect(fetchCollection, [sort, page])

  return (
    <AppLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Projects</h5>
        <Link className="btn btn-primary" to="/projects/new">
          New
        </Link>
      </div>
      <CollectionWithFallback data={data} Loading={Loading} Empty={Empty}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Sort model={sorting} options={SORT_OPTIONS} />
            <TopPagination pagination={pagination} />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="border-0">Name</th>
                <th className="border-0 w-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map((project) => (
                <tr key={project.id}>
                  <td>
                    <Link to={`/projects/${project.id}/current`}>
                      {project.name}
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex justify-content-end dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <img src={threeDots} alt="pic" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link
                          className="dropdown-item"
                          to={`/projects/${project.id}/edit`}
                        >
                          Edit
                        </Link>
                        <div className="dropdown-divider" />
                        <button
                          className="dropdown-item"
                          onClick={() => onDelete(project)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center">
            <PageResults pagination={pagination} />
            <AllegroPagination pagination={pagination} />
          </div>
          <CompactPagination pagination={pagination} />
          <BootstrapPagination pagination={pagination} />
          <Pagination pagination={pagination} />
        </div>
      </CollectionWithFallback>
    </AppLayout>
  )
}

export default ProjectsIndex
