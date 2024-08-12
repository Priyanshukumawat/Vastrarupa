import React from 'react'

function Footer() {
    return (
        <>
            <footer class="flex flex-col bg-[#FDF0D1] space-y-10">

                <nav class="flex justify-center flex-wrap gap-6 text-[#85586F] font-medium mt-10 ">
                    <a class="hover:text-[#643843]" href="#">Home</a>
                    <a class="hover:text-[#643843]" href="#">Collections</a>
                    <a class="hover:text-[#643843]" href="#">Gallery</a>
                    <a class="hover:text-[#643843]" href="#">About Us</a>
                    <a class="hover:text-[#643843]" href="#">Contact</a>
                </nav>

                <div class="flex justify-center space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                    </a>
                </div>
                <p class="text-center text-gray-700 font-medium">&copy; 2024 Vastrarupa Ltd. All rights reservered.</p>
            </footer>
        </>
    )
}

export default Footer