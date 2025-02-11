import { useState, useEffect } from "react";
import axios from "../axios";
import ClipLoader from "react-spinners/ClipLoader";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    axios.get("/chat/chat").then((res) => setChat(res.data));
  }, []);

  const sendMessage = async () => {
    setLoading(true);
    try{
      const res = await axios.post("/chat/savechat", { question: message });
      setChat([...chat, { question: message, response: res.data.response }]);
      setMessage("");
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="border p-4 h-96 overflow-y-auto">
        {chat.map((c, index) => (
          <div key={index}>
            <p className="text-blue-500">{c.question}</p>
            <p className="text-gray-600">{c.response}</p>
          </div>
        ))}
        {loading && <div className="flex justify-center p-2"><ClipLoader size={25} color={"#000"} /></div>}
      </div>
      <input type="text" placeholder="Ask something..." className="border p-2 w-full mt-2"
        value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className="bg-green-500 text-white p-2 w-full mt-2" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;