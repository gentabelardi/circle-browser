import { motion } from "framer-motion";
import React, { useState } from "react";
import Dropdown from "../Dropdown";
import { connect } from "react-redux";
import logo from "./logo.svg";
import { dataTab } from "../../../utils/data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Transition } from "@headlessui/react";
const { ipcRenderer } = window.require("electron");

interface IProps {
  type: string;
  bgColor: string;
  btnBack: any;
  btForward: any;
  btReload: any;
  searchValue: any;
  canGoForward: any;
  seacrhEnggine: any;
}
function Navbar(props: IProps) {
  const [characters, updateCharacters] = useState(dataTab);
  const [tabOpen, setTabOpen] = useState(1);
  const windowClose = () => {
    ipcRenderer.send("closeApp");
  };
  const { seacrhEnggine } = props;
  const clickDiv = (index: number) => {
    setTabOpen(index);
  };
  const windowMax = () => {
    ipcRenderer.send("windowMax");
  };
  const windwoMinimize = () => {
    ipcRenderer.send("windwoMinimize");
  };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <header
      className={`navbar  w-full bg-dark-primary  border-b border-black  border-opacity-10 flex-none w-full flex flex-row items-center px-5 py-3`}
    >
      <div className=" flex mx-auto flex w-full flex-row justify-between items-center">
        <div className="flex space-x-2  w-full mr-5 ">
          <div className="flex mr-3  space-x-2">
            <motion.button onClick={windowClose} whileTap={{ scale: 1.2 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#E13B31" />
              </svg>
            </motion.button>
            <motion.button onClick={windwoMinimize} whileTap={{ scale: 1.2 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#E1CC00" />
              </svg>
            </motion.button>
            <motion.button onClick={windowMax} whileTap={{ scale: 1.2 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#3BC759" />
              </svg>
            </motion.button>
          </div>
          <div className="flex space-x-5 w-full ">
            <div className="flex space-x-1">
              <motion.button onClick={props.btnBack} whileTap={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                    fill="rgba(255,255,255)"
                  />
                </svg>
              </motion.button>
              {props.canGoForward ? (
                <motion.button
                  onClick={props.btForward}
                  whileTap={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                      fill="rgba(255,255,255)"
                    />
                  </svg>
                </motion.button>
              ) : (
                <div className="flex  items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                      fill="rgba(255,255,255,0.5)"
                    />
                  </svg>
                </div>
              )}

              {props.btReload ? (
                <motion.button
                  onClick={props.btReload}
                  whileTap={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"
                      fill="rgba(255,255,255)"
                    />
                  </svg>
                </motion.button>
              ) : (
                <img src="icon/loading2.gif" alt="loading..." />
              )}
            </div>
            <div className="flex w-full  space-x-2">
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="bg-blur bg-white rounded-md px-2 bg-opacity-30 hover:bg-opacity-20"
              >
                {seacrhEnggine === "GOOGLE" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#ff3d00"
                      d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"
                    />
                    <path
                      fill="#fff"
                      d="M26,16.2c-0.6-0.6-1.5-0.9-2.5-1.1c-0.4-0.5-1-1-1.9-1.5c-1.6-0.8-3.5-1.2-5.3-0.9h-0.4 c-0.1,0-0.2,0.1-0.4,0.1c0.2,0,1,0.4,1.6,0.6c-0.3,0.2-0.8,0.2-1.1,0.4c0,0,0,0-0.1,0L15.7,14c-0.1,0.2-0.2,0.4-0.2,0.5 c1.3-0.1,3.2,0,4.6,0.4C19,15,18,15.3,17.3,15.7c-0.5,0.3-1,0.6-1.3,1.1c-1.2,1.3-1.7,3.5-1.3,5.9c0.5,2.7,2.4,11.4,3.4,16.3 l0.3,1.6c0,0,3.5,0.4,5.6,0.4c1.2,0,3.2,0.3,3.7-0.2c-0.1,0-0.6-0.6-0.8-1.1c-0.5-1-1-1.9-1.4-2.6c-1.2-2.5-2.5-5.9-1.9-8.1 c0.1-0.4,0.1-2.1,0.4-2.3c2.6-1.7,2.4-0.1,3.5-0.8c0.5-0.4,1-0.9,1.2-1.5C29.4,22.1,27.8,18,26,16.2z"
                    />
                    <path
                      fill="#fff"
                      d="M24,42c-9.9,0-18-8.1-18-18c0-9.9,8.1-18,18-18c9.9,0,18,8.1,18,18C42,33.9,33.9,42,24,42z M24,8 C15.2,8,8,15.2,8,24s7.2,16,16,16s16-7.2,16-16S32.8,8,24,8z"
                    />
                    <path
                      fill="#0277bd"
                      d="M19,21.1c-0.6,0-1.2,0.5-1.2,1.2c0,0.6,0.5,1.2,1.2,1.2c0.6,0,1.2-0.5,1.2-1.2 C20.1,21.7,19.6,21.1,19,21.1z M19.5,22.2c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3 C19.8,22.1,19.6,22.2,19.5,22.2z M26.8,20.6c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1S27.3,20.6,26.8,20.6z M27.2,21.5 c-0.1,0-0.3-0.1-0.3-0.3c0-0.1,0.1-0.3,0.3-0.3c0.1,0,0.3,0.1,0.3,0.3S27.4,21.5,27.2,21.5z M19.3,18.9c0,0-0.9-0.4-1.7,0.1 c-0.9,0.5-0.8,1.1-0.8,1.1s-0.5-1,0.8-1.5C18.7,18.1,19.3,18.9,19.3,18.9 M27.4,18.8c0,0-0.6-0.4-1.1-0.4c-1,0-1.3,0.5-1.3,0.5 s0.2-1.1,1.5-0.9C27.1,18.2,27.4,18.8,27.4,18.8"
                    />
                    <path
                      fill="#8bc34a"
                      d="M23.3,35.7c0,0-4.3-2.3-4.4-1.4c-0.1,0.9,0,4.7,0.5,5s4.1-1.9,4.1-1.9L23.3,35.7z M25,35.6 c0,0,2.9-2.2,3.6-2.1c0.6,0.1,0.8,4.7,0.2,4.9c-0.6,0.2-3.9-1.2-3.9-1.2L25,35.6z"
                    />
                    <path
                      fill="#689f38"
                      d="M22.5,35.7c0,1.5-0.2,2.1,0.4,2.3c0.6,0.1,1.9,0,2.3-0.3c0.4-0.3,0.1-2.2-0.1-2.6 C25,34.8,22.5,35.1,22.5,35.7"
                    />
                    <path
                      fill="#ffca28"
                      d="M22.3,26.8c0.1-0.7,2-2.1,3.3-2.2c1.3-0.1,1.7-0.1,2.8-0.3c1.1-0.3,3.9-1,4.7-1.3 c0.8-0.4,4.1,0.2,1.8,1.5c-1,0.6-3.7,1.6-5.7,2.2c-1.9,0.6-3.1-0.6-3.8,0.4c-0.5,0.8-0.1,1.8,2.2,2c3.1,0.3,6.2-1.4,6.5-0.5 c0.3,0.9-2.7,2-4.6,2.1c-1.8,0-5.6-1.2-6.1-1.6C22.9,28.7,22.2,27.8,22.3,26.8"
                    />
                  </svg>
                )}
              </motion.button>

              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <ul
                      className="characters  h-full flex w-full space-x-2"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {characters.map(({ id, title, titleIcon }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className=" bg-blur h-full  flex w-auto "
                              >
                                {index === tabOpen ? (
          
                                    <div className="search bg-blur bg-white hover:bg-opacity-20 bg-opacity-30 items-center flex rounded-md px-2 py-1 ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                          fill="rgba(255,255,255,1)"
                                        />
                                      </svg>
                                      <input
                                        defaultValue={props.searchValue}
                                        className="bg-transparent text-xs text-white focus:outline-none placeholder-white rounded px-2 py-1  w-full"
                                        placeholder="Find new idea for you best product"
                                      />
                                    </div>
                      
                                ) : (
                                  <div
                                    onClick={() => clickDiv(index)}
                                    className=" bg-white cursor-pointer flex justify-between hover:bg-opacity-20 h-full bg-opacity-30 text-white text-xs font-regular items-center flex rounded-md px-2 py-1 w-full"
                                  >
                                    <div className="flex  items-center space-x-1">
                                      <img
                                        src={titleIcon}
                                        className="h-4"
                                        alt="loading..."
                                      />
                                      <span> {title}</span>
                                    </div>

                                    <motion.button
                                      className="hover:bg-white  hover:bg-opacity-20 rounded-full"
                                      whileTap={{ scale: 1.2 }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                          fill="rgba(255,255,255,1)"
                                        />
                                      </svg>
                                    </motion.button>
                                  </div>
                                )}
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>

        <div className="flex space-x-2  inline-flex items-center  ">
          <motion.button whileTap={{ scale: 1.2 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                fill="rgba(255,255,255)"
              />
            </svg>
          </motion.button>
          <motion.button whileTap={{ scale: 1.2 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"
                fill="rgba(255,255,255)"
              />
            </svg>
          </motion.button>
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

const mapStateProps = (state: any) => {
  return {
    seacrhEnggine: state.defaultSeachType,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleRemovee: () => dispatch({ type: "REMOVE_ORDER" }),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Navbar);
