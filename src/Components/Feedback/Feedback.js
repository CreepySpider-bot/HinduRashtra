import React from 'react'

function Feedback() {
  return (
      <section id="feedback">
            <h2>Feedback</h2>
            <p>We value your feedback and suggestions. Please share your thoughts on our website and how we can improve our services to better serve our community.</p>

            <form action="submit-feedback.php" method="POST">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div>
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>

                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <div>
                    <label for="feedback-type">Feedback Type:</label>
                    <select id="feedback-type" name="feedback-type">
                        <option value="website">Website Feedback</option>
                        <option value="content">Content Feedback</option>
                        <option value="technical">Technical Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label for="feedback-rating">Rating:</label>
                    <input type="radio" id="rating-1" name="feedback-rating" value="1"/>
                    <label for="rating-1">1</label>
                    <input type="radio" id="rating-2" name="feedback-rating" value="2"/>
                    <label for="rating-2">2</label>
                    <input type="radio" id="rating-3" name="feedback-rating" value="3"/>
                    <label for="rating-3">3</label>
                    <input type="radio" id="rating-4" name="feedback-rating" value="4"/>
                    <label for="rating-4">4</label>
                    <input type="radio" id="rating-5" name="feedback-rating" value="5"/>
                    <label for="rating-5">5</label>
                </div>

                <div>
                    <button type="submit">Submit Feedback</button>
                </div>
            </form>

            </section>

  )
}

export default Feedback;
