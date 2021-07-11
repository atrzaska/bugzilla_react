import useValue from 'src/hooks/useValue'

const useModal = () => {
  const { value: modal, setField } = useValue({
    show: false,
    title: 'Modal title',
    body: 'Modal message',
    showCancel: true,
    confirm: 'Confirm',
    onClose: () => setField('show', false),
    onConfirm: () => modal.onClose(),
  })

  const show = (options) => {
    setField('show', true)
    setField('title', options.title || '')
    setField('body', options.body || '')
    setField('showCancel', options.showCancel || true)
    setField('confirm', options.confirm || 'Confirm')
    setField('onConfirm', () => {
      modal.onClose()
      options.onConfirm && options.onConfirm()
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
