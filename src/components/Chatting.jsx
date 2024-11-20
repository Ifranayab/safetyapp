// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";
// import "./Chatbot.css";

// const Chatting = () => {
//   const [userMessage, setUserMessage] = useState("");
//   const [userFile, setUserFile] = useState({ mime_type: null, data: null });
//   const chatContainerRef = useRef(null);
//   const imageRef = useRef(null);

//   const Api_Url =
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCFBc0s_8yj-Rc6N4qqC0eQYjSIL71CitQ";


 

//   const handleChatResponse = async (userMessage) => {
//     setUserMessage(userMessage);
//     const userChatBox = createChatBox(userMessage, "user-chat-box");

//     // chatContainerRef.current.appendChild(userChatBox);
//     // chatContainerRef.current.scrollTo({
//     //   top: chatContainerRef.current.scrollHeight,
//     //   behavior: "smooth",
//     // });
//     if (chatContainerRef.current) {
//         chatContainerRef.current.appendChild(userChatBox);
//         chatContainerRef.current.scrollTo({
//           top: chatContainerRef.current.scrollHeight,
//           behavior: "smooth",
//         });
//       }


//     // Generate AI response
//     setTimeout(async () => {
//       const aiChatBox = createChatBox(
//         // `<img src="loading.webp" alt="" class="load" width="50px">`,
//         "ai-chat-box"
//       );
//       chatContainerRef.current.appendChild(aiChatBox);
//       await generateResponse(aiChatBox);
//     }, 600);
//   };

//   const generateResponse = async (aiChatBox) => {
//     const text = aiChatBox.querySelector(".ai-chat-area");
//     const RequestOption = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: "userMessage" },
//             ...(userFile.data ? [{ inline_data: userFile }] : []),
//         ] },],
//       }),
//     };

//     try {
//       const response = await fetch(Api_Url, RequestOption);
//       const data = await response.json();
//       const apiResponse = data.candidates[0].content.parts[0].text
//         .replace(/\*\*(.*?)\*\*/g, "$1")
//         .trim();
//       text.innerHTML = apiResponse;
//     } catch (error) {
//       console.error(error);
//     } finally {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//       imageRef.current.src = "img.svg";
//       imageRef.current.classList.remove("choose");
//       setUserFile({});
//     }
//   };

//   const createChatBox = (html, classes) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     div.classList.add(classes);
//     return div;
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     let reader = new FileReader();
//     reader.onload = (e) => {
//       const base64string = e.target.result.split(",")[1];
//       setUserFile({
//         mime_type: file.type,
//         data: base64string,
//       });
//       imageRef.current.src = `data:${file.type};base64,${base64string}`;
//       imageRef.current.classList.add("choose");
//     };
//     reader.readAsDataURL(file);
//   };



//   return (
//     <div className="h-full w-full">
//       <div className="chat-container" ref={chatContainerRef}>
//         <div className="ai-chat-box">
//           <button
//             id="image"
//             onClick={() => document.querySelector("#image input").click()}
//           >
//             <img src="../images/image.png" alt="" />
//             <input
//               type="file"
//               accept="images/*"
//               hidden
//               onChange={handleFileChange}
//             />
//           </button>

//           <div className="user-chat-box">
//             <button id="submit" onClick={() => handleChatResponse(userMessage)}>
//               <img src="../images/submit.png" alt="" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="prompt-area">
//         <input
//           type="text"
//           id="prompt"
//           placeholder="Message..."
//           value={userMessage}
//           onChange={(e) => setUserMessage(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleChatResponse(userMessage);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Chatting;
