document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatPopup = document.getElementById("chat-popup");
    const closePopupButton = document.getElementById("close-button");
    const chatContainer = document.getElementById("chat-container");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    let isOpen = false;

    chatButton.addEventListener("click", function () {
        toggleChatPopup();
    });

    closePopupButton.addEventListener("click", function () {
        toggleChatPopup();
    });

    function toggleChatPopup() {
        if (isOpen) {
            chatPopup.style.display = "none";
        } else {
            chatPopup.style.display = "block";
        }
        isOpen = !isOpen;
    }

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message) {
            const userMessageElement = createMessageElement("Você", message);
            chatContainer.appendChild(userMessageElement);

            // Lógica para resposta do chatbot (neste exemplo, apenas uma resposta genérica)
            setTimeout(function () {
                const botMessageElement = createMessageElement("Chatbot", "Olá! Como posso ajudar?");
                chatContainer.appendChild(botMessageElement);
            }, 500);

            messageInput.value = "";
        }
    });

    function createMessageElement(sender, text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = `${sender}: ${text}`;
        return messageElement;
    }
});