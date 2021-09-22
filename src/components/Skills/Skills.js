import { useState } from 'react';
import { Container, Row, Col, ProgressBar, Modal } from 'react-bootstrap';
import CustomButton from '../Button/CustomButton';

import SkillsData from '../../data/SkillsData';
import { Framework, Language, Certification } from '../../data/SkillsData';

import './Skills.css';

function Skills() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className="skills_container">
            <div className="section_title">
                <span className="section_icon">
                    {SkillsData.icon}
                </span>
                <h1>{SkillsData.title}</h1>
            </div>
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="skills_section_container">
                            <h4 className="skills_section_title">Programming Language</h4>
                            <hr className="skills_section_title_underline" />
                        </div>
                        <ul className="skills_list_container">
                            {SkillsData.data.map((item) => {
                                return(
                                    <li key={item.key} className="skills_list">
                                        <div className="skills_image_container">
                                            <img src={item.icon} alt="" className="skills_icon"/>
                                        </div>
                                        <div className="skills_text_container">
                                            <h6 className="skills_name">{item.name}</h6>
                                        </div>
                                    </li>
                                );
                            })
                            }
                        </ul>  
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="skills_section_container">
                            <h4 className="skills_section_title">Framework</h4>
                            <hr className="skills_section_title_underline" />
                        </div>
                        <ul className="skills_list_container">
                            {Framework.map((item) => {
                                return(
                                    <li key={item.key} className="skills_list">
                                        <div className="skills_image_container">
                                            <img src={item.icon} alt="" className="skills_icon"/>
                                        </div>
                                        <div className="skills_text_container">
                                            <h6 className="skills_name">{item.name}</h6>
                                        </div>
                                    </li>
                                );
                            })
                            }
                        </ul>  
                    </Col>
                </Row>
                
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className="skills_section_container">
                            <h4 className="skills_section_title">Language</h4>
                            <hr className="skills_section_title_underline" />
                        </div>
                        
                        <ul className="skills_list_container">
                            {Language.map((item) => {
                                return(
                                    <li key={item.key} className="skills_list">
                                        <div className="skills_text_container">
                                            <h6 className="language_name">{item.name}</h6>
                                        </div>
                                    </li>
                                );
                            })
                            }
                        </ul>  
                    </Col>

                    <Col lg={6} md={6} sm={6} xs={6} className="rating_column_container">   
                        {Language.map((item) => {
                            return(
                                <div key={item.key} className="rating_container">
                                    <ProgressBar now={item.rating} variant="custom"/>
                                </div>
                            );
                        })
                        }
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <div className="skills_section_container">
                            <h4 className="skills_section_title">Certification</h4>
                            <hr className="skills_section_title_underline" />
                        </div>

                        <ul className="skills_list_container">
                            {Certification.map((item) => {
                                return(
                                    <li key={item.key} className="skills_list">
                                        <div className="skills_text_container">
                                            <h6 className="certificate_name">{item.name}</h6>
                                        </div>
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </Col>

                    <Col lg={6} md={6} sm={6} xs={6} className="rating_column_container">   
                        <div className="skills_show_modal" key={Certification[0].key}>
                            <CustomButton onClick={handleShow1} text="Show" />
                            <Modal size="lg" centered show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{Certification[0].name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src={Certification[0].image} alt="" className="modal_image" /></Modal.Body>
                                <Modal.Footer>
                                    <CustomButton variant="secondary" onClick={handleClose1} text="Close" />
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <div className="skills_show_modal" key={Certification[1].key}>
                            <CustomButton onClick={handleShow2} text="Show" />
                            <Modal size="lg" centered show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{Certification[1].name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src={Certification[1].image} alt="" className="modal_image" /></Modal.Body>
                                <Modal.Footer>
                                    <CustomButton variant="secondary" onClick={handleClose2} text="Close" />
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Skills;