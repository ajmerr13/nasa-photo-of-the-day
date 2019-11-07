import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Image = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <img src={props.url} id="potd"/>
      <Tooltip placement="right" isOpen={tooltipOpen} target="potd" toggle={toggle}>
      SPAAAAAAAAAAAAAAAAAAAAAAAAAAACE
      </Tooltip>
    </div>
  );
}

export default Image;


