import React from "react";

interface ElixirOutputProps {
  markdown: string;
}

const ElixirOutput: React.FC<ElixirOutputProps> = ({ markdown }) => {
  return (
    <div className="elixir-output">
      <pre>{markdown}</pre>
    </div>
  );
};

export default ElixirOutput;