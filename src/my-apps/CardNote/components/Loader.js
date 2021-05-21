import React from "react";
import "./css/Loader.css";
import "./sub-components/css/Folder.css";

import Border from "./sub-components/Border";

function Loader() {
  return (
    <>
      <main className="folderCardsBody">
        <section className="folderContainer col">
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>

          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
        </section>
        <Border />
        <section className="cardcontainer col">
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>

          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
          <div className="loader">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Loader;
