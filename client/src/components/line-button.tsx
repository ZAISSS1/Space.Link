import lineIconPath from "@assets/images_1753592688326.png";

export default function LineButton() {
  return (
    <a 
      href="https://lin.ee/5dGshlA" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 line-button group"
    >
      <img 
        src={lineIconPath} 
        alt="LINE" 
        className="w-16 h-16 rounded-full shadow-lg transform transition-all hover:scale-110 border-0 outline-none"
      />
      <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        加入LINE好友
      </div>
    </a>
  );
}