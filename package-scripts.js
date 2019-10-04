module.exports = {
  scripts: {
    default: 'ng serve',
    serve: 'ng serve',
    build: 'ng build',
    test: 'ng test',
    lint: 'nx workspace-lint && ng lint',
    e2E: 'ng e2e',
    commit: 'git cz -a',
    affected: {
      apps: 'nx affected:apps',
      libs: 'nx affected:libs',
      build: 'nx affected:build',
      e2E: 'nx affected:e2e',
      test: 'nx affected:test',
      lint: 'nx affected:lint',
      depGraph: 'nx affected:dep-graph',
      default: 'nx affected'
    },
    format: {
      default: 'nx format:write',
      write: 'nx format:write',
      check: 'nx format:check'
    },
    update: {
      check: 'ng update'
    },
    workspaceSchematic: 'nx workspace-schematic',
    depGraph: 'nx dep-graph',
    help: 'nx help'
  }
};
