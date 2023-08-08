const RenderDetails = (props) => {
  const { details, title } = props;
  return (
    <>
      {details?.length > 0 && (
        <div className="mb-2">
          <span className="font-bold text-xl font-sans">{title}:</span>
        </div>
      )}

      {details?.length > 0 &&
        details.map((item, index) => (
          <div key={index} className="mb-2">
            {Object.entries(item).map(
              ([key, value]) =>
                value && (
                  <p key={key} className="border rounded p-2 bg-gray-100">
                    <span className="font-bold font-sans">{key}:</span> {value}
                  </p>
                )
            )}
            {Object.values(item).every((value) => !value) && (
              <p>No {title.toLowerCase()} available</p>
            )}
          </div>
        ))}
    </>
  );
};

export default RenderDetails;
