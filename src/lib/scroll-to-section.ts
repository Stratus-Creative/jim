/**
 * Smoothly scroll to a section and update the URL path (no hash).
 * Supports direct linking: visiting /merch scrolls to the merch section.
 */
export function scrollToSection(
  sectionId: string,
  e?: React.MouseEvent,
) {
  if (e) e.preventDefault();

  const el = document.getElementById(sectionId);
  if (el) {
    // Offset for the fixed navbar (64px)
    const navHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // Update URL to clean path without hash
  const path = sectionId === "home" ? "/" : `/${sectionId}`;
  window.history.replaceState(null, "", path);
}
