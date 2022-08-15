import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CharacterForm from '../../organisms/character-form/character-form';
import CharactersList from '../../organisms/characters-list/characters-list';
import './character-generator.css';

class CharacterGenerator extends React.Component {
  render(): React.ReactNode {
    return (
      <Row>
        <Col sm={8} className="form-container">
          <CharacterForm />
        </Col>
        <Col sm={4} className="characters-container">
          <CharactersList />
        </Col>
      </Row>
    );
  }
}

export default CharacterGenerator;
