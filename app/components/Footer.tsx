export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground/60 border-t border-white/5">
       <p>© {new Date().getFullYear()} MrSanito. Designed & Built in {new Date().getFullYear()}.</p>
    </footer>
  );
}
