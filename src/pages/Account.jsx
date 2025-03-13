import { useState } from "react";
import { Upload, Eye, Edit, Trash2, Grid, User } from "lucide-react";
import prfImage from "../assets/images/profileImage.png"; // Replace with actual path
import Header from "../components/Header";
import NavBar from "../components/Navbar";



const Body = () => {
    const [image, setImage] = useState(prfImage);
    const [name, setName] = useState("Shanki Mandeera");
    const [email, setEmail] = useState("shanki@gmail.com");
    const [phone, setPhone] = useState("0771886641");

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    return (
        <div className="p-6 flex-1 bg-gray-100">
            <div className="bg-gray-100 p-8 w-ful">
                {/* Profile Section */}
                <div className="flex flex-col">
                    <div className="relative">
                        {image ? (
                            <img
                                src={image}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                        )}
                    </div>

                    {/* Upload & Remove Buttons */}
                    <div className="flex space-x-2 mt-2">
                        <label className="px-3 py-1 text-sm bg-black text-white rounded-md cursor-pointer flex items-center">
                            <Upload size={14} className="mr-1" />
                            Upload
                            <input type="file" className="hidden" onChange={handleImageUpload} />
                        </label>
                        {image && (
                            <button
                                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md flex items-center"
                                onClick={handleRemoveImage}
                            >
                                <Trash2 size={14} className="mr-1" />
                                Remove
                            </button>
                        )}
                    </div>
                </div>

                {/* Input Fields */}
                <div className="mt-6 space-y-3">
                    <input
                        type="text"
                        value={name}
                        className="w-full p-3 text-gray-600 bg-gray-200 rounded-lg outline-none"
                        disabled
                    />
                    <input
                        type="email"
                        value={email}
                        className="w-full p-3 text-gray-600 bg-gray-200 rounded-lg outline-none"
                        disabled
                    />
                    <input
                        type="tel"
                        value={phone}
                        className="w-full p-3 text-gray-600 bg-gray-200 rounded-lg outline-none"
                        disabled
                    />
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-between">
                    <button className="w-full sm:w-1/3 py-3 bg-black text-white font-semibold rounded-lg transition duration-300 hover:bg-gray-800">
                        Update
                    </button>
                    <button className="w-full sm:w-1/3 py-3 bg-orange-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-orange-600">
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

const Accounts = () => {
    return (
        <div className="flex h-screen">
            <NavBar />
            <div className="flex flex-col flex-1">
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default Accounts;
