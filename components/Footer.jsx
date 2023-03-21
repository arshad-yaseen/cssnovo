import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/Logos/Svgs/white-logo-circle.svg'

function Footer() {
  return (


<footer className="relative z-10 font-regular bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
        <div className="mb-10 w-full">
          <a href="javascript:void(0)" className="mb-6 inline-block max-w-[70px]">
            <Image
              src={logo}
              alt="logo"
              className="max-w-full"
            />
          </a>
          <p className="text-body-color mb-7 text-base">
          Unlock CSS&apos;s potential with cssnovo - Your ultimate toolkit for effortless and efficient web design, with intuitive tools and expert guidance to create
          </p>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark mb-9 text-lg font-semibold">Resources</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Website Generator
              </a>
            </li>
           
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Playground
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark mb-9 text-lg font-semibold">Tools</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                CSS Generator
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Framework converter
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Design to code
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                CSS to SCSS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark mb-9 text-lg font-semibold">Quick Links</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Signup
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
          <div className="mb-6 flex items-center">
            <a
              href="javascript:void(0)"
              className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-black sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                className="fill-current"
              >
                <path
                  d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
                />
              </svg>
            </a>
          </div>
          <p className="text-body-color text-base">&copy; 2023 Cssnovo</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <span className="absolute left-0 bottom-0 z-[-1]">
      <svg
        width="217"
        height="229"
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1="281"
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3056D3" stop-opacity="0.08" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
   
  </div>
</footer>



  )
}

export default Footer