import Image from 'next/image';
import Link from 'next/link';
import SignInForm from '../components/organisms/SigninForm';
import SignInImage from '../components/organisms/SigninImage';

export default function SignIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src="/icon/logo.svg"
                      width={60}
                      height={60}
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
              <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                Sign In
              </h2>
              <p className="text-lg color-palette-1 m-0">
                Masuk untuk melakukan proses top up
              </p>
              <SignInForm />
            </div>
          </form>
        </div>
        <SignInImage />
      </div>
    </section>
  );
}
