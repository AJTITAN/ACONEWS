import React from 'react';

function Cards({ article, darkMode }) {
  return (
    <div
      className={`flex flex-col justify-between max-w-sm border border-gray-300 rounded-lg shadow-md m-3 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
      }`}
    >
      <div className="w-full h-56">
        <img
          className="rounded-t-lg object-cover w-full h-full"
          src={article.image || 'https://via.placeholder.com/400x225?text=No+Image'}
          alt={article.title || 'Article image'}
        />
      </div>

      <div className={`p-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
        <h5
          className={`mb-2 text-xl font-bold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {article.title || 'No Title'}
        </h5>

        <p
          className={`mb-3 font-sans ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {article.description
            ? article.description.split(" ").slice(0, 40).join(" ")
            : 'No description available'}
          {article.description && article.description.split(" ").length > 40 && " ..."}
        </p>

        <div className="flex justify-between items-center">
          <a
            href={article.url || '#'}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
              darkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-800'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>

          <div
            className={`px-2 py-1 text-xs font-medium rounded-lg ${
              darkMode ? 'text-gray-400 bg-gray-800 border-gray-700' : 'text-gray-700 bg-white border-gray-200'
            }`}
          >
            <p>Source:</p>
            <p>{article.source?.name || 'Unknown Source'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
