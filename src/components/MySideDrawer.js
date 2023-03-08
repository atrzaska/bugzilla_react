import SideDrawer from 'src/components/SideDrawer'
import useSideDrawer from 'src/hooks/useSideDrawer'
import React from 'react'

const MySideDrawer = () => {
  const drawer = useSideDrawer()

  return (
    <>
      <div className="d-flex justify-content-center py-3">
        <button
          onClick={drawer.open}
          type="button"
          className="btn btn-outline-secondary"
        >
          Show new side drawer
        </button>
      </div>
      <SideDrawer
        title="My side drawer 2"
        show={drawer.show}
        onClose={drawer.close}
        right
        backdrop
      >
        <div className="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <img
            src="https://picsum.photos/500/500/?image=54"
            className="img-thumbnail img-fluid"
            alt="pic"
          />
        </div>
        <div className="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <img
            src="https://picsum.photos/500/500/?image=54"
            className="img-thumbnail img-fluid"
            alt="pic"
          />
        </div>
        <div className="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <img
            src="https://picsum.photos/500/500/?image=54"
            className="img-thumbnail img-fluid"
            alt="pic"
          />
        </div>
      </SideDrawer>
    </>
  )
}

export default MySideDrawer
