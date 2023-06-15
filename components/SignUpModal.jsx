import React, { useState } from "react";
import { Modal } from "antd";

const SignUpModal = ({
  isSignUpModalOpen,
  setIsSignUpModalOpen,
  setIsLoginModalOpen,
}) => {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    pass: "",
  });

  return (
    <Modal
      footer={null}
      onCancel={() => {
        setIsSignUpModalOpen(false);
      }}
      open={isSignUpModalOpen}
    >
      <div className="">
        <h1 className="font-semibold text-2xl">Inscrivez-vous !</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
          }}
          className=" flex mt-8 gap-y-4 w-full flex-col justify-center items-center"
        >
          <div className="flex w-full flex-col">
            <label className="ml-4" htmlFor="nom">
              Nom
            </label>
            <input
              onChange={(e) =>
                setData({
                  nom: e.target.value,
                  prenom: data.prenom,
                  email: data.email,
                  pass: data.pass,
                })
              }
              value={data.nom}
              type="text"
              className="border-gray-500 rounded-2xl  border py-2 px-4"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="ml-4" htmlFor="prenom">
              Prénom
            </label>
            <input
              onChange={(e) =>
                setData({
                  nom: data.nom,
                  prenom: e.target.value,
                  email: data.email,
                  pass: data.pass,
                })
              }
              value={data.prenom}
              type="text"
              className="border-gray-500 rounded-2xl  border py-2 px-4"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="ml-4" htmlFor="email">
              E-mail ou téléphone
            </label>
            <input
              onChange={(e) =>
                setData({
                  nom: data.nom,
                  prenom: data.prenom,
                  email: e.target.value,
                  pass: data.pass,
                })
              }
              value={data.email}
              type="text"
              className="border-gray-500 rounded-2xl  border py-2 px-4"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="ml-4" htmlFor="password">
              Mot de passe
            </label>
            <input
              onChange={(e) =>
                setData({
                  nom: data.nom,
                  prenom: data.prenom,
                  email: data.email,
                  pass: e.target.value,
                })
              }
              value={data.pass}
              type="password"
              className="border-gray-500 rounded-2xl  border py-2 px-4"
            />
          </div>
          <button
            type="submit"
            className=" font-semibold mt-4 rounded-md bg-[#FA7436]  py-1.5 px-6  w-fit text-white transition-all text-center text-sm font-inter flex items-center justify-center"
          >
            S'inscrire
          </button>
          <p className="text-[#444444]">
            Vous avez déja un compte ?
            <span
              onClick={() => {
                setIsSignUpModalOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="text-[#FA7436] ml-2 cursor-pointer hover:underline hover:font-semibold"
            >
              connectez-vous
            </span>
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default SignUpModal;
