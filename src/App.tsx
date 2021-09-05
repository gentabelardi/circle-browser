import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/molecules/Navbar";
import { connect } from "react-redux";
import { shell } from "electron";

function App(props: any) {
  function goBackBtn() {
    const canvas = window.document.querySelector("Webview");
    return GoBack(canvas);
  }
  const [defaultURL, setDefaultURL] = useState("");
  const { seacrhEnggine } = props;
  function getUrlText() {
    const canvas = window.document.querySelector("Webview");
    return "GetUrl(canvas)";
  }

  function goForwardBtn() {
    const canvas = window.document.querySelector("Webview");
    return GoForward(canvas);
  }

  function getDefaultURL() {
    const canvas = window.document.querySelector("Webview");

    return "search";
  }

  function btnReload() {
    const canvas = window.document.querySelector("Webview");
    return FReload(canvas);
  }

  function btnCanGoForward() {
    const canvas = window.document.querySelector("Webview");
    return CanGoForward(canvas);
  }

  return (
    <div className="rounded-xl  w-full bg-white h-screen flex flex-col ">
      <Navbar
        canGoForward={btnCanGoForward}
        btReload={btnReload}
        searchValue={String(getDefaultURL())}
        btForward={goForwardBtn}
        btnBack={goBackBtn}
        type="home"
        bgColor="dark-primary"
      />

      <main className=" relative  flex justify-center   h-full w-full bg-green-200 flex-auto mx-auto overflow-y-auto">
        <img src="background/bg-3.jpg" className="w-full object-cover h-full" />
        <div className=" absolute top-0 bg-dark-primary  h-full w-full ">
          <webview
            id="Webview"
            className="w-full bg-dark-primary h-full"
            src={
              seacrhEnggine === "GOOGLE"
                ? "https://www.google.com/"
                : "https://duckduckgo.com/"
            }
          />
        </div>
      </main>
    </div>
  );
}

const GoBack = (webview: any) => {
  return webview.goBack();
};

const GoForward = (webview: any) => {
  return webview.goForward();
};

const GetUrl = (webview: any) => {
  const url = webview.getURL();
  return url;
};

const FReload = (webview: any) => {
  return webview.reload();
};

const CanGoForward = (webview: any) => {
  return webview.canGoForward();
};


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

export default connect(mapStateProps, mapDispatchToProps)(App);
