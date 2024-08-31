import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./LoginPage";  // Import the Login Page
import backgroundImage from './assets/lib1.jpg'; // Import the background image
import viewBooksImage from './assets/1.jpg';  // Add an image for "View Books"
import manageUsersImage from './assets/2.jpg';  // Add an image for "Manage Users"
import issueReturnImage from './assets/3.jpg';  // Add an image for "Issue/Return Books"
import reportsImage from './assets/4.jpg';  // Add an image for "Reports"
import carouselImage1 from './assets/1final.jpg'; // Import carousel images
import carouselImage2 from './assets/2ss.jpg';
import carouselImage3 from './assets/3final.jpg';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';  // Add custom styles for card deck

const Dashboard = () => {
  return (
    <Container fluid style={{ ...styles.dashboardContainer, backgroundImage: `url(${backgroundImage})` }}>
      <h1 style={styles.heading}>Library Management System</h1>
      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={viewBooksImage} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>View Books</Card.Title>
              <Card.Text>
                Explore the collection of books available in the library.
              </Card.Text>
              <Link to="/view-books">
                <Button variant="primary">View Books</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={manageUsersImage} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Manage Users</Card.Title>
              <Card.Text>
                Manage user profiles and their library accounts.
              </Card.Text>
              <Link to="/manage-users">
                <Button variant="primary">Manage Users</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={issueReturnImage} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Issue/Return Books</Card.Title>
              <Card.Text>
                Manage the issuing and returning of books in the library.
              </Card.Text>
              <Link to="/issue-return">
                <Button variant="primary">Issue/Return</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={reportsImage} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Reports</Card.Title>
              <Card.Text>
                Generate and view reports on library activities.
              </Card.Text>
              <Link to="/reports">
                <Button variant="primary">View Reports</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bootstrap Carousel */}
      <Container style={styles.carouselContainer}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="Diverse Collection"
              style={styles.carouselImage}
            />
            <Carousel.Caption style={styles.carouselCaption}>
              <h3>Discover Our Collection</h3>
              <p>Explore a wide range of books and resources tailored to your interests.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage2}
              alt="Community Events"
              style={styles.carouselImage}
            />
            <Carousel.Caption style={styles.carouselCaption}>
              <h3>Join Our Community Events</h3>
              <p>Participate in engaging library events and programs for all ages.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage3}
              alt="Advanced Search"
              style={styles.carouselImage}
            />
            <Carousel.Caption style={styles.carouselCaption}>
              <h3>Advanced Search Capabilities</h3>
              <p>Use our advanced search features to find the exact book or resource you need.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Placeholder Routes */}
        <Route path="/view-books" element={<div>View Books Page</div>} />
        <Route path="/manage-users" element={<div>Manage Users Page</div>} />
        <Route path="/issue-return" element={<div>Issue/Return Page</div>} />
        <Route path="/reports" element={<div>Reports Page</div>} />
      </Routes>
    </Router>
  );
}

const styles = {
  dashboardContainer: {
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#fff',
  },
  cardImage: {
    height: '150px',  // Set a fixed height for card images
    objectFit: 'cover',  // Ensures the image covers the space properly
  },
  carouselContainer: {
    marginTop: '40px',
  },
  carouselImage: {
    height: '400px', // Adjust this value to control the height of the carousel images
    objectFit: 'cover', // Ensures the image covers the space properly
  },
  carouselCaption: {
    color: 'black', // Set caption text color to black
  },
};

export default App;
