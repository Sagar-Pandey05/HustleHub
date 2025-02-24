const express = require("express");
const { 
    createProject, 
    getAllProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} = require("../../controllers/projectController");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

console.log("createProject:", typeof createProject); // Should log 'function'
console.log("authMiddleware:", typeof authMiddleware); // Should log 'function'


console.log("createProject:", createProject); // Check if this logs correctly

// Public Routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

// Protected Routes (Only Employers can create/update/delete projects)
router.post("/", authMiddleware, createProject);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
