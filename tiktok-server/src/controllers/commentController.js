const dataStore = require('../models/index');

// Get all comments
const getAllComments = (req, res) => {
    res.json(comments);
};

// Create a new comment
const createComment = (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
};

// Get comment by ID
const getCommentById = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Update comment
const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const updatedComment = req.body;
    const index = comments.findIndex(c => c.id === commentId);
    if (index !== -1) {
        comments[index] = updatedComment;
        res.json(updatedComment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Delete comment
const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const index = comments.findIndex(c => c.id === commentId);
    if (index !== -1) {
        comments.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Like comment
const likeComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.likes = (comment.likes || 0) + 1;
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Unlike comment
const unlikeComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.likes = Math.max((comment.likes || 0) - 1, 0);
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Export all functions
module.exports = {
    getAllComments,
    createComment,
    getCommentById,
    updateComment,
    deleteComment,
    likeComment,
    unlikeComment,
};