# 🕹️ Bookmarklet Arcade

A gallery of bookmarklets that look like game cartridges. Drag a whole cartridge to your bookmarks bar to install it.

## Publish on GitHub Pages

1. Create a new repo (e.g. `bookmarklets`) and add `index.html` and `bookmarklets.js`.
2. Go to **Settings → Pages → Build and deployment**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, then click **Save**.
3. After a minute your site is live at `https://<your-username>.github.io/bookmarklets/`.

## Add a bookmarklet from a Gist

1. Create a gist at https://gist.github.com with a `.js` file containing plain JavaScript. Don't add a `javascript:` prefix or wrap it in a function; the page does both for you. (It also handles code that's already a `javascript:` URL.)
2. Add an entry to `bookmarklets.js`:

```js
{
  gist: "https://gist.github.com/yourname/abc123def456",
  file: "my-tool.js",          // filename in the gist; loads the raw file (no rate limit)
  label: "My Tool",            // also becomes the bookmark's name
  description: "What it does, in a sentence or two.",
  icon: "🛠️",
  color: "#ff6188",            // Monokai Pro: #ff6188 #fc9867 #ffd866 #a9dc76 #78dce8 #ab9df2
  site: "example.com",         // optional; shows "works on" and hides ▶ Try
  code: "..."                  // optional backup if GitHub can't be reached
}
```

The code is fetched from the GitHub API when someone visits, so editing the gist updates the cartridge without a redeploy. People who already installed it keep their old copy until they drag it again.

## Good to know

- **Rate limit:** when `file` is set, the page loads the raw gist file, which has no rate limit. Without it, the page uses the GitHub API (about 60 calls per hour per visitor). Raw files are cached by GitHub for a few minutes, so a gist edit can take up to about 5 minutes to appear.
- **Sites that block bookmarklets:** some sites (GitHub itself, for example) have a strict Content Security Policy that stops bookmarklets from running. This is normal.
- **Mobile:** phones can't drag to a bookmarks bar. The ⧉ button copies the `javascript:` URL so it can be pasted into a bookmark by hand.
- **Local preview:** just open `index.html` in a browser. It works from your disk.
- **Title font:** the title uses [Public Pixel](https://www.fontspace.com/public-pixel-font-f72305) (CC0) if you add `fonts/PublicPixel.ttf` (or `.woff2`) to the repo. Otherwise it uses Press Start 2P from Google Fonts, which looks almost the same.
