import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-500 to-green-900 mb-8">
      <div className="mx-auto px-8 py-12 flsx flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          National Environmental Standards and Regulations Enforcement Agency (NESREA)
          </h1>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold ">
            Electronic Library
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
