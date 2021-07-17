import AppLayout from 'src/layouts/App'
import PersonalSettingsForm from './components/PersonalSettingsForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import EmailForm from './components/EmailForm'
import API from 'src/services/requests'

const Settings = () => {
  const onCancelAccountConfirmed = () =>
    API.deleteCurrentUser().then(() => {
      window.Toast.success(`Account deleted successfully.`)
      API.clearToken()
    })

  const onCancelAccount = () =>
    window.Modal.confirmDelete({
      title: 'You are about to delete your account',
      onConfirm: onCancelAccountConfirmed,
    })

  return (
    <AppLayout>
      <h1 className="text-center">Settings</h1>
      <h5 className="mb-4">Change personal data</h5>
      <PersonalSettingsForm />
      <hr />
      <h5 className="mb-4">Change email</h5>
      <EmailForm />
      <hr />
      <h5 className="mb-4">Change password</h5>
      <ChangePasswordForm />
      <hr />
      <h5 className="mb-4">Cancel my account</h5>
      <p>Unhappy?</p>
      <div>
        <button onClick={onCancelAccount} className="btn btn-danger">
          Cancel my account
        </button>
      </div>
    </AppLayout>
  )
}

export default Settings
