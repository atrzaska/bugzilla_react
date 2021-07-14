import React from 'react'

const PLACEMENTS = {
  left: {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutLeft',
    wrapperClass: 'b-side-drawer',
  },
  right: {
    enterClass: 'slideInRight',
    leaveClass: 'slideOutRight',
    wrapperClass: 'b-side-drawer b-side-drawer-right',
  },
}

const SideDrawer = ({
  title,
  show = false,
  right = false,
  backdrop = false,
  noHeader = false,
  width = '320px',
  onClose,
  children,
}) => {
  const placement = right ? PLACEMENTS.right : PLACEMENTS.left

  return (
    <React.Fragment>
      {show && backdrop && (
        <div className="modal-backdrop fade show" onClick={onClose} />
      )}
      {show && (
        <div
          className={[
            'shadow',
            'bg-white',
            'h-100',
            'animated',
            placement.wrapperClass,
            placement.enterClass,
          ].join(' ')}
          style={{ width }}
        >
          {noHeader ? (
            <React.Fragment />
          ) : (
            <header className="d-flex align-items-center justify-content-between p-3">
              <h5 className="mb-0">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </header>
          )}
          <div className="content">{children}</div>
        </div>
      )}
    </React.Fragment>
  )
}

export default SideDrawer
