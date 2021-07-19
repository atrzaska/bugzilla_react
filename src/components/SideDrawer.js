import React from 'react'
import useDidMountEffect from 'src/hooks/useDidMountEffect'

const PLACEMENTS = {
  left: {
    wrapperClass: 'b-side-drawer',
  },
  right: {
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

  const animate = () => {
    document.getElementById('sideDrawerBackdrop')?.classList?.toggle('show')
    document
      .getElementById('sideDrawerWrapper')
      ?.classList?.toggle('b-side-drawer-active')
  }

  useDidMountEffect(animate, [show])

  const onCloseWrapped = () => {
    animate()
    setTimeout(onClose, 400)
  }

  return (
    <React.Fragment>
      {show && backdrop && (
        <div
          id="sideDrawerBackdrop"
          className="modal-backdrop fade"
          onClick={onCloseWrapped}
        />
      )}
      {show && (
        <div
          id="sideDrawerWrapper"
          className={[
            'shadow',
            'bg-white',
            'h-100',
            placement.wrapperClass,
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
                onClick={onCloseWrapped}
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
