import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <h3 className="font-sans">Personal Details</h3>
        <form className="mt-3">
          <FormInput placeholder={"Full name"} />
          <FormInput placeholder={"Email"} />
          <FormInput placeholder={"Phone Number"} />
          <FormInput placeholder={"Address"} />
        </form>
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        Right Side (Live Updates)
      </div>
    </div>
  );
}

export default App;
