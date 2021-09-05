import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";


export default function Dropdown() {
  return (
    <div>
      <Menu as="div" className="flex  relative inline-block text-left">
        <Menu.Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown absolute z-50 right-0 w-56 mt-10 origin-top-right bg-dark-primary bg-opacity-70 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-white"
                    } group hover:bg-white hover:bg-opacity-5 flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    New Tab
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-white"
                    } group hover:bg-white hover:bg-opacity-5 flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    History
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-white"
                    } group hover:bg-white hover:bg-opacity-5 flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    More Tools
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-white"
                    } group hover:bg-white hover:bg-opacity-5 flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
