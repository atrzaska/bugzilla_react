const Li = ({ show, page, pagination }) => {
  if (!show) {
    return null
  }

  return (
    <li className={['page-item', pagination.activePageClass(page)].join(' ')}>
      <button onClick={() => pagination.goToPage(page)} className="page-link">
        {page}
      </button>
    </li>
  )
}

export default Li
