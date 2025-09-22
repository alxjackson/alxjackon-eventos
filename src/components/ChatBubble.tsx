import React from "react";

interface ChatBubbleProps { message: string; isOwn?: boolean }

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isOwn = false }) => {
  return (
    <div className={`p-2 my-1 rounded-lg max-w-xs ${isOwn ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-black"}`}>
      {message}
    </div>
  );
};

export default ChatBubble;