import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full">
        <img src={logo} alt="sumTool_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/Shahzaib0217/Ai-Summarizer");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        {/* only breaks on large devices */}
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
