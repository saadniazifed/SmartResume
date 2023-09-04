import { useState } from "react";

const Avatar = (props) => {
  const { avatarImage, setAvatarImage } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageSave = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target.result);
        closeModal();
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="flex items-center">
      <div className="cursor-pointer" onClick={openModal}>
        <img
          className="rounded-full w-16 h-16 object-cover"
          src={avatarImage}
          alt="Avatar"
        />
      </div>
      {isModalOpen && (
        <div className="fixed z-[15] inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Upload Avatar</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleImageSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
