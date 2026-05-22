import Image from "next/image";

const TipCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className="bg-[#F5F6F7] rounded-[22px] p-8 relative border-b-4 border-yellow-400 hover:shadow-lg transition">
        <Image src={icon} alt="" className="w-10 mb-5" />

        <h3 className="text-lg font-semibold mb-3">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </>
  );
};

export default TipCard;
