import Input from '../../components/atoms/input';
import SideBar from '../../components/organisms/SideBar';

/* eslint-disable jsx-a11y/no-redundant-roles */
export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img
                    src="/img/avatar-1.png"
                    width="90"
                    height="90"
                    className="avatar img-fluid"
                    alt=""
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <img src="/icon/upload.svg" alt="" />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <img src="/icon/upload.svg" alt="" width="90" height="90" />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  placeholder="Please Enter Your Full Name"
                  label="Full Name"
                  formType="text"
                />
              </div>
              <div className="pt-30">
                <Input
                  placeholder="Please Enter Your Email Address"
                  label="Email Address"
                  formType="email"
                />
              </div>
              <div className="pt-30">
                <Input
                  placeholder="Please Enter Your Phone Number"
                  label="Phone"
                  formType="tel"
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button">
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
