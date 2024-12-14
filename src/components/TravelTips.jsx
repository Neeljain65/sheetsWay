import React from 'react'

function TravelTips() {
    const tips=[
        {id : 1, title: "Travel Tips for Malta", description: "Sample description for this blog post. It includes essential details about the destination."},
        {id : 2, title: "Top 10 Beaches to Visit in Malta", description: "Malta is renowned for its picturesque coastline, offering something for everyone, from sandy stretches to rocky coves. This guide features the most stunning beaches.."},
        {id : 3, title: "Best Time to Visit Malta", description: "Malta’s Mediterranean climate makes it a year-round destination, but the best time to visit depends on your preferences. Spring (March-May): Perfect for exploring Malta’s lush countryside and historic sites.."},
        {id : 4, title: "Travel Tips for Malta", description: "Sample description for this blog post. It includes essential details about the destination."},
    ]
    return (
        <>
    
            {/* Cards Section */}
            <h2 className="text-center text-3xl font-bold mb-8">Travel Tips for Malta</h2>
            
                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Card 1 */}
                      {tips.map((ln, i) => (
                        <div key={i} className=" flex flex-col p-10  items-center justify-center shadow-lg rounded-lg overflow-hidden">
                          <img
                            src="image.png"
                            alt="Card"
                            className=" object-contain"
                          />
                          <div className="p-6">
                            <div className="flex gap-2 ml-5 mb-4 ">
                              <p className="border-solid border-2 border-gray-500 p-1 rounded-md text-sm px-3">Travel</p>
                              <p className="border-solid border-2 border-gray-500 p-1 rounded-md text-sm px-3">Travel Blog</p>
                              <p className="border-solid border-2 border-gray-500 p-1 rounded-md text-sm px-3">Malta Blog</p>
                           
                            </div>
                            <h3 className="text-lg font-bold mb-2 ml-3">{ln.title}</h3>
                            <p className="text-gray-700 mb-4">
                            {ln.description}
                            </p>
                            <a href="#" className="text-red-500 hover:underline">
                              Read More
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    </>

  )
}

export default TravelTips