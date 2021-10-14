# Semantic Versioning 

## What is Semantic versioning?

Semantic versioning is the practice of using version numbers to convey the level of change included in the release being versioned. In the practice, the version number allows the user of the software released to easily and quickly understand the nature of the change made and how it effects the software that depends on it.

## Structure of semantic versions

Say a software package is versioned using a 3 number system of x.y.z where X indicates the major version, y indicates the minor version and z indicates the patch version. 

Different levels of code changes, alas known as 'type', effect the appropriate version number in the version of the release as follows. 

| Type            | Version Number to increment |
| --------------- | --------------------------- |
| feat            | minor                       |
| refactor        | patch                       |
| perf            | patch                       |
| fix             | patch                       |
| chore           | patch                       |
| revert          | patch                       |
| docs            | patch                       |
| style           | -                           |
| test            | -                           |
| build           | patch                       |
| ci              | patch                       |
| breaking change | major                       |
| deprecated      | major                       |

More information on the Types can be found under "Conventional Commits"

## Hierarchy of version numbers

When a change with a type corresponding to a "patch" change is applied, the the "patch" version number number is incremented and the "major" and "minor" version number are left unchanged 

When a change with a type corresponding to a "minor" change is applied, the "patch" version number is reset to 0, the "minor" version number is incremented and the "major" version number is left unchanged. 

When a change with a type corresponding to a "major" change is applied, the "patch" and "minor" version numbers are reset to 0 and the "major" version number is incremented.

### Example 

A product of version 12.3.45 is released

A fix is applied to the product. 
The new version becomes: 12.3.46

A feat is applied to the product. 
The new version number becomes: 12.4.0

A breaking change is applied to the product.
The new version number becomes: 13.0.0

A refactor is applied to the product. 
The new version number becomes: 13.0.1

A feat is applied to the product. 
The new version number becomes: 13.1.0 

In this way it is to see, given the previous and new version, what level of change the product has undergone. 


## Benefits of Semantic Versioning 

Dependency management in a software product can quickly become a messy task with 2 major issued quickly arising. 

The first issue is knows as "Dependency Lock". This is the state of not being able to release a new version of a product without also releasing new versions of all the products that the product in question depends on. This arises as a result of too tightly specifying the versions of dependencies of a product. 

The second issue is knows as "version promiscuity". This is the state of assuming compatibility with too many future versions of a product than is reasonable possible. This arises as a result of too loosly specifying the versions of dependencies of a product.

Semantic versioning provides a rule set (as specified above) to indicate the nature of a change of a dependency and therefore allow a user to decide when a dependency release is not compatible with the product depending on it. 

Semantic versioning is only of benefit to a user when it is strictly applied to releases of a product. A failure to correctly update the version of a product could lead to catastrophic failure of the products that depend on it. 




