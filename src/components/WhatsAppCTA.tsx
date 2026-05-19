import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppCTA = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919130000379";
  const whatsappMessage = "Hi! I'm interested in your services.";
  const whatsappURL = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={28} />
          {/* Pulsing ring animation */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-green-400 rounded-full opacity-0"
          />
        </motion.button>

        {/* Info popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-sm uppercase tracking-wide text-gray-900">Chat with us</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get in touch with our team for any inquiries about our services.
              </p>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-3 rounded font-medium hover:shadow-lg transition-all"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  Start Chat
                </span>
                <span className="text-xs">{phoneNumber}</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Backdrop when popup is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
});

WhatsAppCTA.displayName = "WhatsAppCTA";
export default WhatsAppCTA;
