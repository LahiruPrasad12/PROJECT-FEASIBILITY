import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const Body = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setEmail(userData.email || "");
        }
    }, []);

    useEffect(() => {
        if (!email) return;

        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/projects?email=${email}`);
                setProjects(response.data.projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError("Failed to fetch projects.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [email]);

    const handleViewProject = (project) => {
        navigate("/recommandation", { state: { project } });
    };

    return (
        <div className="p-6 flex-1 bg-gray-100">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Project List</h2>

                {loading ? (
                    <div className="text-center py-4 text-gray-500">Loading projects...</div>
                ) : error ? (
                    <div className="text-center py-4 text-red-500">{error}</div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">No projects found</div>
                ) : (
                    <div className="space-y-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-50 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between shadow-sm hover:shadow-md transition-all"
                            >
                                <div>
                                    <p className="text-lg font-medium text-gray-800">{project.file_name}</p>
                                    <p className="text-sm text-gray-500">{project.date || "No date available"}</p>
                                </div>

                                <div className="flex space-x-3 mt-3 sm:mt-0">
                                    <button onClick={() => handleViewProject(project)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                                        <Eye className="text-gray-600" />
                                    </button>
                                    {/* <button className="p-2 rounded-lg bg-gray-200 hover:bg-blue-300 transition">
                                        <Edit className="text-gray-600" />
                                    </button> */}
                                    <button className="p-2 rounded-lg bg-gray-200 hover:bg-red-300 transition">
                                        <Trash2 className="text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProjectsPage = () => {
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

export default ProjectsPage;
