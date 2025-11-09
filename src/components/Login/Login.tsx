import { Eye, EyeClosed } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export const Login = () => {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

  const handleShowPasswordClick = () => {
    setIsShowingPassword((prev) => !prev);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="border w-[25%] h-[50%] flex flex-col items-center gap-[16px]">
        <h1 className="text-2xl py-[20px]">Login</h1>
        <input
          className="w-[60%] border border-gray-400 rounded-xs px-2 py-1 placeholder:text-gray-500"
          type="text"
          placeholder="Username..."
        />
        <div className="w-[60%] flex items-center border border-gray-400 rounded-xs px-2 py-1">
          <input
            className="flex-1 placeholder:text-gray-500 p-[0] outline-none"
            {...(isShowingPassword ? { type: "text" } : { type: "password" })}
            placeholder="Password..."
          />
          <Button
            className="w-fit h-fit hover:bg-transparent hover:text-gray-500 active:text-gray-200 bg-transparent text-black"
            onClick={handleShowPasswordClick}
          >
            {isShowingPassword ? (
              <Eye size="1rem" />
            ) : (
              <EyeClosed size="1rem" />
            )}
          </Button>
        </div>
        <Button className="active:bg-gray-600">Login</Button>
        <p>
          Not a member? <a className="text-[blue] hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};
