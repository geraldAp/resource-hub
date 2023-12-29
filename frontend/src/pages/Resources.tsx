import React from "react";
import { useParams } from "react-router-dom";

const dummyData = {
  courseSlug: "introductory-mechanics",
  resourceSlug: "course-materials",
  courseTitle: "Introductory Mechanics",
  courseIntro: "An overview of fundamental principles in classical mechanics.",
  difficultyLevel: "Intermediate",
  weeklyHours: 5,
  books: [
    {
      title: "Mechanics for Engineers",
      author: "John Smith",
      image: "https://placekitten.com/200/300",
      url: "https://example.com/book1",
    },
    // Add more book entries as needed
  ],
  videos: [
    {
      title: "Introduction to Mechanics",
      url: "https://example.com/video1",
    },
    // Add more video entries as needed
  ],
  googleDocs: [
    {
      title: "Mechanics Cheat Sheet",
      url: "https://example.com/cheat-sheet",
    },
    // Add more Google Docs entries as needed
  ],
  websites: [
    {
      title: "Physics World",
      url: "https://example.com/physics-world",
    },
    // Add more website entries as needed
  ],
};

const Resources = () => {
  // const { courseSlug, resourceSlug } = useParams();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{dummyData.courseTitle}</h1>
      <p className="text-gray-600 mb-4">{dummyData.courseIntro}</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Course Details</h2>
        <p>
          Difficulty Level: {dummyData.difficultyLevel}
          <br />
          Weekly Hours: {dummyData.weeklyHours}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Books</h2>
        {dummyData.books.map((book, index) => (
          <div key={index} className="mb-2">
            <img
              src={book.image}
              alt={book.title}
              className="w-16 h-24 mr-2 object-cover rounded"
            />
            <a
              href={book.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {book.title} by {book.author}
            </a>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Videos</h2>
        {dummyData.videos.map((video, index) => (
          <div key={index} className="mb-2">
            <a
              href={video.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {video.title}
            </a>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Google Docs</h2>
        {dummyData.googleDocs.map((doc, index) => (
          <div key={index} className="mb-2">
            <a
              href={doc.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.title}
            </a>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Websites</h2>
        {dummyData.websites.map((website, index) => (
          <div key={index} className="mb-2">
            <a
              href={website.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
