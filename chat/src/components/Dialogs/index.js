import React from 'react';
import orderBy from 'lodash/orderBy'

import { DialogItem } from 'components'
import { Input } from "antd";
import './Dialogs.scss';





const Dialogs = ({ items, userId, onSearch, inputValue }) => (
  <div className="dialogs">


    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>


    {orderBy(items, ["created_at"], ["desc"]).map(item => (
      <DialogItem
        key={item._id} isMe={item.user._id === userId} {...item}

      />
    ))}
  </div>
);




export default Dialogs;