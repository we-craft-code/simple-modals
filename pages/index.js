import { useState } from "react";
import Modal from "../components/Modal";
import TailwindModal from "../components/TailwindModal";

export default function Home() {
  const [showModal, toggleModal] = useState(false);
  const [showTailwindModal, toggleTailwindModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {showModal ? <Modal toggleModal={toggleModal} /> : null}
      <div className="flex justify-end gap-8 items-center p-8 text-white h-24 bg-blue-800">
        <TailwindModal show={showTailwindModal} toggle={toggleTailwindModal}>
          Click Me
        </TailwindModal>
        <button
          className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-md shadow-md text-xl font-bold"
          onClick={() => toggleTailwindModal(true)}
        >
          TAILWIND MODAL
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-md shadow-md text-xl font-bold"
          onClick={() => toggleModal(true)}
        >
          CUSTOM MADE MODAL
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center h-full justify-center">
        <div className="text-3xl">Simple Modals </div>
        <div>A Custom and a Imported One</div>
      </div>
      <div className="flex flex-col justify-center items-center text-xs text-white bg-blue-800 h-24">
        <div>2021</div>
        <div>#iamfreeCodeCamp</div>
      </div>
    </div>
  );
}
