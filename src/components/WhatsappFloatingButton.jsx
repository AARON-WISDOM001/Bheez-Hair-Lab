// src/components/WhatsappFloatingButton.jsx
export default function WhatsappFloatingButton() {
  const whatsappLink =
    "https://wa.me/2349015087642?text=Hello%20I%20am%20interested%20in%20your%20hair%20services"; // <-- your link

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 rounded-full shadow-lg p-4 z-50"
      style={{ width: "60px", height: "60px" }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full"
        title="click to message"
      />
    </a>
  );
}
