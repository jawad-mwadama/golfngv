import React, { Children, useState } from "react";

const faqs = [
  {
    title: "How do i book a tee time?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Do you host private events or tournaments?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Can i get golf equipment?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do i need to be a member to play?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "What is the dress code?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "What is your rain-check policy?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Faq() {
  return (
    <div className="p-3 sm:p-9">
      <div className="mx-auto flex flex-col items-center justify-center p-9 text-center sm:p-6">
        <h2 className="pt-3 text-3xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="p-3 text-center text-sm text-zinc-300">
          If there's a question you want to ask, We will answer
        </p>
      </div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [isOpen, setIsopen] = useState(null);
  const handleToggle = (index) => {
    setIsopen(isOpen === index ? null : index);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3">
      {faqs.map((el, index) => (
        <AccordionItem
          title={el.title}
          key={el.title}
          isOpen={isOpen === index}
          setIsopen={setIsopen}
          onToggle={() => handleToggle(index)}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div className="mx-auto w-full p-1.5 text-start sm:w-3xl sm:p-9">
      <div
        className={`rounded-2xl bg-zinc-100 p-4 shadow-xl sm:p-9 ${
          isOpen ? "border-2 border-lime-300" : ""
        }`}
      >
        {/* Header (clickable) */}
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={onToggle}
        >
          <p className="font-semibold">{title}</p>
          <p className="rounded-xl bg-lime-300 px-3 py-1.5 text-white">
            {isOpen ? "-" : "+"}
          </p>
        </div>

        {/* Content below the header */}
        {isOpen && (
          <div className="mt-4 text-sm break-words text-zinc-700">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
export default Faq;
