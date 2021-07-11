import useToast from 'src/hooks/useToast'

const ToastFC = () => {
  const { Toast, notifications, deleteNotification } = useToast()
  window.Toast = Toast

  return (
    <div className="notification-wrapper">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="toast border-0 fade show mb-2 cursor-pointer ms-auto fade-in"
          onClick={() => deleteNotification(notification)}
        >
          <div className={`toast-body alert-${notification.kind} p-3 rounded`}>
            {notification.message}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToastFC
