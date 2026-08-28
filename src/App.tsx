import React, { useState, useCallback, useEffect } from "react";
import Cauldron from "./components/Cauldron";
import DetonationSwitch from "./components/DetonationSwitch";
import AlchemyPipes from "./components/AlchemyPipes";
import ElixirOutput from "./components/ElixirOutput";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [markdownOutput, setMarkdownOutput] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Add graffiti tags to the background
  useEffect(() => {
    const graffitiTags = ["VINX", "BOOM!", "Zaunite", "Hextech", "DISTILLERY"];
    graffitiTags.forEach((tag) => {
      const graffiti = document.createElement("div");
      graffiti.className = "graffiti";
      graffiti.textContent = tag;
      graffiti.style.left = `${Math.random() * 100}%`;
      graffiti.style.top = `${Math.random() * 100}%`;
      document.body.appendChild(graffiti);
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setStatus(`PDF Selected: ${file.name}`);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type === "application/pdf") {
        setSelectedFile(file);
        setStatus(`PDF Selected: ${file.name}`);
      }
    },
    []
  );

  const handleConvert = useCallback(async () => {
    if (!selectedFile) return;
    setIsConverting(true);
    setStatus("Transmuting PDF into Markdown...");

    // Simulate conversion (replace with actual API call to your backend)
    setTimeout(() => {
      setMarkdownOutput(
        `# ${selectedFile?.name.replace(".pdf", "")}\n\nThis is your refined Markdown elixir.`
      );
      setStatus("Transmutation complete!");
      setIsConverting(false);
    }, 3000);
  }, [selectedFile]);

  const handleFileInputClick = useCallback(() => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) fileInput.click();
  }, []);

  return (
    <div className="distillery-container">
      <h1 className="neon-pink">THE DISTILLERY</h1>
      <p className="hextech-cyan">Transmute PDFs into Pure Markdown Alchemy</p>

      <Cauldron
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleFileInputClick}
        fileName={selectedFile?.name || null}
      />

      <input
        type="file"
        id="file-input"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <DetonationSwitch
        onClick={handleConvert}
        disabled={!selectedFile || isConverting}
        isConverting={isConverting}
      />

      <div className="status">{status}</div>

      {isConverting && <AlchemyPipes />}

      {markdownOutput && <ElixirOutput markdown={markdownOutput} />}
    </div>
  );
};

export default App;