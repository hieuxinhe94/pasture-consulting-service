import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  userinfo,
   
  ctaTexts,
  digitalTransformationSteps,
  digitalMeasureToolMetatdata,
  digitalConceptMetatdata,
} from "../Constants/userinfo";
import Link from "next/link";

const SectionCardTypeConcept = ({ currentTheme, data }) => {
  const [toggleId, setToggleId] = useState(null);

  return (
    <div className={styles.educationWrapper + " container mx-auto"}>
      <div
        className={
          styles.workheading +
          " flex items-end md:text-sm lg:text-4xl px-4 " +
          styles.lineHorizontal
        }
        data-aos="fade-up"
      >
        {digitalConceptMetatdata?.title}
      </div>

      <section className="lg:mt-20 text-and-media-block relative px-4 bg-no-repeat overflow-hidden py-8 md:py-12 xl:py-16 bg-primary-color bg-cover bg-center">
        <div className="container mx-auto   relative px-2">
          <div className="bg-theme-light-gray pt-8 px-2 lg:px-0">
            <div className="flex relative flex-wrap">
              <div className="w-full lg:w-1/2 ">
                <div className="relative shadow-image transform   lg:-translate-y-20 ratio-3-2 lg:ratio-none lg:-translate-x-3 xl1450:-translate-x-20">
                  <div className="my-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                      <img
                        className="p-2 mt-8 object-cover w-full h-64 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                      />
                      <a
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                      >
                        <Link href={`/post/`}>
                          <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg
                              className="w-10 text-gray-900"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                            </svg>
                          </div>
                        </Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2  transform   lg:translate-y-0 mt-2 lg:mt-0 lg:pr-12">
                <h2 className="text-primary-color -mt-10 font-semibold">
                  {digitalConceptMetatdata?.subtitle}
                </h2>
                <div
                  className="flex flex-wrap text-center pt-4 mb-2"
                  data-aos="fade-up"
                >
                  <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                    PDF Book download
                  </div>
                  <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                    Video download
                  </div>
                </div>
                <div className="wysiwyg">
                  <p className="py-2 font-light text-gray-300 lg:w-4/5">
                    {digitalConceptMetatdata?.description}
                  </p>

                  <div className="w-full text-center sm:w-3/4 lg:w-4/5">
                    <ul className="accordion mt-4">
                      {digitalConceptMetatdata?.features &&
                        digitalConceptMetatdata?.features.map((item, key) => {
                          return (
                            <li
                              key={key}
                              className="py-5 rounded relative text-left border-sep cursor-pointer"
                              data-aos="fade-up"
                              data-aos-duration={200 + key * 500}
                            >
                              <div className="flex justify-between align-center">
                                <p className="">{item.title}</p>
                                <p
                                  className="text-xl font-bold ml-2"
                                  onClick={() => {
                                    if (key == toggleId) setToggleId(null);
                                    else {
                                      setToggleId(key);
                                    }
                                  }}
                                >
                                  <span className="plus block">
                                    {key == toggleId ? "-" : "+"}
                                  </span>
                                </p>
                              </div>
                              <div
                                className={
                                  (key == toggleId ? "" : "!visible hidden  ") +
                                  " rounded-lg shadow-lg"
                                }
                                id="collapseExample"
                                data-te-collapse-item
                              >
                                <div className="block rounded-lg py-2 text-sm text-gray-300 dark:bg-neutral-700 dark:text-neutral-50 text-justify">
                                  {item.description}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default SectionCardTypeConcept;
