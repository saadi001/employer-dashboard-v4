"use client";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CustomQuestion = () => {
  const [inputs, setInputs] = useState([""]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
  };

  const addInputs = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, ""]);
    } else {
      setErrorMessage("Can not add more than 5.");
    }
  };

  const removeInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {inputs.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 overflow-hidden"
          >
            <input
              type="text"
              id="title"
              placeholder="Ex: Do you have laptop?"
              className="w-full h-auto border rounded-lg rounded-tr-none rounded-br-none flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
            />
            {i === 0 ? (
              <button
                onClick={addInputs}
                type="button"
                className=" h-12 px-3  border hover:border-gray-500 bg-primaryBackground flex items-center justify-center rounded-lg rounded-tl-none rounded-bl-none"
              >
                <Plus size={16} className="text-headerColor" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => removeInput(i)}
                className=" h-12 px-3  border hover:border-gray-500 bg-primaryBackground flex items-center justify-center rounded-lg rounded-tl-none rounded-bl-none"
              >
                <Minus size={16} className="text-headerColor" />
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CustomQuestion;
