const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
      className="flex items-center "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
