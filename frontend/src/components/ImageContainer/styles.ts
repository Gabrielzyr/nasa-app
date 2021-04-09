import styled from 'styled-components';

interface IModalProps {
  isShow: boolean;
}

export const Container = styled.div`
  display: flex;
  background: rgba(46,27,87,1);
  align-items: center;
  justify-content: center;
  max-width: 460px;
  width: 80%;
  height: 500px;
  overflow: hidden;
  border-radius: 6px;
  border: 3px solid rgba(46,27,87,0.7);
  a {
    height: 100%;
    position: relative;
    text-decoration: none;
  
    div > h1 {
      flex: 1;
      height: 40px;
      background: rgba(46,27,87,1);
    }
    div > img {
      height: 100%;
    }

    div {
      /* height: 100%; */
      display: flex;
      align-items: center;
      justify-content: center;
      
      h1 {
        color: white;
        text-align: center;
        font-size: 1.5rem;
      }
      
      img {
        height: 100%;
        max-height: 460px;
        min-height: 460px;

        object-fit: contain;
        object-position: center;
      }
    }
  }

`;

export const Modal = styled.div<IModalProps>`
  position: absolute;
  display: ${props => props.isShow ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(46,27,87,.5);
  top: 0;
  left: 0;

  opacity: ${props => props.isShow ? '1': '0'};
  transition: opacity 300ms;
`;