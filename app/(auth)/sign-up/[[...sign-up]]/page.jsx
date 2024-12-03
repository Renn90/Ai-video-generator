import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-between items-center w-screen">
      <div className=" w-1/2">
        <video autoPlay muted loop className="h-[100vh] w-full object-cover">
          <source src="/assets/samp.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <SignUp />{" "}
      </div>
    </main>
  );
}
