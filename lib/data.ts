
export function getAboutData() {
  return {
    name: "Vishal",
    alias: "Sanito / Zynito",
    role: "Backend Engineer and AI/ML Engineer (learning)",
    image_url: "https://wallpapers-clan.com/wp-content/uploads/2023/02/jujutsu-kaisen-gojo-satoru-pfp-1.jpg", 
    bio: "I build accessible, pixel-perfect, performant web experiences."
  };
}

export function getDailyQuote() {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Domain expansion: Infinite Void."
  ];
  // Simple random quote for now, or use date-based index
  const index = new Date().getDate() % quotes.length;
  return quotes[index];
}
