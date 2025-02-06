"use client";

import React, { useState, useEffect } from 'react';

// Define a type for the comment object
interface Comment {
  username: string;
  comment: string;
}

const Commentsec: React.FC = () => {
  // State to hold the username and comment input
  const [username, setUsername] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  // State to hold all the comments, typed as an array of Comment objects
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]') as Comment[];
    setComments(storedComments);
  }, []);

  // Function to handle comment submission
  const handleSubmit = () => {
    if (!username || !comment) {
      alert('Please provide both username and comment');
      return;
    }

    // Create new comment object
    const newComment: Comment = { username, comment };

    // Add new comment to the existing list
    const updatedComments = [...comments, newComment];

    // Save updated comments to localStorage
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    // Update the comments state
    setComments(updatedComments);

    // Clear input fields
    setUsername('');
    setComment('');
  };

  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="text-xl font-semibold text-center mb-6">Comments</h1>

      {/* Comment Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <input
          type="text"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="  border-[#e05780] bg-[#e05780]/90 transition-colors duration-200 hover:bg-white hover:text-[#00072d] hover:border-[3px]  w-full p-3 text-white rounded-lg focus:outline-none"
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div className="mt-8 space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commentsec;
