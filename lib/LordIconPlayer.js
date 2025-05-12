"use client";

const LordIconPlayer = ({ link, color, size, trigger, target, state }) => {
  const colorCode = color ? color : "#222";
  const fontSize = size ? size : 24;
  const triggerAction = trigger ? trigger : "hover";
  const targetApply = target ? target : "a";

  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${link}.json`}
      trigger={triggerAction}
      target={targetApply}
      colors={`primary:${colorCode}`}
      state={state}
      style={{ width: `${fontSize}px`, height: `${fontSize}px` }}
    ></lord-icon>
  );
};

export default LordIconPlayer;
