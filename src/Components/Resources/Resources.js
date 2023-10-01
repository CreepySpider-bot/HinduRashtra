import React from "react";

function Resources() {
  return (
    <section id="resources">
      <div class="container">
        <h2>Resources</h2>
        <p>
          Access our library of resources including books, articles, academic
          papers, and other materials related to Hinduism and its history,
          philosophy, and practices.
        </p>

        <form action="#" method="get">
          <label for="search">Search Resources:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type keywords..."
          />
          <button type="submit">Search</button>
        </form>

        <div class="resource-filters">
          <label for="filter-type">Filter by Type:</label>
          <select id="filter-type" name="filter-type">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="articles">Articles</option>
            <option value="papers">Academic Papers</option>
            <option value="other">Other Materials</option>
          </select>

          <label for="filter-topic">Filter by Topic:</label>
          <select id="filter-topic" name="filter-topic">
            <option value="all">All</option>
            <option value="history">History</option>
            <option value="philosophy">Philosophy</option>
            <option value="practices">Practices</option>
            <option value="culture">Culture</option>
          </select>
        </div>

        <div class="resource-cards">
          <div class="resource-card">
            <div class="resource-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Resource Thumbnail" />
            </div>
            <div class="resource-card-details">
              <h3>Resource Title</h3>
              <p>Author, Publisher, Date</p>
              <p>Resource Description</p>
              <a href="#" class="btn-read-more">
                Read More
              </a>
              <a href="#" class="btn-download">
                Download
              </a>
            </div>
          </div>

          <div class="resource-card">
            <div class="resource-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Resource Thumbnail" />
            </div>
            <div class="resource-card-details">
              <h3>Resource Title</h3>
              <p>Author, Publisher, Date</p>
              <p>Resource Description</p>
              <a href="#" class="btn-read-more">
                Read More
              </a>
              <a href="#" class="btn-download">
                Download
              </a>
            </div>
          </div>

          <div class="resource-card">
            <div class="resource-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Resource Thumbnail" />
            </div>
            <div class="resource-card-details">
              <h3>Resource Title</h3>
              <p>Author, Publisher, Date</p>
              <p>Resource Description</p>
              <a href="#" class="btn-read-more">
                Read More
              </a>
              <a href="#" class="btn-download">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
