import { useState } from 'react';

const Faq = () => {
  // Accordion state: tracks which item is open
  const [openIndex, setOpenIndex] = useState(0);

  // Toggle function to open/close accordion items
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  // FAQ data
  const faqItems = [
    {
      question: 'How can I contact Inkyy Team?',
      answer:
        'You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours.',
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer website design, development, and maintenance services.',
    },
    {
      question: 'Do you provide website maintenance services?',
      answer: 'Yes, we offer website maintenance services for our clients.',
    },
    {
      question: 'How long does it take to design and develop a website?',
      answer: 'The time it takes depends on the complexity and requirements of the project.',
    },
    {
      question: 'Do you require a deposit for projects?',
      answer: 'Yes, we require a deposit to start working on a project.',
    },
  ];

  return (
    <div className="max-w-4xl flex mx-auto py-16 px-4 justify-center gap-20 ">
      {/* Title */}
   <div className="flex items-center"> 
   <h2 className="text-4xl text-start  font-bold mb-8">Frequently <br /> Asked  <br />Questions</h2>

   </div>
      {/* FAQ List */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className=" w-[696px] bg-white rounded-lg">
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer px-6 py-4"
              onClick={() => toggleAccordion(index)}
            >
              <h3 
              style={{fontSize:"18px"}}
              
              className="text-lg font-bold   ">{item.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {/* Answer (only visible if this item is open) */}
            {openIndex === index && (
              <div className="px-6 pb-4 text-[#8987A1] text-start">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
