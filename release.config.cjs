module.exports = {
  branches: ["main"],                    
  plugins: [
    "@semantic-release/commit-analyzer", 
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm",   { npmPublish: false }],
    ["@semantic-release/github", { assets: [] }],
    ["@semantic-release/git", { 
      assets: ["package.json"], 
      message: "chore(release): ${nextRelease.version} [skip ci]" 
    }]
  ]
};