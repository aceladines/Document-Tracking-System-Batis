export default function Login() {
  return (
    <form className="flex flex-col gap-4 m-auto w-full max-w-xs md:max-w-sm">
      <input
        className="px-3 py-2 rounded-md"
        id="username"
        type="text"
        placeholder="Username"
      />
      <input
        className="px-3 py-2 rounded-md"
        id="password"
        type="password"
        placeholder="Password"
      />
      <button
        className="px-3 py-2 uppercase rounded-md bg-blue-900 text-white font-semibold hover:bg-blue-800"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
