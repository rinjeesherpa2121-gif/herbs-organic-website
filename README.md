# Herbs & Organic — Sanity CMS Setup

This folder contains new/updated files that connect your website to Sanity,
so your parents can edit products, photos, the About text, and contact info
without touching code.

## Step A — Add these files to your GitHub repo

You already know how to use "Add file → Upload files" on GitHub, so:

1. Go to your repo: https://github.com/rinjeesherpa2121-gif/herbs-organic-website
2. Click **Add file → Upload files**
3. On your computer, open this folder and **drag the entire contents**
   (not this README) into the GitHub upload box. Modern browsers (Chrome,
   Edge) will preserve the folder structure (e.g. `sanity/lib/client.ts`
   stays inside `sanity/lib/`).
   - If GitHub flattens the folders or you're not sure it worked, the more
     reliable option is installing **GitHub Desktop** (free, no coding),
     signing in, cloning your repo to your computer, then copying these
     files into the cloned folder in File Explorer / Finder (keeping the
     same folder names), and clicking "Commit" then "Push" in GitHub Desktop.
4. Commit the changes (message like "Add Sanity CMS integration")
5. This will overwrite `package.json`, `pnpm-lock.yaml`, `app/page.tsx`,
   and the 4 component files — that's expected, they've been updated.

## Step B — Add environment variables in Vercel

1. Go to vercel.com and open your `herbs-organic-website` project
2. Go to **Settings → Environment Variables**
3. Add these three (apply to Production, Preview, and Development):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `p5xug7rc` |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

4. Save, then go to the **Deployments** tab and redeploy the latest
   deployment (or it will redeploy automatically once you push to GitHub)

## Step C — Add your parents as Studio editors

1. Go to https://www.sanity.io/manage and open your "Herbs and Organic" project
2. Go to **Members** → **Invite members**
3. Enter your parents' email addresses, set role to **Editor**
   (Editor can create/edit/publish content but can't change project settings)
4. They'll get an email invite. Once accepted, they can log into
   `https://www.herbsandorganic.com/studio` with that same email.

## Step D — Move your existing content into Sanity

Your current 19 products, 5 gallery photos, About text, and contact info are
still hardcoded as a fallback, so **the live site won't break** during this
step. To make them fully editable:

1. Open `https://www.herbsandorganic.com/studio` and log in
2. Use `CONTENT-TO-COPY.md` (included in this folder) as your copy-paste
   reference — it has every product's exact text, ready to paste in
3. For photos: download each file from your repo's `public/` folder on
   GitHub, then upload it into the matching Photo field in the Studio
4. Once a product/photo/section exists in Sanity, it automatically
   replaces the hardcoded fallback on your live site (may take up to a
   minute due to caching)

This is the one manual step — after this, all future edits happen entirely
in the Studio, no code needed.

## Notes

- The site checks Sanity every 60 seconds for updates, so changes appear
  on the live site within about a minute of clicking "Publish" in the Studio
- If Sanity is ever unreachable or a field is left empty, the site falls
  back to its original built-in content automatically — it will never show
  a broken page
