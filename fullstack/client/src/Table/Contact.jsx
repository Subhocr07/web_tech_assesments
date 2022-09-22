import React from "react";
import Sidebar from "./Sidebar";
import "./Contact.css";

const Contact = () => {
  const handlePublishClick=()=>{
    
  };
  return (
    <div className="contact-container">
      <div className="contact-header">
        <header className="contact-header-text">10x academy</header>
      </div>
      <div className="container-5">
        <div className="sidebar-container-5">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <div className="contact">
            <div className="contact-content">
              <div className="question">
                <h5>what is lorem lipsum?</h5>
              </div>
              <div className="answer">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className="button_class">
                <div className="edit_save_btn">
                 <button>Edit</button>
                 <button>Save</button>
                </div>
                <div className="publish_btn"><button onclick={handlePublishClick}>Publish</button></div>
              </div>
            </div>
            <div ClassName="button_class">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
