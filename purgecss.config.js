module.exports = {
  content: [
    '**/*.html',
    '**/*.njk',
    '**/*.liquid',
    '**/*.md'
  ],
  css: ['assets/css/uniform.min.css'],
  defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:\.]/g) || []
}