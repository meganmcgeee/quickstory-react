import React, { Component } from 'react';

import ReactBotUI from '../ReactBotUI/ReactBotUI';

const Chat = () => (
  <div>
    <ReactBotUI
      dialogflow={{accessToken: 'db611a54f9784838a764de40b5e2eae5'}} />
  </div>
);


export default Chat;