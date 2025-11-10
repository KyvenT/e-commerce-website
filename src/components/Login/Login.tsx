import { Eye, EyeClosed } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { Spinner } from "../ui/shadcn-io/spinner";
import { useNavigate } from "react-router";

/*
 * sample FakeStoreAPI user credentials
 * username: donero
 * password: ewedon
 */

export const Login = () => {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleShowPasswordClick = () => {
    setIsShowingPassword((prev) => !prev);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = usernameInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    try {
      const data = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log(data);
      if (!data.ok) {
        throw new Error(await data.text());
      }
      const result = await data.json();
      console.log(result.token);
      // store token in context/cookie later
      navigate("/store");
    } catch (err) {
      if (err instanceof Error) setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="border w-[80%] md:w-[50%] lg:w-[25%] p-[16px] flex flex-col items-center gap-[16px]">
        <h1 className="text-3xl select-none py-[20px]">Login</h1>
        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center gap-[16px]"
        >
          <input
            className="w-[80%] text-base border border-gray-400 rounded-xs px-2 py-1 placeholder:text-gray-500 outline-none"
            type="text"
            placeholder="Username..."
            ref={usernameInputRef}
          />
          <div className="w-[80%] flex items-center border border-gray-400 rounded-xs px-2 py-1">
            <input
              className="flex-1 text-base min-w-0 placeholder:text-gray-500 p-[0] outline-none"
              {...(isShowingPassword ? { type: "text" } : { type: "password" })}
              placeholder="Password..."
              ref={passwordInputRef}
            />
            <Button
              className="w-[1rem] h-[1rem] cursor-pointer hover:bg-transparent hover:text-gray-500 active:text-gray-200 bg-transparent text-black"
              onClick={handleShowPasswordClick}
              type="button"
            >
              {isShowingPassword ? (
                <Eye size="1rem" />
              ) : (
                <EyeClosed size="1rem" />
              )}
            </Button>
          </div>
          <Button
            type="submit"
            className="cursor-pointer text-lg active:bg-gray-600"
          >
            Login
          </Button>
        </form>
        <p>
          Not a member?{" "}
          <a className="text-[blue] cursor-pointer hover:underline">Register</a>
        </p>
        {loginLoading && <Spinner />}
        {loginError && <span className="text-[red]">{loginError}</span>}
      </div>
    </div>
  );
};
