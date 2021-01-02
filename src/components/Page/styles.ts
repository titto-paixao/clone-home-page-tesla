import styled from 'styled-components';
import img_1 from '../../assets/img_1.jpg'
import img_2 from '../../assets/img_2.jpg'
import img_3 from '../../assets/img_3.jpg'
import img_4 from '../../assets/img_4.jpg'
import img_5 from '../../assets/img_5.jpg'
import img_6 from '../../assets/img_6.jpg'

export const Container = styled.div`
  .colored:nth-child(1) {
    background:url(${img_1});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(2) {
    background:url(${img_2});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(3) {
    background:url(${img_3});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(4) {
    background:url(${img_4});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(5) {
    background:url(${img_5});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(6) {
    background:url(${img_6});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
  }
  .colored:nth-child(7) {
    background:#FFF;
  }
`;

export const Spacer = styled.div`
  height:10vh;
`;