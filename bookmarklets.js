/*
 * ===========================================================
 *  YOUR BOOKMARKLET COLLECTION
 * ===========================================================
 *  One object per bookmarklet:
 *
 *   gist         Gist URL. The code (and the preview) is loaded live
 *                from the gist, so editing the gist updates the page.
 *   file         Filename inside the gist. Lets the page load the raw
 *                file directly, which has no API rate limit.
 *   label        Short name. It also becomes the bookmark's name.
 *   description  One or two sentences.
 *   icon         An emoji.
 *   color        Cartridge color. The Monokai Pro accents:
 *                red #ff6188, orange #fc9867, yellow #ffd866,
 *                green #a9dc76, blue #78dce8, purple #ab9df2
 *   site         (optional) Site it's built for. Shows a "works on" tag
 *                and hides the ▶ Try button, since the code won't run
 *                on the gallery page.
 *   code         (optional) Inline backup if GitHub can't be reached.
 * ===========================================================
 */
window.BOOKMARKLETS = [
  {
    gist: "https://gist.github.com/carlcorder/1c88bbf2f70efec12dc00a92f2d17433",
    file: "ca_altam_sample_question_dashboard.js",
    label: "ALTAM Scoreboard",
    description: "Pulls every attempt at the ALTAM SOA sample questions and opens a sortable dashboard comparing your points and time with the global average.",
    icon: "📊",
    color: "#ff6188",
    site: "coachingactuaries.com"
  },
  {
    gist: "https://gist.github.com/carlcorder/a6eac68714a7bff5c12b0fb558411fc4",
    file: "ca_question_history_pivot.js",
    label: "Question History Pivot",
    description: "Turns your practice question history into a pivot table, with preset views by section, difficulty, marked questions and average time. Set to MAS-I by default.",
    icon: "🧮",
    color: "#fc9867",
    site: "coachingactuaries.com"
  },
  {
    gist: "https://gist.github.com/carlcorder/c6de9706fb706f222c2a70636f73228a",
    file: "ca_my_discussions.js",
    label: "My Discussions",
    description: "Opens every discussion topic you've posted in one searchable viewer, with filters by type, section, date and author. Math is rendered with MathJax.",
    icon: "💬",
    color: "#ffd866",
    site: "coachingactuaries.com"
  },
  {
    gist: "https://gist.github.com/carlcorder/e7b0a69ad5835add02f094ecc13238cf",
    file: "mathjax_menu_edit.js",
    label: "Edit TeX",
    description: "Adds an \"Edit TeX\" option to MathJax's right-click menu. Change an equation's source in a pop-up editor and watch it re-render.",
    icon: "✏️",
    color: "#a9dc76",
    site: "pages using MathJax"
  },
  {
    gist: "https://gist.github.com/carlcorder/0f4c6d12f13d2f2673b09dc635ba963f",
    file: "ca_discussions.js",
    label: "Discussions Below",
    description: "Hides the sidebars, widens the lesson, and loads all of the page's discussions underneath it as collapsible threads. Coaches show in orange and pinned posts get a 📌.",
    icon: "📜",
    color: "#78dce8",
    site: "coachingactuaries.com"
  },
  {
    gist: "https://gist.github.com/carlcorder/7e87bd3ada5b34ec3cabc88ba175f4fa",
    file: "mathjax_source_extract.js",
    label: "TeX Extractor",
    description: "Numbers every equation on the page and opens a table of their TeX source, with Copy and Highlight buttons that jump to each formula.",
    icon: "🔍",
    color: "#ab9df2",
    site: "pages using MathJax"
  }
];
