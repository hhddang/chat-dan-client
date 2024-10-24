import React, { useState } from "react";

export const Section = ({ order, children, style }: { order: number, children: React.ReactNode; style?: string; }) => {
  return (
    <section style={{ order: order }} className={`w-full h-full min-h-full flex flex-col pt-[90px] pb-[70px] px-[20px] md:px-[60px] ${style ?? ""}`}>
      {children}
    </section>
  );
};

export const SubTitle = ({ text, style }: { text: string; style?: string; }) => {
  return <h2 className={`[&:not(:first-child)]:mt-[60px] text-center mb-[30px] font-bold md:text-left ${style ?? ""}`}>{text}</h2>;
};

export const RoomCard = ({ name, imageUrl }: { name: string; imageUrl: string; }) => {
  return (
    <div className="cursor-pointer w-[200px] md:w-[250px] aspect-[5/3] overflow-hidden rounded-[24px] border-[3px] border-white shadow-lg">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`w-full h-full transition-all duration-300 hover:scale-110 active:scale-110 active:text-[var(--secondary)] grid place-items-center`}>
        <span className="text-inherit">{name}</span>
      </div>
    </div>
  );
};

export const Button = ({ children, noOutline, isText, color, style, onClick }: { children: React.ReactNode, noOutline?: boolean, isText?: boolean, color?: string, style?: string, onClick?: () => void; }) => {
  return (
    <button className={`min-w-[150px] py-[5px] rounded-[24px] transition-all duration-100 active:text-[var(--secondary)] ${noOutline ? '' : 'border-[3px] border-white shadow-lg px-[15px]'} ${isText ? 'pointer-events-none' : ''} ${style ?? ''}`}
      style={{ backgroundColor: color }}
      onClick={() => onClick?.()}>{children}</button>
  );
};

export const ConfirmedInput = ({
  placeholder,
  value,
  buttonLabel,
  checkDifferent,
  style,
  onConfirm,
}: {
  placeholder: string;
  value: string;
  buttonLabel: string;
  checkDifferent?: boolean;
  style?: string;
  onConfirm: (value: string) => void;
}) => {
  const [input, setInput] = useState(value);
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <div className={`flex gap-[10px] md:gap-[20px] flex-col items-center md:flex-row ${style ?? ""}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        className="w-full h-full max-w-[600px] bg-transparent border-b border-gray-500 rounded-none outline-none text-center py-[5px] placeholder:text-gray-500"
        onChange={(e) => setInput(e.target.value.trimStart())}
      />
      <Button
        style={`${input.trim() === "" || (currentValue === input.trim() && checkDifferent) ? "opacity-0 translate-y-full md:translate-y-0 md:-translate-x-full pointer-events-none" : ""}`}
        onClick={() => {
          setCurrentValue(input.trim());
          setInput(input.trim());
          onConfirm(input.trim());
        }}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export const SwipeView = ({ children, style }: { children: React.ReactNode, style?: string; }) => {
  return (
    <div className={`w-screen overflow-x-auto snap-x snap-mandatory scrollbar-none ml-[-20px] md:ml-[-60px] px-[20px] md:px-[60px] ${style ?? ''}`}>
      <div className="w-full min-w-max h-full flex justify-center md:justify-start">
        <div className="h-full w-fit flex flex-col flex-wrap gap-[20px] items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
