const RenderDetails = (props) => {
  const { details, title } = props;

  function formatKey(key) {
    // Split the key by camel case or underscore
    const words = key.split(/(?=[A-Z])|_/);

    // Capitalize the first letter of each word and join with a space
    const formattedKey = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedKey;
  }

  return (
    <>
      {details?.length > 0 && (
        <div className="mb-2">
          <span className="font-bold text-white text-2xl font-alfa">
            {title}:
          </span>
        </div>
      )}

      {details && details?.length > 0
        ? details.map((item, index) => (
            <div key={index} className="mb-5">
              {Object.entries(item).map(
                ([key, value]) =>
                  value && (
                    <div
                      className="flex border rounded p-2 mb-1 bg-gray-100"
                      key={key}
                    >
                      <span className="font-bold mx-3">{formatKey(key)}: </span>
                      <span className="">
                        {value}
                        {console.log("key: ", formatKey(key))}
                      </span>
                    </div>
                  )
              )}
            </div>
          ))
        : null}
    </>
  );
};

export default RenderDetails;
