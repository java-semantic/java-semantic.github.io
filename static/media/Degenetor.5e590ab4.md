# Degenetor Analysis

## Contents:

- Problem statement.
- Historical context, both domain and technical history of the work in question.
- Solution context, including any POC's or investigations that have been done.
- Proposed solutions that have been discussed.
- Acceptance criteria written in "Given, When, Then" to meet the business ask for the story.
- Wherever possible, use diagrams to illustrate the flow of the problem.

## Problem statement

The Degenerator receives commit message as String. The message should be divided it into the defining components that make up a conventional commit.

## Historical context

### Sources

Conventional Commits

- https://dwmkerr.com/conventional-commits-and-semantic-versioning-for-java/
- https://www.conventionalcommits.org/en/v1.0.0/
- https://gist.github.com/develar/273e2eb938792cf5f86451fbac2bcd51

## Solution context

### Example of a Conventional commit

![ConventionalCommitExample](/.images/ConventionalCommitExample.png)

### Convention commits structure

| Key | Description |
| --- | ----------- |
| M   | Mandatory   |
| O   | Optional    |

| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body | “\n” | footer |
| ---- | ---------------- | ------- | --- | ----------- | ----------- | ---- | ---- | ---- | ------ |
| M    | O                | O       | M   | M           | M           | O    | O    | O    | O      |

### Notes

The blank lines mentioned in the convention commits structure will become mandatory once there is a body or/and footer.

Footer, is highly dependent on context of the message, and position in body. For example footer can be
removed if ! is present. ! denotes a breaking change. Another example would be wording within the footer body as well.
The word BREAKING CHANGE, or valid footer tokens present in the body will mean that body is a footer.
A footer may have new lines and multiple bodies.

The above considerations for footer should be taken into account for later development and analysis.

### Permutations for a conventional commits.

| Key | Description         |
| --- | ------------------- |
| X   | Denotes empty field |

| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body | “\n” | footer |
| ---- | ---------------- | ------- | --- | ----------- | ----------- | ---- | ---- | ---- | ------ |
| type | X                | X       | :   | white space | Description | X    | X    | X    | X      |
| type | X                | (scope) | :   | white space | Description | “\n” | body | “\n” | footer |
| type | Exclamation mark | X       | :   | white space | Description | “\n” | body | “\n” | footer |
| type | X                | X       | :   | white space | Description | “\n” | body | “\n” | footer |
| type | X                | X       | :   | white space | Description | X    | X    | “\n” | footer |
| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body | X    | X      |
| type | Exclamation mark | (scope) | :   | white space | Description | X    | X    | X    | X      |
| type | X                | (scope) | :   | white space | Description | “\n” | body | X    | X      |
| type | X                | (scope) | :   | white space | Description | X    | X    | “\n” | footer |
| type | Exclamation mark | X       | :   | white space | Description | X    | X    | “\n” | footer |
| type | Exclamation mark | X       | :   | white space | Description | “\n” | body | X    | X      |

## Proposed Solution

### Convention commits structure

| Key | Description |
| --- | ----------- |
| M   | Mandatory   |
| O   | Optional    |

| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body |
| ---- | ---------------- | ------- | --- | ----------- | ----------- | ---- | ---- |
| M    | O                | O       | M   | M           | M           | O    | O    |

### Permutations for a conventional commits

| Key | Description         |
| --- | ------------------- |
| X   | Denotes empty field |

| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body |
| ---- | ---------------- | ------- | --- | ----------- | ----------- | ---- | ---- |
| type | X                | X       | :   | white space | Description | X    | X    |
| type | X                | (scope) | :   | white space | Description | “\n” | body |
| type | Exclamation mark | X       | :   | white space | Description | “\n” | body |
| type | X                | X       | :   | white space | Description | “\n” | body |
| type | Exclamation mark | (scope) | :   | white space | Description | “\n” | body |
| type | Exclamation mark | (scope) | :   | white space | Description | X    | X    |
| type | X                | (scope) | :   | white space | Description | “\n” | body |
| type | X                | (scope) | :   | white space | Description | X    | X    |
| type | Exclamation mark | X       | :   | white space | Description | X    | X    |
| type | Exclamation mark | X       | :   | white space | Description | “\n” | body |

### Detailed requirements

| Component        | Data Type       | Description                                                                        |
| ---------------- | --------------- | ---------------------------------------------------------------------------------- |
| type             | String          |                                                                                    |
| Exclamation mark | String          |                                                                                    |
| (scope)          | String          |                                                                                    |
| :                | String          |                                                                                    |
| “ ”              | boolean         | Declare if white space was present.                                                |
| Description      | String          |                                                                                    |
| “\n” + body      | List of Strings | String for each line with content of the body. Allows for footer evaluation later. |
