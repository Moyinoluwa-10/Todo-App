import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./CreateNewTask.css";
import { HiOutlineBell } from "react-icons/hi";
import { FiTag } from "react-icons/fi";
import { RiVoiceprintLine } from "react-icons/ri";
import { MdOutlineDateRange, MdOutlineEditCalendar } from "react-icons/md";
import Notification from "../../Components/Notification/Notification";
import Add from "../../Components/Add/Add";

const CreateNewTask = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDescription: "",
    enteredDate: "",
    enteredNote: "",
    enteredCategory: "",
    // createdDate: "",
  });

  // state Storage
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // state Output
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div className="createNewTask d-flex justify-content-around flex-column vh-100">
      {/* <div>
        <h2>Width: {windowSize.innerWidth}</h2>

        <h2>Height: {windowSize.innerHeight}</h2>
      </div> */}
      <Notification className="bg-white" />
      <Form
        className="d-flex justify-content-around flex-column h-100 w-100"
        onSubmit={submitHandler}
      >
        <div className="top">
          <h3 className="fw-semibold">What are you planing?</h3>
          <div className="inputs d-flex flex-column gap-1">
            <div>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="enteredTitle"
                placeholder="Title"
                // onChange={titleChangeHandler}
                onChange={changeHandler}
                className="shadow mb-2 rounded"
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Description"
              name="enteredDescription"
              className="w-md-100  descriptionStyling shadow mb-2 rounded"
              // onChange={descriptionChangeHandler}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="bottomButtons d-flex flex-column gap-2">
          <button
            type="button"
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn text-white d-flex justify-content-start align-items-center gap-2 shadow rounded"
                : "btn primaryText d-flex justify-content-start align-items-center gap-2 shadow rounded"
            }
          >
            <HiOutlineBell />
            <div className="text">Alarm</div>
          </button>

          <button
            type="button"
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2 shadow rounded"
                : "btn d-flex primaryText justify-content-start align-items-center gap-2 shadow rounded"
            }
            htmlFor="datetime"
          >
            <MdOutlineDateRange />
            <Form.Control
              type="datetime-local"
              name="enteredDate"
              title="Choose your color"
              className={
                windowSize.innerWidth < 500
                  ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2"
                  : "btn d-flex justify-content-start align-items-center gap-2"
              }
              // onChange={dateChangeHandler}
              onChange={changeHandler}
            />
          </button>

          <button
            type="button"
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2 shadow rounded"
                : "btn d-flex primaryText justify-content-start align-items-center gap-2 shadow rounded"
            }
          >
            <MdOutlineEditCalendar />
            <Form.Control
              type="text"
              title="Add your notes"
              name="enteredNote"
              placeholder="Add note"
              className={
                windowSize.innerWidth < 500
                  ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2"
                  : "btn d-flex primaryText justify-content-start align-items-center gap-2"
              }
              // onChange={noteChangeHandler}
              onChange={changeHandler}
            />
          </button>

          <button
            type="button"
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2 shadow rounded"
                : "btn d-flex primaryText justify-content-start align-items-center gap-2 shadow rounded"
            }
          >
            <FiTag />
            <Form.Select
              aria-label="Default select example"
              className={
                windowSize.innerWidth < 500
                  ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2"
                  : "btn d-flex primaryText justify-content-start align-items-center gap-2"
              }
              name="enteredCategory"
              // onChange={categoryChangeHandler}
              onChange={changeHandler}
            >
              <option value="">Category</option>
              <option value="Work">Work</option>
              <option value="Music">Music</option>
              <option value="Design">Design</option>
              <option value="Travel">Travel</option>
              <option value="Study">Study</option>
              <option value="Teamwork">Teamwork</option>
              <option value="Music">Music</option>
            </Form.Select>
          </button>

          <button
            type="button"
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn btn-primary primaryBg d-flex justify-content-start text-white align-items-center gap-2 shadow rounded"
                : "btn d-flex primaryText justify-content-start align-items-center gap-2 shadow rounded"
            }
          >
            <RiVoiceprintLine />
            <div className="text">Voice to text</div>
          </button>
        </div>

        {windowSize.innerWidth < 500 ? (
          
            <Add />
        ) : (
          <button
            className={
              windowSize.innerWidth < 500
                ? "primaryBg btn btn-primary primaryBg d-flex justify-content-center text-white align-items-center gap-2 shadow rounded"
                : "btn d-flex primaryText justify-content-center align-items-center gap-2 shadow rounded"
            }
            type="submit"
            // onClick={createdDateHandler}
          >
            Add
          </button>
        )}
      </Form>
    </div>
  );
};

export default CreateNewTask;
