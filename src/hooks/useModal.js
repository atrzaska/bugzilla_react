import useValue from 'src/hooks/useValue'

const useModal = () => {
  const { value: modal, setFields } = useValue({
    show: false,
    title: 'Modal title',
    body: 'Modal message',
    showCancel: true,
    confirm: 'Confirm',
    onClose: () => setFields({ show: false }),
    onConfirm: () => modal.onClose(),
  })

  const show = (options) => {
    setFields({
      show: true,
      title: options.title || '',
      body: options.body || '',
      showCancel: options.showCancel || true,
      confirm: options.confirm || 'Confirm',
      onConfirm: () => {
        modal.onClose()
        options.onConfirm && options.onConfirm()
      },
    })
  }

  const Modal = {
    show,
    confirm: show,
    confirmDelete: ({ title, name, onConfirm }) =>
      show({
        title: title || `You are about to delete ${name}`,
        body: 'This action cannot be undone. Are you sure you want to continue?',
        onConfirm,
      }),
    ok: ({ title, body, onConfirm = () => {} }) =>
      show({ title, body, onConfirm, showCancel: false, confirm: 'OK' }),
  }

  return { Modal, modal }
}

export default useModal
