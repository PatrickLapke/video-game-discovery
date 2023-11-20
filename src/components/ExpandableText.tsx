import React from "react";

interface Props {
  children: React.ReactNode;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const renderContent = () => {
    if (typeof children === "string") {
      return `${children.substring(0, maxChar)}...`;
    }
  };
  return (
    <>
      <div>
        {renderContent()}
        <button>More</button>
      </div>
    </>
  );
};

export default ExpandableText;
