import React from 'react'

import { Message, Dialogs } from 'components'
import "./Home.scss"


const Home = () => (
  <section className="home">
    <Dialogs
      items={[
        {
          _id: "d95b2b8d46ebc680284bb1e90692f8d4",
          text: 'О, как мила она, Елизавета Тушина,Когда с родственником на дамском седле летает.А локон ее с ветрами играет,',
          created_at: new Date(2018, 1, 6),
          user: {
            _id: "d95b2b8d46ebc680284bb1e90692f8d4",
            fullName: "Фёдор Достоевский",
            avatar: null
          },
        },
        {
          _id: "d95b2b8d46ebc680284bb1e90692f8d4",
          text: 'О, как мила она, Елизавета Тушина,Когда с родственником на дамском седле летает.А локон ее с ветрами играет,',
          created_at: new Date(),
          user: {
            _id: "d95b2b8d46ebc680284bb1e90692f8d4",
            fullName: "Фёдор Достоевский",
            avatar: 'https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/54402639_630445007415915_5169971779099164672_o.jpg?_nc_cat=106&_nc_ohc=fytzoL1UQpcAX_np4jS&_nc_ht=scontent.fiev13-1.fna&oh=61a89c965bf2a42dda474291047c93a9&oe=5ED0F04A'
          },
        }
      ]}

    />

    <Message
      avatar="https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/54402639_630445007415915_5169971779099164672_o.jpg?_nc_cat=106&_nc_ohc=fytzoL1UQpcAX_np4jS&_nc_ht=scontent.fiev13-1.fna&oh=61a89c965bf2a42dda474291047c93a9&oe=5ED0F04A"
      date={new Date(2018, 1, 6)}
      audio="https://notificationsounds.com/soundfiles/13f3cf8c531952d72e5847c4183e6910/file-c2_men-laughing.mp3"
    >
    </Message>

    {/* 

    <Message
      avatar="https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/p160x160/78854764_172664213922054_7997001802597793792_n.jpg?_nc_cat=111&_nc_ohc=c_bE1do4_8QAX8GUrLk&_nc_ht=scontent.fiev13-1.fna&_nc_tp=6&oh=30162d3961e5597843d4dfa35dfeb6a0&oe=5F02B390"
      text="HelloHelloHelloHelloHello"
      date="1 January 2015"
      isMe={true}
      isRead={false}

    >
    </Message>

    <Message
      avatar="https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/54402639_630445007415915_5169971779099164672_o.jpg?_nc_cat=106&_nc_ohc=fytzoL1UQpcAX_np4jS&_nc_ht=scontent.fiev13-1.fna&oh=61a89c965bf2a42dda474291047c93a9&oe=5ED0F04A"
      isTyping={true}
    >
    </Message>

    <Message
      avatar="https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/54402639_630445007415915_5169971779099164672_o.jpg?_nc_cat=106&_nc_ohc=fytzoL1UQpcAX_np4jS&_nc_ht=scontent.fiev13-1.fna&oh=61a89c965bf2a42dda474291047c93a9&oe=5ED0F04A"
      attachments={[
        {
          filename: "image.jpg",
          url: 'https://source.unsplash.com/100x100/?'
        }
      ]}
    >
    </Message> */}

  </section>
);

export default Home


