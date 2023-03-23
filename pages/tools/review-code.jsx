import React from "react";
import Editor from "@monaco-editor/react";

function ReviewCode() {
  return (
    <div className="flex flex-col items-center pt-24">
        <div className="flex w-[50vw] py-4 justify-start">
            <h1 className="text-sm font-regular">Paste your css here</h1>
        </div>
      <Editor height="50vh" width="50vw" defaultLanguage="css" />
      <button
        href="/pricing"
        className="bg-[#161616] text-white font-regular px-4 py-2 rounded-lg mt-10"
      >
        Review Code
      </button>
    </div>
  );
}

export default ReviewCode;
