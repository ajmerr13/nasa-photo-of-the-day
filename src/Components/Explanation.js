import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Explanation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Information</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.explanation}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Explanation;