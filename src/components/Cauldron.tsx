import React from "react";

interface CauldronProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onClick: () => void;
  fileName: string | null;
}

const Cauldron: React.FC<CauldronProps> = ({ onDrop, onDragOver, onClick, fileName }) => {
  return (
    <div
      className="cauldron-dropzone"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={onClick}
    >
      <p>{fileName ? fileName : "DROP YOUR PDF HERE"}</p>
      {fileName ? null : <p className="subtext">(or risk the explosion)</p>}
      <input
        type="file"
        id="file-input"
        accept=".pdf"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Cauldron;