export function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 👋 How can I help you today?";
  }

  if (msg.includes("help")) {
    return "Sure 🙂 Tell me what you need help with.";
  }

  if (msg.includes("price")) {
    return "Please contact our support team for pricing details.";
  }

  if (msg.includes("contact")) {
    return "You can contact us at support@example.com";
  }

  return "I'm still learning 🤖 Please try asking something else.";
}
