import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import curvedArrow from "../public/assets/svgs/curved-thin-arrow-icon.svg";
import Image from "next/image";

function HomeExampleSection() {
  const codeStyles1 = {
    fontSize: "16px",
    overflowY: "scroll",
    height: "500px",
    width: "500px",
    borderRadius: "15px",
  };
  const codeStyles2 = {
    fontSize: "16px",
    overflowY: "scroll",
    width: "500px",
    height: "500px",
    borderRadius: "15px",
    pointerEvents: "none",
  };

  let tailwindcss_code = `<section className="bg-gray-100 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl leading-9 font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-1/2 px-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-lg font-medium text-gray-900 mb-4">Lorem ipsum dolor</p>
          <p className="text-base font-semibold text-gray-700">- John Doe, CEO</p>
        </div>
      </div>
      <div className="w-1/2 px-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-lg font-medium text-gray-900 mb-4">Lorem ipsum dolor</p>
          <p className="text-base font-semibold text-gray-700">- Jane Doe, COO</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  let responsive_tailwindcss_code = `<section className="bg-gray-100 py-8 lg:py-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-9 font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-base sm:text-lg font-medium text-gray-900 mb-4">Lorem ipsum dolor</p>
        <p className="text-sm sm:text-base font-semibold text-gray-700">- John Doe, CEO</p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-4 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-base sm:text-lg font-medium text-gray-900 mb-4">Lorem ipsum dolor</p>
        <p className="text-sm sm:text-base font-semibold text-gray-700">- Jane Doe, COO</p>
      </div>
    </div>
  </div>
  </div>
</section>`;

let materialize_code = `<section class="grey lighten-4 py-12">
<div class="container">
  <h2 class="center-align grey-text text-darken-4">What Our Clients Say</h2>
  <div class="row">
    <div class="col s12 m6">
      <div class="card white rounded">
        <div class="card-content">
          <p class="card-title grey-text text-darken-4">Lorem ipsum dolor</p>
          <p class="grey-text text-darken-2">- John Doe, CEO</p>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card white rounded">
        <div class="card-content">
          <p class="card-title grey-text text-darken-4">Lorem ipsum dolor</p>
          <p class="grey-text text-darken-2">- Jane Doe, COO</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
`;

let bootstrap_code = `<section class="bg-light py-5">
<div class="container">
<h2 class="text-center mb-5">What Our Clients Say</h2>
<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">"Lorem ipsum dolor"</p>
      </div>
      <div class="card-footer">
        <p class="font-weight-bold mb-0">- John Doe, CEO</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">"Lorem ipsum dolor"</p>
      </div>
      <div class="card-footer">
        <p class="font-weight-bold mb-0">- Jane Doe, COO</p>
      </div>
    </div>
  </div>
</div>
</div>
</section>
`;
let foundation_code = `<section class="bg-light py-5">
<div class="grid-container">
<h2 class="text-center mb-5">What Our Clients Say</h2>
<div class="grid-x grid-padding-x">
  <div class="cell medium-6 mb-4">
    <div class="card">
      <div class="card-section">
        <p class="card-text">"Lorem ipsum dolor"</p>
      </div>
      <div class="card-section">
        <p class="font-weight-bold mb-0">- John Doe, CEO</p>
      </div>
    </div>
  </div>
  <div class="cell medium-6 mb-4">
    <div class="card">
      <div class="card-section">
        <p class="card-text">"Lorem ipsum dolor"</p>
      </div>
      <div class="card-section">
        <p class="font-weight-bold mb-0">- Jane Doe, COO</p>
      </div>
    </div>
  </div>
</div>
</div>
</section>`;

let html = `<section class="testimonial-section">
<div class="testimonial-container">
<h2 class="testimonial-title">Testimonials</h2>
<div class="testimonial-card">
  <div class="testimonial-content">
    <p class="testimonial-text">Lorem ipsum dolor.</p>
    <p class="testimonial-author">- John Doe, CEO</p>
  </div>
</div>
<div class="testimonial-card">
  <div class="testimonial-content">
    <p class="testimonial-text">Aliquam feugiat ligula</p>
    <p class="testimonial-author">- Jane Doe, COO</p>
  </div>
</div>
</div>
</section>
`;
 
  let css = `.testimonial-section {
  background-color: #f9f9f9;
  padding: 60px 0;
}

.testimonial-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.testimonial-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.testimonial-card {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: calc(50% - 15px);
  margin-bottom: 30px;
  overflow: hidden;
}

@media (max-width: 767px) {
  .testimonial-card {
    width: 100%;
  }
}

.testimonial-content {
  padding: 30px;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.testimonial-author {
  font-size: 16px;
  font-style: italic;
  color: #999;
}`;

let compatible_css = `.testimonial-section {
  background-color: #f9f9f9;
  padding: 60px 0;
}

.testimonial-container {
  max-width: 800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.testimonial-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.testimonial-card {
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: calc(50% - 15px);
  margin-bottom: 30px;
  overflow: hidden;
}

@media (max-width: 767px) {
  .testimonial-card {
    width: 100%;
  }
}

.testimonial-content {
  padding: 30px;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.testimonial-author {
  font-size: 16px;
  font-style: italic;
  color: #999;
}
`

  let [outputCode, setOutputCode] = useState(``);
  let [startCode, setStartCode] = useState(html);
  let [startMessage, setStartMessage] = useState(`HTML`);
  let [outputMessage, setOutputMessage] = useState(`GENERATED CSS`);

  let i = 0;
  const speed = 0.001;
  let timer;

  useEffect(() => {
    function Write0() {
      if (i < css.length) {
        document
          .getElementById("output")
          .scrollTo(0, document.getElementById("output").scrollHeight);
        setOutputCode((prevOutputCode) => prevOutputCode + css.charAt(i));
        i++;
        timer = setTimeout(Write0, speed);
      } else {
        i = 0;

        setTimeout(() => {
          setOutputCode(``);
          setOutputMessage(`To Responsive Tailwindcss Code`);
          setStartCode(tailwindcss_code);
          setStartMessage(`From Tailwindcss Code`);
          setTimeout(Write1, 1000);
        }, 2000);
      }
    }
    function Write1() {
      if (i < responsive_tailwindcss_code.length) {
        document
          .getElementById("output")
          .scrollTo(0, document.getElementById("output").scrollHeight);
        setOutputCode(
          (prevOutputCode) =>
            prevOutputCode + responsive_tailwindcss_code.charAt(i)
        );
        i++;
        timer = setTimeout(Write1, speed);
      } else {
        i = 0;

        setTimeout(() => {
          setOutputCode(``);
          setStartCode(css);
          setStartMessage(`From CSS`);
          setOutputMessage(`To All Browsers Compatible CSS`);
          setTimeout(Write2, 1000);
        }, 2000);
      }
    }
    function Write2() {
      if (i < compatible_css.length) {
        document
          .getElementById("output")
          .scrollTo(0, document.getElementById("output").scrollHeight);
        setOutputCode(
          (prevOutputCode) =>
            prevOutputCode + compatible_css.charAt(i)
        );
        i++;
        timer = setTimeout(Write2, speed);
      } else {
        i = 0;

        setTimeout(() => {
          setOutputCode(``);
          setOutputMessage(`To Materialize Code`);
          setStartMessage(`From Tailwindcss Code`);
          setStartCode(tailwindcss_code);
          setTimeout(Write3, 1000);
        }, 2000);
      }
    }
    function Write3() {
      if (i < materialize_code.length) {
        document
          .getElementById("output")
          .scrollTo(0, document.getElementById("output").scrollHeight);
        setOutputCode(
          (prevOutputCode) => prevOutputCode + materialize_code.charAt(i)
        );
        i++;
        timer = setTimeout(Write3, speed);
      } else {
        i = 0;
        setTimeout(() => {
          setStartMessage(`From Bootstrap Code`);
          setOutputMessage(`To Foundation Code`);
          setStartCode(bootstrap_code);
          setOutputCode(``);
          setTimeout(Write4, 1000);
        }, 2000);
        // Wait for 1 second before starting Write1 again
      }
    }
    function Write4() {
      if (i < foundation_code.length) {
        document
          .getElementById("output")
          .scrollTo(0, document.getElementById("output").scrollHeight);
        setOutputCode(
          (prevOutputCode) => prevOutputCode + foundation_code.charAt(i)
        );
        i++;
        timer = setTimeout(Write4, speed);
      } else {
        i = 0;
        setTimeout(() => {
          setStartMessage(`HTML`);
          setOutputMessage(`GENERATED CSS`);
          setStartCode(html);
          setOutputCode(``);
          setTimeout(Write0, 1000);
        }, 2000);
        // Wait for 1 second before starting Write1 again
      }
    }

    Write0(); // Start with Write1 function

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div   className="h-[90vh] flex  w-full mt-10 bg-[#F0F1EE]">
      <div  className="w-1/2 flex-col h-full flex items-end justify-center pb-20">
        <SyntaxHighlighter
        
          id="start"
          language={outputMessage === "To All Browsers Compatible CSS" ? "css" : "jsx"}
          style={dracula}
          customStyle={codeStyles1} 
        >
          {startCode}
        </SyntaxHighlighter>
        <h1 className="font-regular mt-2 example-message text-[#161616]">{startMessage}</h1>
      </div>
      <div className="h-full flex items-center px-12">
        <Image height={36} src={curvedArrow} alt="curved-arrow" />
      </div>
      <div className="w-1/2 flex-col h-full flex justify-center items-start ">
        <h1 className="font-regular mt-2 example-message text-[#161616]">{outputMessage}</h1>
        <SyntaxHighlighter
          id="output"
          language={outputMessage === "GENERATED CSS" || outputMessage === "To All Browsers Compatible CSS" ? "css" : "jsx"}
          style={dracula}
          customStyle={codeStyles2}
        >
          {outputCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default HomeExampleSection;
