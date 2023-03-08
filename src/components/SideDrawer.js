import React from 'react'
import useDidMountEffect from 'src/hooks/useDidMountEffect'

const PLACEMENTS = {
  left: {
    wrapperClass: 'side-drawer',
  },
  right: {
    wrapperClass: 'side-drawer side-drawer-right',
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
      ?.classList?.toggle('side-drawer-active')
  }

  useDidMountEffect(animate, [show])

  const onCloseWrapped = () => {
    animate()
    setTimeout(onClose, 400)
  }

  return (
    <>
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
            < />
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
    </>
  )
}

export default SideDrawer
