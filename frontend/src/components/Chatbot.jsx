import React, { useState } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Import icons

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Predefined questions and answers
  const qaPairs = [
    {
      question: "What are your shipping policies?",
      answer:
        "We offer free shipping on orders above $50. Standard shipping takes 3-5 business days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer refunds within 30 days of purchase. Please ensure the item is unused and in its original packaging.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or call us at +123-456-7890.",
    },
  ];

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftIcon className="h-6 w-6" />
        )}
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            <p className="text-sm text-gray-600">
              Select a question below to get an answer:
            </p>

            {/* List of Questions */}
            <ul className="space-y-2">
              {qaPairs.map((qa, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedQuestion(qa)}
                    className="w-full text-left bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center gap-3"
                  >
                    <ChatBubbleLeftIcon className="h-5 w-5 text-blue-500" />
                    <span>{qa.question}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Display Answer */}
            {selectedQuestion && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-blue-500 flex items-center gap-2">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  {selectedQuestion.question}
                </h4>
                <p className="text-gray-700 mt-2">{selectedQuestion.answer}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
