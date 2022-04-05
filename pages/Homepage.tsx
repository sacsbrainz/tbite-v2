import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Homepage() {
  return (
    <div className="">
      <Header />
      <div className="lg:px-30 flex w-full flex-1 flex-col items-center justify-center bg-[#f3f3f5] px-10 text-center dark:bg-black dark:text-white md:px-20">
        <div className="">
          <h1 className="flex flex-col pt-7 pb-6 font-serif text-3xl font-extrabold md:flex-row md:text-5xl lg:flex-row lg:text-6xl">
            Welcome to
            <span className="text-[#ff8243] shadow-2xl">
              {' '}
              Teemhee<span>'s</span> Bite
            </span>
          </h1>
          <p className="md:flex md:justify-center md:text-2xl lg:flex lg:justify-center  lg:text-4xl">
            A Taste Of Home.
          </p>
          <button className="btn mt-4  rounded-full bg-[#fe8b52] px-2 py-3 text-center shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white md:items-center  lg:place-content-center">
            <a href="#" className="px-4 py-1">
              Check our Menu
            </a>
          </button>
          <div className="pt-5">
            <Image
              src="/images/bt7.jpg"
              alt="food"
              className="lazyloaded rounded-full "
              data-ll-status="loaded"
              width={180}
              height={180}
            />
            <h1 className="pt-2 font-extrabold md:text-2xl lg:text-3xl">
              Rice and Chicken
            </h1>
            <h1 className="pt-2 pb-5 md:text-xl lg:text-xl">
              ganished rice with stew and chicken.
            </h1>
          </div>
          <div>
            <button className="btn mt-4 rounded-full  bg-[#eaeaeb] px-6 py-2 text-center text-[#fe8b52] shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white md:items-center  lg:place-content-center">
              About Us
            </button>
            <h1 className="pt-5 pb-3 text-xl font-extrabold md:text-2xl lg:text-3xl">
              Discover Teemhees Bite story
            </h1>
            <Image
              src="/images/title-shape.svg"
              alt="network"
              className="lazyloaded object-contain sm:object-scale-down md:object-scale-down lg:object-fill"
              data-ll-status="loaded"
              width={100}
              height={20}
            />
            <div>
              <p className="pt-5 pb-6">
                It has really been my dream to have my own kitchen, cook and
                make people happy, but I have not really had the time for that
                so my school started entrepreneurship and we were all forced to
                register a business so I took the opportunity to register my own
                food business And it’s really doing well for itself now 🥳🥺.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/about.jpg"
              alt="network"
              className="lazyloaded rounded-3xl "
              data-ll-status="loaded"
              width={280}
              height={240}
            />
            <div className="pb-7">
              <button className="btn mt-4 rounded-full  bg-[#eaeaeb] px-6 py-4 text-center text-[#fe8b52] shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white md:items-center  lg:place-content-center">
                Watch How It's Made
              </button>
            </div>
            <video autoPlay loop style={{ width: '5000px', height: '200px' }}>
              <source src="/images/video.mp4" />
            </video>
          </div>
          <div>
            <button className="btn mt-4 rounded-full  bg-[#eaeaeb] px-6 py-2 text-center text-[#fe8b52] shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white md:items-center  lg:place-content-center">
              Opening Hours
            </button>
            <h1 className="pt-6 font-serif text-2xl font-extrabold md:text-2xl lg:text-3xl">
              Monday to Friday
            </h1>
            <p className="pb-5 font-serif text-lg">9:00 Am - 22:00 Pm</p>
            <button className="btn mt-4 items-center rounded-full bg-[#eaeaeb]  p-5 text-center text-[#fe8b52] shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white  md:items-center lg:place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
            <a
              href="tel:+2347084970589"
              className="pt-6 font-serif text-2xl font-extrabold md:text-2xl lg:text-3xl"
            >
              <p className="pt-6 pb-7">+234 - 7084970589</p>
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <button className="btn mt-4 rounded-full  bg-[#eaeaeb] px-6 py-2 text-center text-[#fe8b52] shadow-lg shadow-black hover:shadow-inner dark:text-black dark:shadow-md dark:shadow-white md:items-center  lg:place-content-center">
            Our Team
          </button>
          <h1 className="pt-5 pb-3 text-xl font-extrabold md:text-2xl lg:text-3xl">
            Meet our Chefs
          </h1>
          <Image
            src="/images/title-shape.svg"
            alt="network"
            className="lazyloaded object-contain sm:object-scale-down md:object-scale-down lg:object-fill"
            data-ll-status="loaded"
            width={100}
            height={20}
          />
        </div>
        <div className="card bg-base-100 rounded-3xl shadow-xl dark:bg-white dark:text-black">
          <figure className="px-10 pt-10">
            <Image
              src="/images/chef/c1.jpg"
              alt="network"
              className="lazyloaded rounded-xl"
              data-ll-status="loaded"
              width={150}
              height={150}
            />
          </figure>
          <div className="card-body items-center pb-5 text-center">
            <h2 className="card-title pt-5 pb-3 text-xl font-extrabold md:text-2xl lg:text-3xl">
              Comfort
            </h2>
            <div className="card-actions flex justify-evenly">
              <a className="btn btn-primary flex gap-4 rounded-full border-0 bg-[#f5f5f5] p-3 text-[#ff8243] shadow-xl shadow-slate-600 hover:bg-black hover:text-[#efc31c] dark:bg-[#e9e2e2]  dark:shadow-md dark:shadow-white md:place-self-center md:justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="btn btn-primary flex gap-4 rounded-full border-0 bg-[#f5f5f5] p-3 text-[#ff8243] shadow-xl shadow-slate-600 hover:bg-black hover:text-[#efc31c] dark:bg-[#e9e2e2] dark:shadow-md dark:shadow-white md:place-self-center md:justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_teemhee"
                className="btn btn-primary flex gap-4 rounded-full border-0 bg-[#f5f5f5] p-3 text-[#ff8243] shadow-xl shadow-slate-600 hover:bg-black  hover:text-[#efc31c] dark:bg-[#e9e2e2] dark:shadow-md dark:shadow-white md:place-self-center md:justify-self-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a className="btn btn-primary flex gap-4 rounded-full border-0 bg-[#f5f5f5] p-3 text-[#ff8243] shadow-xl shadow-slate-600 hover:bg-black hover:text-[#efc31c] dark:bg-[#e9e2e2] dark:shadow-md dark:shadow-white md:place-self-center md:justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-5"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
