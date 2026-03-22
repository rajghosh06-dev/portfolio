"use client";

import { FlaskConical, Sparkles } from "lucide-react";
import { useTheme } from "@/utils/ThemeContext";

export default function GlassModeToggle() {
  const { glassMode, toggleGlassMode } = useTheme();

  return (
    <div className="glass-mode-tile" role="group" aria-label="Glass mode beta setting">
      <div className="glass-mode-tile__meta">
        <span className="glass-mode-tile__badge">BETA</span>
        <div className="glass-mode-tile__copy">
          <p>Glass Mode</p>
          <span>Turn on a frosted, high-polish surface system across the portfolio.</span>
        </div>
      </div>

      <button
        type="button"
        className="glass-mode-switch"
        data-enabled={glassMode ? "true" : "false"}
        onClick={toggleGlassMode}
        aria-pressed={glassMode}
        aria-label={`Glass Mode ${glassMode ? "enabled" : "disabled"}`}
      >
        <span className="glass-mode-switch__label">
          <Sparkles size={15} />
          Glass Mode
        </span>
        <span className="glass-mode-switch__track" aria-hidden="true">
          <span className="glass-mode-switch__thumb">
            <FlaskConical size={13} />
          </span>
        </span>
      </button>
    </div>
  );
}
