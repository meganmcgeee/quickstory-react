import { Link, Router } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import { darken, lighten } from 'polished';

// import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import VideoRecord from '../VideoRecord/VideoRecord';
import styled from 'styled-components';

const StyledIndex = styled.div`
  padding: 20px;
  text-align: center;
  border-radius: 3px;
  color: #000;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, '#4285F4')};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;

    .btn:first-child {
      margin-right: 10px;
    }

    .btn {
      border: none;
    }
  }

  footer {
    margin: 20px -20px -20px;
    border-top: 1px solid ${darken(0.1, '#4285F4')};
    padding: 20px;

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${lighten(0.35, '#4285F4')};
      margin: 0;
    }

    p a {
      color: ${lighten(0.35, '#4285F4')};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;

    footer {
      margin: 30px -30px -30px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 40px;

    footer {
      margin: 40px -40px -40px;
    }
  }
`;

const Index = () => (
  <StyledIndex>
        <div>
          <img
            src="http://www.ornaments.com.ua/wp-content/uploads/2014/08/Man%20silhouette%20HV.png"
            alt="The Agent"
          />
          <h3>Instigate the Agent</h3>
          <VideoRecord/>
        </div>
  </StyledIndex>
);

export default Index;
