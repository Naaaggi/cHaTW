import React from 'react';
import { useChannelStateContext} from 'stream-chat-react';

const UserList = () => {
    const { channel, watcher } = useChannelStateContext();
    const watchers = Object.values(channel.state.members).filter(({ user }) => user.id !== watcher.userID);
    console.log(watchers)

  return ;
};

export default UserList;