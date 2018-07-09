import { Link, Router } from 'react-router-dom';
import { NavLink, Route, Switch } from 'react-router-dom';
import { darken, lighten } from 'polished';

import React from 'react';
import ReactBotUI from '../ReactBotUI/ReactBotUI';
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

  const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink to='/'>Timeline</NavLink></li>
          <li><NavLink to='/video'>Video</NavLink></li>
          <li><NavLink to='/chat'>Chat</NavLink></li>
        </ul>
      </nav>
    );
        const Timeline = () => (
          <div className='timeline'>
            <div>
              <img
                src="http://www.ornaments.com.ua/wp-content/uploads/2014/08/Man%20silhouette%20HV.png"
                alt="The Agent"
              />
              <h3>Instigate the Agent</h3>
            </div>
          </div>
        );

const Main = () => (
  <Switch>
    <Route exact path='/' component={Timeline}></Route>
    <Route exact path='/video' component={VideoRecord}></Route>
    <Route exact path='/chat' component={ReactBotUI}></Route>
  </Switch>
);

    
const Index = () => (
  <StyledIndex>
      <Navigation />
      <Main />
  </StyledIndex>
);

export default Index;
