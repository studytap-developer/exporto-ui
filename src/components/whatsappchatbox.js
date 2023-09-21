import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChatbox = () => {
  // WhatsApp phone number and message
  const phoneNumber = '7674946379'; // Replace with your phone number
  const message = 'Hello, I have a question.';

  // WhatsApp API link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-3   w-12 h-12 rounded-full text-lg transition-colors duration-300 hover:bg-green-700"
  >
    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl"  />
  </a>
  );
};

export default WhatsAppChatbox;



