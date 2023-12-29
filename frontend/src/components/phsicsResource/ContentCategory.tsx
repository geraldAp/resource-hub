import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Resource {
  _id: string;
  name: string;
  slug: string
  courses: {
    course_title: string;
    introduction: string;
    resourceSlug: string
  }[];
}

interface PropType {
  Resources: Resource[] | undefined;
}

const ContentCategory: React.FC<PropType> = ({ Resources }) => {
  return (
    <>
      {Resources?.map((resource: Resource) => (
        <Disclosure as="div" className='mb-3' key={resource._id}>
          {({ open }) => (
            <>
              {/* year or specialization */}
              <Disclosure.Button className="flex  justify-between w-full duration-300 ease-in-out">
                <h3 className=" text-sm md:text-lg 2xl:text-xl font-semibold">
                  {resource.name}
                </h3>
                <FaChevronRight
                  className={`min-h-14 min-w-14 text-primary-200 ${
                    open ? "transform rotate-90" : ""
                  } transition-transform duration-300 ease-in-out`}
                />
              </Disclosure.Button>
              {/* course options */}
              <Transition
              enter="transition duration-300 ease-in"
              enterFrom="opacity-0 translate-y-[-10px]"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-300 ease-out"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-[-10px]"
              >
                <Disclosure.Panel as="div" className="mt-2 bg-[#D9D9D933] p-4 rounded-lg">

                  {resource?.courses?.length > 0 ? (
                    resource.courses.map((course) => (
                      <Link to={`/physics/resources/${resource.slug}/${course.resourceSlug}`} key={course.course_title}>{course.course_title}</Link>
                    ))
                  ) : (
                    <div>
                      <p>Courses are coming soon</p>
                    </div>
                  )}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

export default ContentCategory;
