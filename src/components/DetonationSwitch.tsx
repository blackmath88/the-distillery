import React from "react";

interface DetonationSwitchProps {
  onClick: () => void;
  disabled: boolean;
  isConverting: boolean;
}

const DetonationSwitch: React.FC<DetonationSwitchProps> = ({ onClick, disabled, isConverting }) => {
  return (
    <button
      className="detonation-switch"
      onClick={onClick}
      disabled={disabled}
    >
      {isConverting ? "TRANSMUTING..." : "INITIATE TRANSMUTATION"}
    </button>
  );
};

export default DetonationSwitch;