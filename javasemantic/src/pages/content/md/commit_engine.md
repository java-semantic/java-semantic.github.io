# Commit Engine - Technical Analysis

## Problem Statement

Due to the validation rules seen in [conventional-changelog's commit-lint config](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) for conventional commits the team has decided that a mechanism for iterating through objects was necessary.

The following key benefits lead to this decision:

- Isolation of each objects's logic.
- Shareable components between the objects.
- Prevention of if-elsy classes, for when validation on conventional commits need to be made.

The solution will be designed within this document.

## Context

Then mechanism for iterating through objects will be from here on be referred to as the 'commit engine' or 'engine'.

The engine will work in a simple manner of having a set list in which each item is iterated over when the engine is tasked to `start`.

A rule represent a part of the commit or commit message that can be assigned a value to determine a summed semantic value for the git project it is running on. Rules statuses will be based on validation of the commit. Rules will also have extended functionality to determine the value of said part of the commit.

## Proposed Solution

The below diagram give a high level design of the engine within a usage context. In addition to just the commit engine the ability of iterating through rules should be given to both structrual / conventional commit validation objects to achieve the same benefits the engine is providing in that validation.

![engine-design-in-context](./.images/engine-design-in-context.png)

## Acceptance Criteria

Implementation of engine with sub componenets such as rule and validation objects.

## Blockers

None identified.

## Contents:

- Problem statement.
- Historical context, both domain and technical history of the work in question.
- Solution context, including any POC's or investigations that have been done.
- Proposed solutions that have been discussed.
- Acceptance criteria written in "Given, When, Then" to meet the business ask for the story.
- Wherever possible, use diagrams to illustrate the flow of the problem.

## People:

Feel free to contact me for more clarity or questions regarding the above analysis.
