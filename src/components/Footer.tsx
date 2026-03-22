import GlassModeToggle from "@/components/GlassModeToggle";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glass-slot">
        <GlassModeToggle />
      </div>

      <p className="site-footer__text">
        © {new Date().getFullYear()} Rishit Ghosh. All rights reserved.
      </p>
    </footer>
  );
}
