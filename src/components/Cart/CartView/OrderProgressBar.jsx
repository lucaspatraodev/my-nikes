export default function OrderProgressBar({ orderStage }) {
  const StageContainer = ({ stage }) => {
    const stageTitles = ["In Cart", "Identification", "Payment"];

    return (
      <div
        key={stage}
        className={`w-1/3 h-full flex justify-center items-center gap-2 border-r-2 border-[#582f0e] ${
          orderStage === stage
            ? "bg-[#582f0e] text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        <div
          className={`h-6 w-6 flex items-center justify-center rounded-full font-bold ${
            orderStage === stage
              ? "bg-white text-black"
              : "bg-[#582f0e] text-white"
          }`}
        >
          {stage}
        </div>
        <h1 className="text-lg font-bold">{stageTitles[stage - 1]}</h1>
      </div>
    );
  };

  return (
    <>
      <div className={`w-full h-16 flex border-y-2 border-[#582f0e]`}>
        <StageContainer stage={1}>In Cart</StageContainer>
        <StageContainer stage={2}>Identification</StageContainer>
        <StageContainer stage={3}>Payment</StageContainer>
      </div>
    </>
  );
}
