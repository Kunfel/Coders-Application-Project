import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import codingLogo from "../../assets/coding.png";

const schema = z.object({
  name: z.string().min(4, "Fist Name must be at least 4 letters"),
  name2: z.string().min(4, "Last Name must be at least 4 letters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col-2 w-full h-screen  bg-light-MainBg  overflow-hidden shadow-lg">
      <div className="flex items-center justify-center bg-[#23155B] w-1/2  p-4">
        <img
          src={codingLogo}
          alt="Red hair guy looking in his laptop"
          className="w-3/5"
        />
      </div>

      <div className="flex flex-col justify-center bg-white w-[400px] h-[500px] my-36 mx-24 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#8053FF] mb-4">
          Join Coders Now!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="First Name"
            className="w-full p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            {...register("name2")}
            placeholder="Last Name"
            className="w-full p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          {errors.name2 && (
            <p className="text-red-600">{errors.name2.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600 mt-0">
            Already have an account?
            <a href="./SignIn" className="text-[#8053FF] hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
