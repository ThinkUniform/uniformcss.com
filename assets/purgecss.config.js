module.exports = {
  content: [
    '../**/*.njk'
  ],
  css: ['css/uniform.min.css'],
  defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:\.]/g) || []
}