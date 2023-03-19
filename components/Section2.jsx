import React from "react";

function Section2() {
  return (
    <div className="w-full h-[80vh] flex pt-10 bg-[#F0F1EE]">
      <div className="w-1/2 h-full  flex flex-col justify-center px-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="scale-150  rounded-3xl "
          src="https://rr2---sn-5aap5ojx-jv3l.googlevideo.com/videoplayback?expire=1679226575&ei=b6IWZO2OHcyO_9EPzNau6AY&ip=216.131.72.167&id=o-ACnTFlXeGx4U__6eEadKyQChAOCLPs1KncRzSuZw92E_&itag=315&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&spc=H3gIhjTL8ZDL7SsBVUQtEYGVgk77yOaXoXUk402w6f-6Pbqk4g&vprv=1&mime=video%2Fwebm&ns=b22SeU0np11Dh4uQQl7FulgL&gir=yes&clen=327147698&dur=1050.016&lmt=1657038622945662&keepalive=yes&fexp=24007246&c=WEB&txp=5319224&n=wNwQhhui3GYAhA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgD1lL0U6R9yx9pjG0Ax75Y3h9i66c6qBoLFN-OHbyRVACIGX0A8YFeQULmJvvStfVNZ4HDomIK0q1EgJflR1KxrkE&redirect_counter=1&rm=sn-p5qeer76&req_id=17ec3ecc3e8fa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=DG&mip=103.78.17.49&mm=31&mn=sn-5aap5ojx-jv3l&ms=au&mt=1679204711&mv=m&mvi=2&pcm2cms=yes&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIhANk0e-iH8Kb0Sc9r1ZIROEsmCMMBLB1fX2PjQ_H7kgBgAiAKewbhXS_WT2_NyFHUZ4ahDjJ5TzqXrsRm4CWmWCc4LQ%3D%3D"
        ></video>
      </div>
      <div className="w-1/2 h-full  flex flex-col justify-center px-20">
        <h1 className="text-6xl font-medium">
          Design to code, <br /> in seconds
        </h1>
        <p className="font-regular text-xl mt-10">
        Convert your designs into functional code quickly and easily with Design to Code.
        </p>

        <ul>
          <li className="font-regular text-xl mt-10 flex">
            <img
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              alt="tick"
              className="h-7 mr-2"
            />{" "}
            Not just html and css
          </li>
          <li className="font-regular text-xl mt-4 flex">
            <img
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              alt="tick"
              className="h-7 mr-2"
            />{" "}
            React, Vue, Angular, Svelte, and more
          </li>
        </ul>

        <button className="bg-white text-black border-black border-2 font-regular w-fit text-lg px-6 py-2 mt-10 rounded-md">
          Try it now
        </button>
      </div>
    </div>
  );
}

export default Section2;
