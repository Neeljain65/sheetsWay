import React from 'react'

function Unique() {
    const exp=[
        {id:1, title:"A Foodie’s Guide to Malta", description:"Embark on a culinary journey through Malta’s vibrant food scene, blending Mediterranean and local flavors. This guide explores:Traditional Maltese dishes like Ftira, Pastizzi, and Rabbit Stew."},
        {id:2, title:"Guide to Explore Malta’s Hidden Gems", description:"Step off the beaten path and uncover Malta’s secret treasures. Highlights include:Dingli Cliffs: Stunning coastal views perfect for sunset lovers."},
        {id:3, title:"A History Lover’s Guide to Malta", description:"Discover Malta’s rich history through its timeless landmarks and cultural sites. Highlights includeĦal Saflieni Hypogeum: A UNESCO World Heritage Site and prehistoric underground temple."},
        {id:4, title:"Unique Experience Title 1", description:"Malta is a diver’s paradise, offering crystal-clear waters and underwater marvels.This guide coversThe Blue Hole (Gozo): A natural rock formation with incredible marine life."},
    ]
  return (
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sub-Cards */}
          {exp.map((len, i) => (
            <div key={i} className="border p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
              <img
                src="/Rectangle 295.png"
                alt="Card"
                className="w-1/3 rounded h-full object-cover mb-4"
              />
            <div className=" ml-3">
              <h3 className="text-lg font-bold mb-2">{len.title}</h3>
            <p className="text-gray-700 mb-4 mt-10">{len.description}</p>
              <a href="#" className="hover:bg-red-500 hover:text-white  p-2 rounded-md ">
                Read More
              </a>
            </div>

              </div>

            </div>
          ))}
        </div>
    </div>
  )
}

export default Unique