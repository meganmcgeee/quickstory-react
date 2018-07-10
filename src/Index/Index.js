import { Link, Router } from 'react-router-dom';
import { NavLink, Route, Switch } from 'react-router-dom';
import { darken, lighten } from 'polished';

import Chat from '../Chat/Chat';
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
  // Bot UI
  : root {
    --primary - color: black;
    --secondary - color: gray;

    --border - radius: 10 px;
    --icon - size: 50 px;
    --font - color: white;
    --font - family: 'Roboto';
    --font - size: 1e m;
    --font - weight: 300;

    --container - bg: white;
    --container - right: 0;
    --container - width: 100 % ;

    --message - margin - lg: 60 px;
    --message - margin - sm: 40 px;
    --message - margin - y: 5 px;
    --message - padding: 10 px;

    --img - user: url(http: //www.libertyspecialtymarkets.com/wp-content/uploads/2017/01/profile-default.jpg);
        --img - bot: url(https: //image.flaticon.com/icons/svg/270/270137.svg);
        }
.container * {
    box - sizing: border - box;
    margin: 0;
  }

  .container {
    bottom: 0;
    position: absolute;
    right: var (--container - right);
    width: var (--container - width);
  }

  .container header {
    background: var (--primary - color);
    cursor: pointer;
    height: 45 px;
    padding: 5 px 10 px;
  }

  .container header h1, #demo div h1 {
    color: var (--font - color);
    margin: 5 px;
    font - family: var (--font - family);
    font - size: 1.3e m;
    font - weight: var (--font - weight);
  }

  .container div {
    /* transition: all 0.75s ease-in-out; */
  }

  .messages - wrapper {
    background: var (--container - bg);
    position: relative;
    display: flex;
    flex - direction: column - reverse;
  }

  .messages {
    width: 100 % ;
    padding: 0 px 10 px;
    overflow - y: auto;
  }

  .img - user {
    content: var (--img - user);
  }

  .img - bot {
    content: var (--img - bot);
  }

  .group {
    clear: both;
    padding: 10 px 0 px;
  }

  .group img {
    border - radius: 100 % ;
    height: var (--icon - size);
    width: var (--icon - size);
  }

  .group.message {
    padding: var (--message - padding);
  }

  .group.message: nth - child(2) {
    border - top - left - radius: var (--border - radius);
    border - top - right - radius: var (--border - radius);
  }

  .group.message: last - child {
    border - bottom - left - radius: var (--border - radius);
    border - bottom - right - radius: var (--border - radius);
  }

  .group - user {
    float: right;
  }

  .group - user img {
    float: right;
  }

  .group - user.message {
    background - color: var (--secondary - color);
    margin: var (--message - margin - y) var (--message - margin - lg) var (--message - margin - y) var (--message - margin - sm);
  }

  .group - bot {
    float: left;
  }

  .group - bot img {
    float: left;
  }

  .group - bot.message {
    background - color: var (--primary - color);
    margin: var (--message - margin - y) var (--message - margin - sm) var (--message - margin - y) var (--message - margin - lg);
  }

  .message p {
    color: var (--font - color);
    font - family: var (--font - family);
    font - size: var (--font - size);
    font - weight: var (--font - weight);
  }

  .text - form {
    border - top: 1 px solid
    var (--primary - color);
    display: flex;
    height: 35 px;
    width: 100 % ;
  }

input::-webkit - input - placeholder {
    color: var (--primary - color) !important;
  }

  .text - input {
    border - style: none;
    color: var (--primary - color);
    font - family: var (--font - family);
    font - size: var (--font - size);
    padding: 0 10 px;
    width: 100 % ;
  }

  .btn - send {
    border: none;
    background - color: var (--primary - color);
    color: var (--font - color);
    display: flex;
    font - family: var (--font - family);
    font - size: var (--font - size);
  }

  .btn - voice {
    border: none;
    background - color: transparent;
    color: var (--primary - color);
    display: flex;
    font - size: 1.2e m;
    text - align: center;
  }

/*
 * Typing animation reference:
 * https://codepen.io/mattonit/pen/vLoddq
 */

#
wave {
  position: relative;
  text - align: center;
  margin - left: auto;
  margin - right: auto;
}

#
wave.dot {
  display: inline - block;
  width: 6 px;
  height: 6 px;
  border - radius: 50 % ;
  margin - right: 3 px;
  background: var (--font - color);
  animation: wave 1.3 s linear infinite;
}

#
wave.dot: nth - child(2) {
  animation - delay: -1.1 s;
}

#
wave.dot: nth - child(3) {
  animation - delay: -0.9 s;
}

@keyframes wave {
  0 % ,
    60 % ,
    100 % {
      transform: initial;
    }
  30 % {
    transform: translateY(-6 px);
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
    <Route exact path='/chat' component={Chat}></Route>
  </Switch>
);

    
const Index = () => (
  <StyledIndex>
      <Navigation />
      <Main />
  </StyledIndex>
);

export default Index;
