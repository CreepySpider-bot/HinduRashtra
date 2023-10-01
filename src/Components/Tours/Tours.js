import React from 'react'
import "./Tours.css"
function Tours() {
  return (
      <section id="tours">
            <h2>Tours</h2>
            <p>Explore famous Hindu temples and landmarks with our virtual tours or plan a trip to see them in person. Get information on how to book tours and travel to these locations.</p>

            <div class="tour">
                <img src="/Users/madhavgarg/Downloads/Haridwar_Ganga_6.jpeg" alt="Temple 1"/>
                <h3>Temple 1</h3>
                <p>Located in [Haridwar, India], Temple 1 is a must-see destination for Hindu pilgrims and tourists. With its intricate carvings, stunning architecture, and beautiful surroundings, this temple offers a glimpse into the rich history and culture
                    of Hinduism. Take a virtual tour or plan a trip to see it in person.</p>
                <a target="_blank" href="https://www.thrillophilia.com/tours/haridwar-rishikesh-tour-package" class="button">Book Tour</a>
            </div>

            <div class="tour">
                <img src="temple2.jpg" alt="Temple 2"/>
                <h3>Temple 2</h3>
                <p>Located in [City, Country], Temple 2 is another popular destination for Hindu travelers. With its towering spires, colorful murals, and serene atmosphere, this temple is a testament to the devotion and creativity of its builders. Take
                    a virtual tour or plan a trip to see it in person.</p>
                <a target="_blank" href="book_tour.php" class="button">Book Tour</a>
            </div>

            <div class="tour">
                <img src="temple3.jpg" alt="Temple 3"/>
                <h3>Temple 3</h3>
                <p>Located in [City, Country], Temple 3 is a hidden gem that offers a peaceful retreat from the hustle and bustle of city life. With its lush gardens, ornate statues, and quiet meditation halls, this temple is a perfect place to unwind and
                    connect with your inner self. Take a virtual tour or plan a trip to see it in person.</p>
                <a target="_blank" href="book_tour.php" class="button">Book Tour</a>
            </div>

            <p>Whether you're a seasoned traveler or a curious novice, our tours offer a unique and enriching experience that will leave you with memories to last a lifetime. Contact us today to learn more.</p>
        </section>
  )
}

export default Tours
