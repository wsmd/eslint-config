module.exports = {
  // prettier-ignore
  extends: [
    './react',
    './typescript',
    './prettier',
    './jest',
  ].map(require.resolve)
};
