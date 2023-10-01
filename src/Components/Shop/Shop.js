import React from "react";

function Shop() {
  return (
    <section id="shop">
      <div class="container">
        <h2>Shop</h2>
        <p>
          Explore our collection of Hindu-inspired products including books,
          art, jewelry, and more. Support local artisans and businesses while
          celebrating the rich cultural heritage of Hinduism.
        </p>

        <form action="#" method="get">
          <label for="search">Search Products:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type keywords..."
          />
          <button type="submit">Search</button>
        </form>

        <div class="product-filters">
          <label for="filter-type">Filter by Type:</label>
          <select id="filter-type" name="filter-type">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="art">Art</option>
            <option value="jewelry">Jewelry</option>
            <option value="other">Other Products</option>
          </select>

          <label for="filter-price">Filter by Price:</label>
          <select id="filter-price" name="filter-price">
            <option value="all">All</option>
            <option value="under-25">Under $25</option>
            <option value="25-50">$25-$50</option>
            <option value="50-100">$50-$100</option>
            <option value="over-100">Over $100</option>
          </select>
        </div>

        <div class="product-cards">
          <div class="product-card">
            <div class="product-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Product Thumbnail" />
            </div>
            <div class="product-card-details">
              <h3>Product Title</h3>
              <p>Price: $19.99</p>
              <p>Product Description</p>
              <a href="#" class="btn-add-to-cart">
                Add to Cart
              </a>
              <a href="#" class="btn-read-more">
                Read More
              </a>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-thumbnail">
              <img src="path/to/thumbnail.jpg" alt="Product Thumbnail" />
            </div>
            <div class="product-card-details">
              <h3>Product Title</h3>
              <p>Price: $39.99</p>
              <p>Product Description</p>
              <a href="#" class="btn-add-to-cart">
                Add to Cart
              </a>
              <a href="#" class="btn-read-more">
                Read More
              </a>{" "}
              \
              <div class="product-card">
                <div class="product-card-thumbnail">
                  <img src="path/to/thumbnail.jpg" alt="Product Thumbnail" />
                </div>
                <div class="product-card-details">
                  <h3>Product Title</h3>
                  <p>Price: $59.99</p>
                  <p>Product Description</p>
                  <a href="#" class="btn-add-to-cart">
                    Add to Cart
                  </a>
                  <a href="#" class="btn-read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <nav class="pagination">
              <ul>
                <li>
                  <a href="#">Prev</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
