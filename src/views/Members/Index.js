import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import ProjectTabs from 'src/components/ProjectTabs'
import TopPagination from 'src/components/pagination/TopPagination'
import Pagination from 'src/components/pagination/Pagination'
import Loading from 'src/components/Loading'
import Sort from 'src/components/Sort'
import A from 'src/components/A'
import CollectionWithFallback from 'src/components/CollectionWithFallback'
import Empty from './components/Empty'
import threeDots from 'src/assets/threeDots.svg'
import usePagination from 'src/hooks/usePagination'
import useSorting from 'src/hooks/useSorting'
import useCollection from 'src/hooks/async/useCollection'
import useCurrentUser from 'src/hooks/useCurrentUser'
import useDidMountEffect from 'src/hooks/useDidMountEffect'
import API from 'src/services/requests'
import { history } from 'src/router'

const SORT_OPTIONS = {
  id_desc: { name: 'Creation time: newest', value: 'id_desc' },
  id_asc: { name: 'Creation time: oldest', value: 'id_asc' },
  name_asc: { name: 'Name A-Z', value: 'name_asc' },
  name_desc: { name: 'Name Z-A', value: 'name_desc' },
}

const Members = () => {
  const { user } = useCurrentUser()
  const isCurrentUser = (member) => member.userId === user.id

  const [project, setProject] = useState({})
  const defaultSorting = SORT_OPTIONS.name_asc.value
  const sorting = useSorting(defaultSorting)
  const { sort } = useSorting
  const { id } = useParams()
  const data = useCollection()
  const { collection, total, setCollection, startLoading } = data
  const pagination = usePagination({ collection, total })
  const { page } = pagination

  const fetchCollection = () => {
    startLoading()
    API.fetchProject(id)
      .then((res) => setProject(res.data) || res.data)
      .then((result) =>
        API.fetchMembers(
          {
            'filter.projectId': result.id,
            page,
            sort,
          },
          { refresh: true }
        )
      )
      .then((res) => setCollection(res.data))
  }

  const onLeaveProjectConfirmed = (member) =>
    API.deleteMember(member.id).then((res) => {
      window.Toast.success(`You removed yourself from project ${project.name}.`)
      history.push('/projects')
    })

  const onLeaveProject = (member) =>
    window.Modal.confirmDelete({
      title: `You are about to leave project ${project.name}`,
      onConfirm: () => onLeaveProjectConfirmed(member),
    })

  const onRemoveFromProjectConfirmed = (member) =>
    API.deleteMember(member.id).then((res) => {
      window.Toast.success(
        `You removed ${member.name} from project ${project.name}.`
      )
      fetchCollection()
    })

  const onRemoveFromProject = (member) =>
    window.Modal.confirmDelete({
      title: `You are about to remove ${member.name} from project ${project.name}`,
      onConfirm: () => onRemoveFromProjectConfirmed(member),
    })

  useDidMountEffect(() => pagination.goToPage(1), [sort])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchCollection, [page, sort])

  return (
    <AppLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>{project.name}</h5>
        {project.isOwner && (
          <Link className="btn btn-primary" to={`/projects/${id}/members/new`}>
            Invite member
          </Link>
        )}
      </div>
      <ProjectTabs />
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
                <th className="border-0">Role</th>
                <th className="border-0 w-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.photoUrl}
                        className="rounded-circle me-2"
                        height="48"
                        with="48"
                        alt="pic"
                      />
                      <div className="d-flex flex-column">
                        {isCurrentUser(item) ? (
                          <b>You • {item.name}</b>
                        ) : (
                          <b>{item.name}</b>
                        )}
                        <div className="text-secondary">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.role}</td>
                  {project.isOwner ? (
                    <td>
                      <div className="d-flex justify-content-end dropdown">
                        <button
                          className="btn btn-outline-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <img src={threeDots} alt="pic" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          {isCurrentUser(item) ? (
                            <A
                              onClick={() => onLeaveProject(item)}
                              className="dropdown-item"
                            >
                              Leave project...
                            </A>
                          ) : (
                            <>
                              <Link
                                to={`/projects/${id}/people/${item.id}/edit`}
                                className="dropdown-item"
                              >
                                Change role
                              </Link>
                              <div className="dropdown-divider" />
                              <A
                                onClick={() => onRemoveFromProject(item)}
                                className="dropdown-item"
                              >
                                Remove from project...
                              </A>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td>
                      {isCurrentUser(item) && (
                        <A
                          onClick={() => onLeaveProject(item)}
                          className="btn btn-danger"
                        >
                          Leave
                        </A>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} />
        </div>
      </CollectionWithFallback>
    </AppLayout>
  )
}

export default Members
