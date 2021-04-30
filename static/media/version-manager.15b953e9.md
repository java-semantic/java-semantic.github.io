# Version Manager Analysis

## Problem Statement

A version manager is required that receives an input value in the form of `0.0.0` where each digit corresponds to a major, minor and patch number of the project, and then increments the project version accordingly.

## Context

Semantic Versioning is a versioning scheme for using meaningful version numbers. Semantic Versioning works by structuring each version identifier into three parts, MAJOR, MINOR, and PATCH, and then putting these together into a “MAJOR.MINOR.PATCH” notation.

Given a version number MAJOR.MINOR.PATCH, increment the:

- **MAJOR**: when you make incompatible API changes.
- **MINOR**: when you add functionality in a backwards compatible manner.
- **PATCH**: when you make backwards compatible bug fixes.

See https://semver.org/ for further reading.

## Proposed Solution

The version manager will maintain an overall project version stored in three integer properties:

```
int major = 0;
int minor = 0;
int patch = 0;
```

All three properties are initialised to 0, since the project version will be calculated from the beginning of the repository. The version manager will then receive three parameters from the rules engine:
` incrementMajor, incrementMinor, incrementPatch`. These parameters will be validated (non-negative) and added to the corresponding property.

If the user has specified to have non-clearing versioning, the process will stop here. Otherwise the following rules are applied the the project version:

```
Increase Major Version -> x.0.0
```

```
Increase Minor Version -> x.x.0
```

```
Increase Patch Version -> x.x.x
```

In short: if a version number changes all version numbers to the right of the leftmost changed number are zeroed. This prevents a project from jumping to version `2.9.0` when a major version change happens from `1.9.0`, leaving the version to be `2.0.0` instead.

An accessor for the version number can be called at any time to get the current project version. The version will be returned as string in the following format:
`x.y.z`

## Acceptance Criteria

Given a Git project commit history formatted by a rule engine to provide a `MAJOR.MINOR.PATCH` version, when the commit versions are stepped through from the beginning of the project a final project version will be returned in the format `x.y.z`.

## Blockers

The version manager seems to luckily not have any big blockers. Some smaller blockers might be:

- User specified preferences.
- Integration with rules engine.

As with any project, there is a possibility of encountering PICNIC or ID-10-T errors. Should these erros occur, a diciplinary hearing for that team member along with corporal punishment will suffice.

Further reading:

- https://en.wiktionary.org/wiki/ID10T
- https://en.wiktionary.org/wiki/PICNIC
