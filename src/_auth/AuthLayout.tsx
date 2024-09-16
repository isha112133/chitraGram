import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        // what has to be on the page we're on like signup / signin
        <>
          <section className="flex flex-1 flex-col justify-center items-center py-10">
            <Outlet />
          </section>
          <img
            src="/assets/snap.avif"
            alt=""
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
