const SORT_OPTIONS = {
  id_desc: { name: 'Creation time: newest', value: 'id_desc' },
  id_asc: { name: 'Creation time: oldest', value: 'id_asc' },
  name_asc: { name: 'Name: A-Z', value: 'name_asc' },
  name_desc: { name: 'Name: Z-A', value: 'name_desc' },
  state_asc: { name: 'State: A-Z', value: 'state_asc' },
  state_desc: { name: 'State: Z-A', value: 'state_desc' },
  kind_asc: { name: 'Type: A-Z', value: 'kind_asc' },
  kind_desc: { name: 'Type: Z-A', value: 'kind_desc' },
  container_asc: { name: 'Container: A-Z', value: 'container_asc' },
  container_desc: { name: 'Container: Z-A', value: 'container_desc' },
  tasks_asc: { name: 'Number of Tasks: lowest', value: 'tasksCount_asc' },
  tasks_desc: { name: 'Number of Tasks: highest', value: 'tasksCount_desc' },
  comments_asc: {
    name: 'Number of Comments: lowest',
    value: 'commentsCount_asc',
  },
  comments_desc: {
    name: 'Number of Comments: highest',
    value: 'commentsCount_desc',
  },
}

const defaultSorting = SORT_OPTIONS.id_desc.value

export { SORT_OPTIONS, defaultSorting }
