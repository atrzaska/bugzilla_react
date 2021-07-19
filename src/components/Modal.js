import useModal from 'src/hooks/useModal'
import React from 'react'
import useDidMountEffect from 'src/hooks/useDidMountEffect'

const Modal = () => {
  const { Modal, modal } = useModal()
  window.Modal = Modal

  const animate = () => {
    document.getElementById('modalBackdrop')?.classList?.toggle('show')
    document.getElementById('modal')?.classList?.toggle('show')
  }

  useDidMountEffect(animate, [modal.show])

  const onCloseWrapped = () => {
    animate()
    setTimeout(modal.onClose, 400)
  }

  const onConfirmWrapped = () => {
    animate()
    setTimeout(modal.onConfirm, 400)
  }

  if (!modal.show) {
    return null
  }

  return (
    <React.Fragment>
      <div id="modalBackdrop" className="modal-backdrop fade" />
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {!!modal.title && (
              <div className="modal-header border-0">
                <h5 className="modal-title" id="exampleModalLabel">
                  {modal.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onCloseWrapped}
                />
              </div>
            )}
            {!!modal.body && <div className="modal-body">{modal.body}</div>}
            {(modal.showCancel || !!modal.confirm) && (
              <div className="modal-footer border-0">
                {modal.showCancel && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onCloseWrapped}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onConfirmWrapped}
                >
                  {modal.confirm}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal
