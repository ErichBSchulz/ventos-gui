import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import values from "postcss-modules-values";
import qs from "qs";

export default function TV() {
  // modal
  const [modalOpen, setModalOpen] = useState(false);

  // Pimax
  const initialFormState = {
    val: 500,
  };

  const [newFormValues, setNewFormValues] = useState(initialFormState);

  const updateOnChange = (e) => {
    setNewFormValues({
      ...newFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const UpdateOnSubmit = (e) => {
    e.preventDefault();
    var url = process.env.REACT_APP_DSERVER_URL + "/control/";
    var data = {
      com: "C",
      par: "V",
      int: "T",
      mod: 0,
      val: parseInt(newFormValues.val),
    };
    const options = {
      url: url,
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
    };
    axios(options).then(function (response) {
      console.log(response);
      console.log(newFormValues);
    });
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-cyan-300 border-2 border-solid border-red-300-contrast w-100% p-10 m-5 rounded-lg text-black"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        TV<br></br>
        {newFormValues.val}
      </button>
      <Modal isOpen={modalOpen}>
        <div className="flex justify-center h-full p-40 bg-blue-100">
          <span className="flex-grow">
            <form id="TVform" onSubmit={UpdateOnSubmit}>
              <input
                className="mr-20 w-50 border-1"
                name="val"
                value={newFormValues.val}
                onChange={updateOnChange}
                placeholder="New TV"
              />
            </form>
          </span>
          <span className="flex-shrink-0 ml-4">
            <button
              type="submit"
              form="TVform"
              className="ml-12 font-medium text-purple-600 bg-white rounded-md hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </span>
        </div>

        <button
          onClick={(e) => {
            setModalOpen(false);
          }}
        >
          Close modal
        </button>
      </Modal>
    </div>
  );
}
