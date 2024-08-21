import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  const faqItems = [
    {
      question: "WHAT IS VIRTUAL FOOTBALL MANAGER",
      answer:
        "Virtual Football Manager (VFM) is an immersive mobile game that allows players to experience the thrill of managing a virtual football team, making strategic decisions, competing in leagues, and engaging in realistic football simulations.",
    },
    {
      question: "IS VIRTUAL FOOTBALL MANAGER FREE TO PLAY",
      answer:
        "Virtual Football Manager is free to download and play, with optional in-app purchases available for players who wish to enhance their gaming experience with premium items and features.",
    },
    {
      question: "HOW CAN I DOWNLOAD VIRTUAL FOOTBALL MANAGER",
      answer:
        "You can download Virtual Football Manager from the app store on your iOS or Android device. Simply search for 'Virtual Football Manager' download the game, and start managing your dream football team",
    },
    {
      question:
        "What sets Virtual Football Manager apart from other football management games?",
      answer:
        "Virtual Football Manager offers realistic gameplay, detailed team management options, engaging multiplayer competitions, and the integration of the VFM Token as an in-game currency, providing a dynamic and immersive gaming experience,",
    },
    {
      question: "Can I compete with other players in Virtual Football Manager?",
      answer:
        "Yes, players can compete against friends and other gamers worldwide in leagues, tournaments, and friendly matches, adding a competitive element to the gameplay experience",
    },
    {
      question: "Is Virtual Football Manager free to play?",
      answer:
        "Virtual Football Manager is free to download and play, with optional in-app purchases available for players who wish to enhance their gaming experience with premium items and features.",
    },
    {
      question: "What is the VFM Token?",
      answer:
        "The VFM Token is an (e.g ERC-20 or BSC 20) compatible cryptocurrency used as an in-game currency within Virtual Football Manager. Players can earn VFM Tokens through gameplay, achievements, events, and also trade or exchange them with other cryptocurrencies.",
    },
    {
      question: "How can I acquire VFM Tokens?",
      answer:
        "VFM Tokens can be earned by participating in the game, achieving milestones, winning matches, and through in-game events. Additionally, players can exchange or trade VFM Tokens with other cryptocurrencies through supported platforms.",
    },
    {
      question:
        "Can I convert VFM Tokens to other cryptocurrencies or fiat currency?",
      answer:
        "Yes, VFM Tokens can be traded or exchanged for other cryptocurrencies on supported cryptocurrency exchanges. Players have the flexibility to convert VFM Tokens to different digital assets or fiat currency based on market availability",
    },
    {
      question:
        "What are the benefits of using VFM Tokens in Virtual Football Manager?",
      answer:
        "VFM Tokens allow players to access exclusive in-game content, purchase items, enhance team capabilities, participate in special events, and trade with other players. By utilizing VFM Tokens, players can customize their gameplay experience, unlock premium features, and accelerate their progress within Virtual Football Manager.",
    },
    {
      question:
        "How can I trade or exchange VFM Tokens with other cryptocurrencies?",
      answer:
        "Players can trade or exchange VFM Tokens with other cryptocurrencies by using supported cryptocurrency exchanges or platforms that list VFM Tokens. Simply create an account on a compatible exchange, deposit your VFM Tokens, and initiate the trading process",
    },
    {
      question:
        "Are VFM Tokens secure for trading and exchanging with other cryptocurrencies?",
      answer:
        "VFM Tokens are built on secure blockchain technology, ensuring transparency, immutability, and security of transactions. When trading or exchanging VFM Tokens with other cryptocurrencies, players can trust in the robust security features of the token.",
    },
    {
      question:
        "Can I earn VFM Tokens by trading them with other players or investors?",
      answer:
        "Yes, players have the opportunity to earn VFM Tokens by trading them with other players or investors within the Virtual Football Manager community. Through strategic trading and exchange activities, players can increase their token holdings and expand their in-game resources.",
    },
  ];

  return (
    <section id="faqs" className="mt-[119px] text-white text-center faq mb-[80px]">
      <div className="wrapper m-auto">
        <div className="left">
          <h1 className="font-bold text-[85px] leading-[125px] clashdisplay">
            FAQ<span className="text-[65px]">S</span>
          </h1>
        </div>
        <div className="right fag pr-3 flex-1 flex items-end flex-col gap-[40px] text-left">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="w-[528px] dropper relative flex flex-col gap-[20px]"
            >
              {index > 0 && <div className="divider"></div>}
              <div
                onClick={() => handleToggle(index)}
                className="label flex items-center justify-between  cursor-pointer"
              >
                <p className=" uppercase max-sm:text-[9px]">{item.question}</p>
                <div>
                  <img
                    className={`w-[15px] h-[12px] transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    src="./dropdown_vector.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`dropdown-content pr-[25px] text-[#BDBDBD] text-[14px] transition-max-height duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] overflow-auto"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
