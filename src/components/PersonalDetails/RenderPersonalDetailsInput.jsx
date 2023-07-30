const RenderPersonalDetailsInput = (props) => {
  const { personalDetails } = props;

  return (
    <div className="h-1/4 flex flex-col justify-center items-center">
      {/* Centered text in the top div */}
      <div className="flex flex-col items-center justify-center h-1/2">
        <p className="text-center text-4xl font-bold">
          {personalDetails.fullName}
        </p>
      </div>

      {/* Bottom div with 3 paragraphs, justified evenly */}
      <div className="flex flex-row justify-evenly h-1/2 w-full">
        <p className="text-center">{personalDetails.email}</p>
        <p className="text-center">{personalDetails.phoneNumber}</p>
        <p className="text-center">{personalDetails.address}</p>
      </div>
    </div>
  );
};

export default RenderPersonalDetailsInput;
