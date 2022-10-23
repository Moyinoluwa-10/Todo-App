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

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDescription: event.target.value,
    });
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    console.log(event.target.value);
  };
  const noteChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredNote: event.target.value,
    });
    console.log(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredCategory: event.target.value,
    });
    console.log(event.target.value);
  };
  // const createdDateHandler = (event) => {
  //   setUserInput({
  //     ...userInput, createdDate:new Date()
  //   });
  //   console.log(event.toDateString);

  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTaskData = {
      ...userInput,
    };
    console.log(newTaskData);
    localStorage.setItem(...userInput, newTaskData.current.value);
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
          <div className="inputs d-flex flex-column gap-3">
            <div>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={titleChangeHandler}
              />
            </div>
            <Form.Control
              type="text"
              placeholder="description"
              className="w-md-100  description"
              onChange={descriptionChangeHandler}
            />
          </div>
        </div>

        <div className="bottomButtons d-flex flex-column gap-2">
          <button
            type="button"
            className="btn btn-primary d-flex justify-content-start align-items-center gap-2 text-white"
          >
            <HiOutlineBell />
            <div className="text">Alarm</div>
          </button>

          <button
            type="button"
            className="btn btn-primary d-flex justify-content-start align-items-center gap-2 text-"
            htmlFor="date"
          >
            <MdOutlineDateRange />
            <Form.Control
              name="date"
              type="date"
              title="Choose your color"
              className="bg-primary border-0 text-white"
              onChange={dateChangeHandler}
            />
          </button>

          <button
            type="button"
            className="btn btn-primary d-flex justify-content-start align-items-center gap-2 text-"
          >
            <MdOutlineEditCalendar />
            <Form.Control
              type="text"
              title="Add your notes"
              placeholder="Add note"
              className="bg-primary border-0 text-white"
              onChange={noteChangeHandler}
            />
          </button>

          <button
            type="button"
            className="btn btn-primary d-flex justify-content-start align-items-center gap-2 "
          >
            <FiTag />
            <Form.Select
              aria-label="Default select example"
              className="bg-primary border-0 text-white"
              onChange={categoryChangeHandler}
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
            className="btn btn-primary d-flex justify-content-start align-items-center gap-2 "
          >
            <RiVoiceprintLine />
            <div className="text">Voice to text</div>
          </button>
        </div>
        {windowSize.innerWidth < 500 ? (
          <Add />
        ) : (
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center gap-2 "
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
