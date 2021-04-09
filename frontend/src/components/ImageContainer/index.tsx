import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Modal } from './styles';

interface IImageProps {
  date: string;
  title: string;
  url: string;
}

export const ImageContainer: React.FC<IImageProps> = ({
  title,
  date,
  url
}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Link  
        to={`/details/${date}`} 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div>
          <h1>{title}</h1>
        </div>
        <div onMouseEnter={() => {
          setShow(true);
        }
        }>
          <img onMouseOver={() => setShow(true)} src={url} alt={title} />
        </div>
        <Modal isShow={show}>
          <h1>Click to see more details</h1>
        </Modal>
      </Link>
    </Container>
  )
}