import React from "react";
import AuthTextField from "@/app/components/AuthTextField";
import AuthBtn from "@/app/components/AuthBtn";
import Link from "next/link";
const loginPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen px-5 sm:px-0">
      <div className="self-center  border-0 rounded-lg h-3/4 text-sm  max-w-md  max-h-fit bg-accent px-6 py-6 flex flex-col flex-grow gap-10 ">
        <h1 className="text-center text-xl lg:text-4xl max-w-">Login</h1>
        <div className="flex flex-col gap-5  justify-center">
          <div className="self-center m-auto w-[80%] md:w-[75%] flex flex-col ">
            <AuthTextField
              placeholder="name@gmail.com"
              style="bg-accent text-white min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border self-center border-b-0 border-l-0 rounded-l-none  border-white rounded-full text-center px-2 py-2  focus:outline-none"
            />
            <AuthTextField
              placeholder="*****"
              isPassword={true}
              style="flex gap-1 bg-accent w-[80%] min-[375px]:w-[82%]  text-white self-center rounded-full text-center border  rounded-r-none border-r-0 px-2 py-2  focus:outline-none"
            />

            <AuthBtn children="Submit" />
          </div>
          <AuthBtn
            customStyle="self-center bg-accent  border rounded-full text-white p-2 w-8/12"
            children="Forgot"
          />
          <AuthBtn customStyle="self-center bg-accent border rounded-full text-white p-2 w-11/12">
            <Link href="/auth/signup">Join Us !</Link>
          </AuthBtn>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
