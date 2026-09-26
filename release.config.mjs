export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: false },
          { type: 'revert', release: false },
          { type: 'style', release: false },
          { type: 'chore', release: false },
          { scope: 'no-release', release: false },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        presetConfig: {
          types: [
            { type: 'feat', section: '🚀 Новые функции', hidden: false },
            { type: 'fix', section: '🐛 Исправления ошибок', hidden: false },
            { type: 'docs', section: '📝 Документация', hidden: false },
            { type: 'refactor', section: '♻️ Рефакторинг', hidden: false },
            { type: 'perf', section: '⚡️ Оптимизация', hidden: false },
            { type: 'test', section: '✅ Тесты', hidden: true },
            { type: 'revert', section: '⏪ Откаты изменений', hidden: false },
            { type: 'style', section: '💄 Стили и оформление', hidden: true },
            { type: 'chore', section: '⚙️ Прочие задачи', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [{ path: 'dist/**/*.*' }, { path: 'CHANGELOG.md' }],
        releasedLabels: ['Status: Released'],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
