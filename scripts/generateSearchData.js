const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const docsDir = path.join(__dirname, "..", "docs");
const outFile = path.join(__dirname, "..", "src", "data", "searchData.js");

// Lấy toàn bộ file .md / .mdx
function getAllDocs(dir) {
  let files = fs.readdirSync(dir);
  let mdFiles = [];

  for (let file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      mdFiles = mdFiles.concat(getAllDocs(fullPath));
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      mdFiles.push(fullPath);
    }
  }
  return mdFiles;
}

// Tạo URL dạng /docs/...
function docPathToUrl(fullPath) {
  const rel = path.relative(docsDir, fullPath);
  return "/docs/" + rel.replace(/\\/g, "/").replace(/\.mdx?$/, "");
}

// Lấy heading đầu tiên (# hoặc ##)
function extractFirstHeading(text) {
  const lines = text.split("\n");

  for (const line of lines) {
    const h1 = line.match(/^#\s+(.*)/);
    if (h1) return h1[1].trim();

    const h2 = line.match(/^##\s+(.*)/);
    if (h2) return h2[1].trim();
  }

  return null;
}

// Loại markdown (để lấy 200 ký tự description)
function stripMarkdown(text) {
  return text
    .replace(/[#>*`_]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Tạo search data
function buildSearchData() {
  const files = getAllDocs(docsDir);
  let data = [];
  let id = 1;

  for (let file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const parsed = matter(raw);

    // Lấy title từ frontmatter -> fallback = heading đầu tiên -> fallback = tên file
    let title = parsed.data.title;
    if (!title) {
      title =
        extractFirstHeading(parsed.content) || path.basename(file, ".mdx");
    }

    // Lấy description = 200 ký tự đầu tiên
    const cleanedText = stripMarkdown(parsed.content);
    const description =
      cleanedText.length > 200
        ? cleanedText.substring(0, 200) + "..."
        : cleanedText;

    // content = heading đầu tiên
    const firstHeading = extractFirstHeading(parsed.content) || "";

    const keywords =
      parsed.data.keywords && Array.isArray(parsed.data.keywords)
        ? parsed.data.keywords
        : [];

    data.push({
      id: id++,
      title,
      description,
      keywords,
      content: firstHeading,
      url: docPathToUrl(file),
    });
  }

  return data;
}

const data = buildSearchData();
const output =
  "export const searchData = " + JSON.stringify(data, null, 2) + ";\n";

fs.writeFileSync(outFile, output, "utf8");

console.log("✔ searchData.js generated successfully!");
