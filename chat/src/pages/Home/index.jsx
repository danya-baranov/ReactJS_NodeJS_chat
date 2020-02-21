import React from 'react'

import { ChatInput, Status, Button } from 'components'
import { Dialogs, Messages } from "containers"

import "./Home.scss"
import { Icon } from 'antd'


const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" />
            <span>Cписок диалогов</span>
          </div>
          <Button type="link" shape="circle" icon="form" />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs
            userId={0}

          />
        </div>
      </div>


      <div className="chat__dialog">

        <Status online fullName="Гай Юлий Цезарь" />

        <div className="chat__dialog-messages">
          <Messages />



        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>

      </div>
    </div>
  </section>
);

export default Home


