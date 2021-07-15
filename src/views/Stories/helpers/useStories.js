import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCollection from 'src/hooks/async/useCollection'
import useDidMountEffect from 'src/hooks/useDidMountEffect'
import usePagination from 'src/hooks/usePagination'
import useSorting from 'src/hooks/useSorting'
import API from 'src/services/requests'
import { defaultSorting } from './sorting'

const useStories = ({ filters }) => {
  const [project, setProject] = useState({})
  const sorting = useSorting(defaultSorting)
  const { id } = useParams()
  const { collection, total, loading, setCollection, startLoading } =
    useCollection()
  const pagination = usePagination({ collection, total })
  const { page } = pagination
  const { sort } = sorting

  const fetchCollection = () => {
    startLoading()
    API.fetchProject(id)
      .then((res) => setProject(res.data) || res.data)
      .then((result) =>
        API.fetchStories(
          {
            ...filters,
            'filter.projectId': result.id,
            page,
            sort,
          },
          { refresh: true }
        )
      )
      .then((res) => setCollection(res.data))
  }

  const updateStoryState = (story, state) =>
    API.updateStory(story.id, { state }).then(fetchCollection)

  const onDeleteConfirmed = (story) => {
    API.deleteStory(story.id).then((res) => {
      window.Toast.success(`Story ${story.name} deleted successfully.`)
      fetchCollection()
    })
  }

  const onDelete = (story) =>
    window.Modal.confirmDelete({
      name: story.name,
      onConfirm: () => onDeleteConfirmed(story),
    })

  useDidMountEffect(() => pagination.goToPage(1), [sort])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchCollection, [sort, page])

  return {
    id,
    project,
    collection,
    loading,
    pagination,
    sorting,
    sort,
    updateStoryState,
    onDelete,
  }
}

export default useStories
