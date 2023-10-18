
const Login = () => {
  return (
    <div>
      <form>
        <div className="bg-primaryColor w-auto h-full mx-5 mt-20  font-[600] rounded-lg">
          <p className="flex justify-center p-8 text-4xl font-[400] text-white">
            Login
          </p>
          <div className="flex justify-center mb-2"></div>

          <div className="flex justify-center p-2 mt-1">
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className={
                "input p-6  w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]"
              }
            />
          </div>
          <div className="flex justify-center p-2 mt-1">
            <input
              type="password"
              required
              placeholder="Password"
              className={
                "input p-6 w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]"
              }
            />
          </div>
          <div className="flex justify-center p-8">
            <button className="btn2 mt-4" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login
