# Conventional Commit Types

Specification can be found at [www.conventionalcommits.org](https://www.conventionalcommits.org/en).

## General Summary

| Type       | Title                    | Emoji | Release | Description                                                                                                 |
|:----------:|--------------------------|:-----:|:-------:|-------------------------------------------------------------------------------------------------------------|
| `feat`     | Features                 |  ✨   | `minor` | A new feature                                                                                               |
| `refactor` | Code Refactoring         |  📦   | `patch` | A code change that neither fixes a bug nor adds a feature                                                   |
| `perf`     | Performance Improvements |  🚀   | `patch` | A code change that improves performance                                                                     |
| `fix`      | Bug Fixes                |  🐛   | `patch` | A bug Fix                                                                                                   |
| `chore`    | Chores                   |  ♻   | `patch` | Other changes that don't modify src or test files                                                           |
| `revert`   | Reverts                  |  🗑   | `patch` | Reverts a previous commit                                                                                   |
| `docs`     | Documentation            |  📚   | `patch` | Documentation only changes                                                                                  |
| `style`    | Styles                   |  💎   | -       | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| `test`     | Tests                    |  🚨   | -       | Adding missing tests or correcting existing tests                                                           |
| `build`    | Builds                   |  🛠   | `patch` | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| `ci`       | Continuous Integrations  |  ⚙   | -       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |

## Special Cases

| Type             | Title            | Release     |
|:----------------:|------------------|:-----------:|
|`BREAKING_CHANGE` | Breaking Changes | `major`     |
|`DEPRECATED`      | Deprecations     | follow type |

## Credits

Special thanks to the [project semantic-gitlog](https://github.com/semantic-gitlog/semantic-gitlog/blob/master/docs/en-us/fundamentals/commit-types.md) and the author [ymind](https://github.com/ymind) that created this markdown file originally.