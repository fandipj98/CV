import { Container, Row, Col, Card } from 'react-bootstrap';

import PortfolioData from '../../data/PortfolioData';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio_container">
            <div className="section_title">
                <span className="section_icon">
                    {PortfolioData.icon}
                </span>
                <h1>{PortfolioData.title}</h1>
            </div>

            <Container>
                <Row xs={1} sm={1} md={2} lg={2} >
                {PortfolioData.data.map((items) => (
                    <div key={items.key} className="portfolio_grid_item">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={items.image} className="portfolio_item_image" />
                                <Card.Body>
                                <Card.Title>
                                    <div className="portfolio_item_title">
                                        {items.name}          
                                    </div>
                                    <hr className="portfolio_item_title_underline" />
                                </Card.Title>
                                <Card.Text>
                                    <span className="portfolio_item_language">{items.language}</span>
                                    {items.framework !== "-" && " | " + items.framework}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;