import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
        <footer>
    <div class="footer-container">
        <div class="footer-section about">
            <h3>About Us</h3>
            <p>We provide the best services to our customers and ensure a great user experience with our platform.</p>
        </div>
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                {/* <li><a href="#">Services</a></li> */}
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Location: City, Country</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 YourWebsite. All rights reserved.</p>
    </div>
</footer>

    </>
  )
}

export default Footer