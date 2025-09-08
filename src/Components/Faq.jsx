import React from "react";

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
        <h2 className="pt-3 text-4xl font-semibold">
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

function Accordion() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 bg-stone-100">
      {faqs.map((el) => (
        <AccordionItem title={el.title} key={el.title}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="text-start">
        <p className="">{title}</p>
      </div>
      <p></p>
    </div>
  );
}
export default Faq;
