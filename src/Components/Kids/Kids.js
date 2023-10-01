import React from "react";

function Kids() {
  return (
    <section id="kids">
      <div class="container">
        <h2>Kids: Educational resources and activities</h2>
        <p>
          Learn about Hinduism in a fun and engaging way with these resources
          and activities for children:
        </p>

        <div class="activity-cards">
          <div class="activity-card">
            <div class="activity-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Activity Thumbnail" />
            </div>
            <div class="activity-card-details">
              <h3>Activity Title</h3>
              <p>Activity Description</p>
              <a href="#" class="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div class="activity-card">
            <div class="activity-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Activity Thumbnail" />
            </div>
            <div class="activity-card-details">
              <h3>Activity Title</h3>
              <p>Activity Description</p>
              <a href="#" class="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div class="activity-card">
            <div class="activity-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Activity Thumbnail" />
            </div>
            <div class="activity-card-details">
              <h3>Activity Title</h3>
              <p>Activity Description</p>
              <a href="#" class="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="resource-cards">
          <div class="resource-card">
            <div class="resource-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Resource Thumbnail" />
            </div>
            <div class="resource-card-details">
              <h3>Resource Title</h3>
              <p>Resource Description</p>
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
              <p>Resource Description</p>
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
              <p>Resource Description</p>
              <a href="#" class="btn-download">
                Download
              </a>
            </div>
          </div>
        </div>
        <div class="video-gallery">
          <h3>Video Gallery</h3>
          <div class="video-thumbnail">
            <a href="#">
              <img src="path/to/thumbnail.jpg" alt="Video Thumbnail" />
            </a>
            <h4>Video Title</h4>
          </div>
          <div class="video-thumbnail">
            <a href="#">
              <img src="path/to/thumbnail.jpg" alt="Video Thumbnail" />
            </a>
            <h4>Video Title</h4>
          </div>
          <div class="video-thumbnail">
            <a href="#">
              <img src="path/to/thumbnail.jpg" alt="Video Thumbnail" />
            </a>
            <h4>Video Title</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kids;
