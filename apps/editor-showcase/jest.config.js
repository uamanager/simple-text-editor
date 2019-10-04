module.exports = {
  name: "editor-showcase",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/editor-showcase",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
