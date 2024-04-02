import Image from "next/image";
const Heroes = () => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative  size-[300px] sm:size-[350px] md:size-[400px] ">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          ></Image>
          <Image
            className="object-contain hidden dark:block"
            src="/documents-dark.png"
            fill
            alt="Documents"
          ></Image>
        </div>
        <div className=" hidden md:block relative size-[400px]">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          ></Image>
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
