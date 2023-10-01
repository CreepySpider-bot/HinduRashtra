import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <a href='/' style={{"textDecoration":"none","color":"#333"}}><h1>Welcome to Hinduism Hub!</h1></a>
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="/events" class="nav-link">Events</a>
                </li>
                <li class="nav-item">
                    <a href="/tours" class="nav-link">Tours</a>
                </li>
                <li class="nav-item">
                    <a href="/news" class="nav-link">News</a>
                </li>
                <li class="nav-item">
                    <a href="/blogs" class="nav-link">Blogs</a>
                </li>
                <li class="nav-item">
                    <a href="/podcast" class="nav-link">Podcasts</a>
                </li>
                <li class="nav-item">
                    <a href="/videos" class="nav-link">Videos</a>
                </li>
                <li class="nav-item">
                    <a href="/resource" class="nav-link">Resources</a>
                </li>
                <li class="nav-item">
                    <a href="/kids" class="nav-link">Kids</a>
                </li>
                <li class="nav-item">
                    <a href="/shop" class="nav-link">Shop</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Donations</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Forums</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Q&amp;A</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Glossary</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Prayer</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Yoga</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Recipes</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Charity</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Travel Guide</a>
                </li>
                <li class="nav-item">
                    <a href="/last" class="nav-link">Social Media</a>
                </li>
                <li class="nav-item">
                    <a href="/feedback" class="nav-link">Feedback</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
