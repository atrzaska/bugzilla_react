import useModal from 'src/hooks/useModal'
import React from 'react'

const Modal = () => {
  const { Modal, modal } = useModal()
  window.Modal = Modal

  if (!modal.show) {
    return null
  }

  return (
    <React.Fragment>
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
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
                  onClick={modal.onClose}
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
                    onClick={modal.onClose}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={modal.onConfirm}
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
