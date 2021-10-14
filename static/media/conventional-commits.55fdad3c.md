# Conventional Commits

## What are Conventional Commits?

Conventional Commits are a convention for commit messages that explicitly describe the nature of the commit change. This explicit description enables automated parsing of commit messages as well as a simple human readable summery of the commit. 

## Structure of Conventional Commits.

Conventional Commits are structured as follows  

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
The 'type' field must comply with the convention decided on in order to allow the commits to be automatically parsed. 

## Types 
The following table details the possible 'type' values and what they represent in the context of semantic software versioning.

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
 
In addition the following special cases exist. 

| Type             | Title            | Release     |
|:----------------:|------------------|:-----------:|
|`BREAKING_CHANGE` | Breaking Changes | `major`     |
|`DEPRECATED`      | Deprecations     | follow type |

## Credit 

Special thanks to the following sources: 

[Project semantic-gitlog](https://github.com/semantic-gitlog/semantic-gitlog/blob/master/docs/en-us/fundamentals/commit-types.md) and the author [ymind](https://github.com/ymind)