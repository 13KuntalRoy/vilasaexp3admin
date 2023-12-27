import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center flex-column justify-content-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">
          {`Enter your new password below to continue`}
        </p>
        <form action="">
          <CustomInput type="password" label="New Password" i_id="password" />
          <CustomInput
            type="password"
            label="Confirm Password"
            i_id="confirm-password"
          />
          <button
            style={{ background: "#ffd333" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;