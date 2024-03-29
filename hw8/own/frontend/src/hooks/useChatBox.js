import { useState } from "react";

const useChatBox = () => {
    const [chatBoxes, setChatBoxes] = useState([
        // {
        //     friend: "Mary", key: "MaryChatbox",
        //     chatLog: []
        // },
        // {
        //     friend: "Peter", key: "PeterChatBox",
        //     chatLog: []
        // }
    ]);

    const createChatBox = (friend, me) => {
      console.log(friend, me);
      const newKey = me <= friend ?
            `${me}_${friend}` : `${friend}_${me}`;
      if (chatBoxes.some(({ key }) => key === newKey)) {
        throw new Error(friend +
                        "'s chat box has already opened.");
      }
      if (!friend || !me) {
        throw new Error('Fill in the inputs');
      }
      const newChatBoxes = [...chatBoxes];
      const chatLog = [];
      newChatBoxes.push({ friend, key: newKey, chatLog });
      setChatBoxes(newChatBoxes);
      return newKey;
    };

    const removeChatBox = (targetKey, activeKey) => {
        let newActiveKey = activeKey;
        let lastIndex;
        chatBoxes.forEach(({ key }, i) => {
          if (key === targetKey) { lastIndex = i - 1; }});
        const newChatBoxes = chatBoxes.filter(
          (chatBox) => chatBox.key !== targetKey);
        if (newChatBoxes.length) {
          if (newActiveKey === targetKey) {
            if (lastIndex >= 0) {
              newActiveKey = newChatBoxes[lastIndex].key;
            } else { newActiveKey = newChatBoxes[0].key; }
          }
        } else newActiveKey = ""; // No chatBox left
        setChatBoxes(newChatBoxes);
        return newActiveKey;
    };

    return { chatBoxes, setChatBoxes, createChatBox, removeChatBox };
};
export default useChatBox;
