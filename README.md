# Myntra Hackathon Project: Integrated Social Media and Personalized Boards

## Overview

This project aims to enhance the shopping experience on Myntra by integrating Pinterest, Snapchat, and LinkedIn B2B connections. It includes the creation of personalized Myntra Boards, similar to Pinterest, allowing users to store their favorite products in separate boards.

## Features

### Pinterest Integration
- *Myntra Boards*: Users can create and manage personalized boards to organize their favorite products.
- *Product Pinning*: Ability to pin products directly from Myntra to their boards.
- *PinMyStyle*: Ability to analyse the pinterest board products and generate trend centric recommendations and shoppable posts.

### Snapchat Integration
- *Discover Feature*: Integration of Snapchat Discover to allow users to explore trending fashion stories and products directly within the Myntra app.

### LinkedIn B2B Connection
- *Professional Networking*: Enable B2B connections with LinkedIn for professional networking and partnerships.
- *Business Profiles*: Businesses can create and manage profiles, showcasing their products and services.
- *Marketing*: The brands can flaunt their marketing strategies with myntra for enhanced collaborations

## Tech Stack

### Frontend
- *ReactJS*: Main framework for building the user interface.
- *HTML/CSS*: Structure and styling of the web pages.
- *JavaScript*: Dynamic interactions and functionalities.

### Backend
- *Flask*: Lightweight WSGI web application framework for Python, used to build the backend API.
- *Pandas*: Data manipulation and analysis.
- *PyTorch*: Machine learning library used for product recommendation systems.
- *SQLAlchemy*: Python SQL toolkit and Object-Relational Mapping (ORM) library. It provides developers with a powerful way to interact with databases in Python, abstracting away many of the complexities of database management
- *Torchvision*: package in PyTorch that provides computer vision functionalities and utilities.

### Web Scraping
- *Beautiful Soup*: Library used for web scraping to extract product data from different sources.

## Setup and Installation

### Prerequisites
- Node.js and npm
- Python 3.7+
- Flask
- Pandas
- PyTorch
- Beautiful Soup

### Installation Steps

1. *Clone the Repository*:
    sh
    git clone https://github.com/yourusername/myntra-hackathon-project.git
    cd myntra-hackathon-project
    

2. *Install Frontend Dependencies*:
    sh
    cd frontend
    npm install
    

3. *Install Backend Dependencies*:
    sh
    cd backend
    pip install -r requirements.txt
    

4. *Run the Backend Server*:
    sh
    cd backend
    flask run
    

5. *Run the Frontend Server*:
    sh
    cd frontend
    npm start
    

## Project Structure


myntra-hackathon-project/
│
├── backend/
│   ├── app.py               # Flask app
│   ├── requirements.txt     # Python dependencies
│   └── ...                  # Other backend files
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # React pages
│   │   ├── App.js           # Main App component
│   │   └── ...              # Other frontend files
│   ├── package.json         # Frontend dependencies
│   └── ...                  # Other frontend files
│
└── README.md                # Project README file


## Usage

1. *Create a Myntra Board*:
   - Navigate to the Myntra Boards section.
   - Click on "Create New Board".
   - Add products to your board by clicking on the "Pin" button on the product page.

2. *Explore Snapchat Discover*:
   - Navigate to the Snapchat Discover section.
   - Browse through the latest fashion stories and trends.

3. *Connect with LinkedIn B2B*:
   - Navigate to the LinkedIn B2B section.
   - Create a business profile or connect with other businesses.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any queries or issues, please reach out to:

- *Name*: Ditipriya Mukherjee
- *Email*: [dtpriyamukherjee@gmail.com]
- *GitHub*: https://github.com/DTPriya20
- *Name*: Shrutika Jha
- *Email*: [shrutikajha2603@gmail.com]
- *GitHub*: https://github.com/shrutikajha2603
