import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
const EditProfile = ({ setHandle, handle,Setpage,setShowAlert }) => {
  // Local state to manage form input values
  
  const [formValues, setFormValues] = useState({
    image: handle.image || "",
    name: handle.name || "",
    bio: handle.bio || "",
  });



  // Handle file input and preview
  const fileHandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormValues((prevState) => ({
          ...prevState,
          image: event.target.result, // Set the base64 image URL for preview
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes for name and bio
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit the form and update the parent state
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setHandle(formValues); // Update parent state with form values
    setShowAlert(true); // Show the alert
    setTimeout(() => setShowAlert(false), 3000);
    Setpage(false)
   
  };

  const removePage =()=>{
    Setpage(false)
  }

  return (
    <form
  onSubmit={handleFormSubmit} // Call handleFormSubmit on submit
  className=" border-b-zinc-800 bg-slate-200 w-96 h-auto pt-3 pb-10 px-12 rounded-lg shadow-lg "
>

  <div className="flex justify-end -mr-8 " onClick={removePage}>
  <TiDeleteOutline className="text-3xl end-4 cursor-pointer"/>

  </div>
  <center className="text-3xl font-semibold text-gray-800 mb-6">Edit Profile</center>
  
  <div className="main">
    {/* Profile Picture */}
    <div className="profilePic flex items-center mt-6">
      <img
        className="w-20 h-20 rounded-full object-cover mr-4 border-4 "
        src={formValues.image || "https://via.placeholder.com/150"}
        alt="profile"
      />
      <input
        type="file"
        accept="image/*"
        onChange={fileHandle}
        className="p-2 text-white rounded-md cursor-pointer transition-all duration-300"
      />
    </div>

    {/* Name Input */}
    <div className="userName flex items-center mt-8 space-x-4">
      <span className="w-16 text-gray-700 font-medium">Name</span>
      <input
        className="p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        type="text"
        name="name"
        placeholder="Enter name"
        value={formValues.name}
        onChange={handleInputChange}
      />
    </div>

    {/* Bio Input */}
    <div className="bio flex items-center mt-6 space-x-4">
      <span className="w-16 text-gray-700 font-medium">Bio</span>
      <input
        type="text"
        className="p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2  transition-all duration-300"
        name="bio"
        placeholder="Enter bio"
        value={formValues.bio}
        onChange={handleInputChange}
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center mt-8">
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
      >
        Submit
      </button>
    </div>
  </div>
</form>

  );
};

export default EditProfile;
