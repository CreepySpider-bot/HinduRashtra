import React, {useState} from 'react'
import "./Blogs.css"

function Blogs() {
  const [louversIndex, setLouversIndex] = useState(0);

  const blogsData = [
    {
      imageSrc: 'https://i.pinimg.com/1200x/82/27/b4/8227b4495c290d490e86c761cfdc4cfe.jpg',
      title: 'Blog Title 1',
      description: 'Blog description goes here.',
    },
    {
      imageSrc: 'https://i.pinimg.com/1200x/82/27/b4/8227b4495c290d490e86c761cfdc4cfe.jpg',
      title: 'Blog Title 2',
      description: 'Blog description goes here.',
    },
    {
      imageSrc: 'https://i.pinimg.com/1200x/82/27/b4/8227b4495c290d490e86c761cfdc4cfe.jpg',
      title: 'Blog Title 3',
      description: 'Blog description goes here.',
    },
  ];

  const showLouversItem = () => {
    return blogsData.map((blog, index) => (
      <div
        key={index}
        className={`louvers-slide ${
          index === louversIndex ? 'active' : ''
        }`}
      >
        <img src={blog.imageSrc} alt={`Blog Image ${index + 1}`} />
        <div className="louvers-slide-caption">
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    ));
  };

  const louversNextSlide = () => {
    setLouversIndex((prevIndex) => (prevIndex + 1) % blogsData.length);
  };

  const louversPrevSlide = () => {
    setLouversIndex((prevIndex) =>
      prevIndex === 0 ? blogsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="blogs">
      <h2>Blogs</h2>
      <div className="louvers-carousel">
        <div className="louvers-container">{showLouversItem()}</div>
        <div className="louvers-nav">
          <button
            className="louvers-nav-prev"
            onClick={louversPrevSlide}
          >
            &lt;
          </button>
          <button
            className="louvers-nav-next"
            onClick={louversNextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;

