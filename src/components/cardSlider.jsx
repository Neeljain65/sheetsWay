import React from "react";

const CardSlider = () => {
  const cards = [
    { id: 1 , title:"My First Dive in Gozo: A World Beneath the Waves" ,description: "As I descended into the crystal-clear waters of Gozo’s Blue Hole, I felt an overwhelming mix of awe and serenity. The underwater world was alive—vibrant coral gardens, curious fish darting around me, and the sense of floating in another realm. It wasn’t just a dive; it was a revelation, a moment where I felt truly connected to nature and myself."},  // No title and description for these
    { id: 2 , title:"A Family Vacation in Malta: Memories We’ll Cherish Forever", description:"From building sandcastles at Mellieħa Bay to exploring the ancient streets of Mdina, Malta was a playground for our family. The kids were enchanted by the colorful Maltese balconies, and we found ourselves laughing and bonding over evening strolls along the Valletta waterfront. Malta wasn’t just a destination—it was a place where our family grew closer.”" },
    { id: 3, title:"A Family Vacation in Malta: Memories We’ll Cherish Forever", description:"From building sandcastles at Mellieħa Bay to exploring the ancient streets of Mdina, Malta was a playground for our family. The kids were enchanted by the colorful Maltese balconies, and we found ourselves laughing and bonding over evening strolls along the Valletta waterfront. Malta wasn’t just a destination—it was a place where our family grew closer.”" },
    { id: 4 , title:"A Family Vacation in Malta: Memories We’ll Cherish Forever", description:"From building sandcastles at Mellieħa Bay to exploring the ancient streets of Mdina, Malta was a playground for our family. The kids were enchanted by the colorful Maltese balconies, and we found ourselves laughing and bonding over evening strolls along the Valletta waterfront. Malta wasn’t just a destination—it was a place where our family grew closer.”" },
    { id: 5 , title:"A Family Vacation in Malta: Memories We’ll Cherish Forever", description:"From building sandcastles at Mellieħa Bay to exploring the ancient streets of Mdina, Malta was a playground for our family. The kids were enchanted by the colorful Maltese balconies, and we found ourselves laughing and bonding over evening strolls along the Valletta waterfront. Malta wasn’t just a destination—it was a place where our family grew closer.”" },
   
  ];

  return (
    <div className="w-full mt-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex space-x-4 px-4">
       
        {cards.map((ln, i) => (
          <div
            key={i}
            className="min-w-[250px] max-w-screen-sm  flex-shrink-0 snap-center bg-white shadow-lg rounded-lg p-4"
          >
            <div className="flex items-center mb-4">
              <img
                src="/Ellipse 150.png"
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Marco</p>
                <p className="text-gray-500 text-sm">Italy</p>
              </div>
            </div>
            <p>{ln.title}</p>
            <div className="flex gap-2 justify-evenly mt-4">
              <img
                src="/Rectangle 295.png"
                alt="Card"
                className="w-1/2 rounded h-64 object-cover mb-4"
              />
              <img
                src="/Rectangle 295.png"
                alt="Card"
                className="w-1/2 rounded h-64 object-cover mb-4"
              />
            </div>
            <p className="text-gray-700">
                {ln.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
