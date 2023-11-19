import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  if (isClicked)
    return <FaHeart size={50} onClick={handleClicked} color="pink" />;
  return <FaRegHeart size={50} onClick={handleClicked} />;
};

export default Like;
