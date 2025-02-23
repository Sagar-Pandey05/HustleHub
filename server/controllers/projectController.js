const Project = require("../../models/Project");

// @desc    Create a new project (Employer only)
// @route   POST /api/projects
// @access  Private (Employer)
const createProject = async (req, res) => {
    try {
        const { title, description, budget } = req.body;

        if (!title || !description || !budget) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const project = new Project({
            title,
            description,
            budget,
            employer: req.user.userId, // Employer's ID from auth middleware
        });

        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("employer", "name email");
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("employer", "name email");

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a project (Employer only)
// @route   PUT /api/projects/:id
// @access  Private (Employer)
const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.employer.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        project.title = req.body.title || project.title;
        project.description = req.body.description || project.description;
        project.budget = req.body.budget || project.budget;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a project (Employer only)
// @route   DELETE /api/projects/:id
// @access  Private (Employer)
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.employer.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};
