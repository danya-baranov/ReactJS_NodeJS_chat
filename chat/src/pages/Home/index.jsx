import React from 'react'

import { Messages, ChatInput, Status, Button } from 'components'
import { Dialogs } from "containers"

import "./Home.scss"
import { Icon } from 'antd'
import dialogsJSON from "dialogs.json";


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
            items={dialogsJSON}

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


