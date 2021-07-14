module.exports = {
  src: "./src",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  schema: "./schema.graphql",
  extensions: ["ts", "tsx"],
  language: "typescript",
  artifactDirectory: "./src/__generated__",
}