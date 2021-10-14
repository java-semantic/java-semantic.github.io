## Semantic Versioning via Conventional Commits 

By implementing the use of conventional commits, the semantic version of a product can be automatically generated and updated by parsing the commits made to that product. 

In this way software product versions can be automatically incremented to the appropriate "major", "minor" and "patch" versions as the code is developed and committed to source control, thereby removing the human error possible in manually versioning a software product and allowing both the end users and the dependency developers to understand the nature of the change to the product at any given point in the history of that product.  

This project accomplishes the automation of semantic versioning through the use of conventional commits, git hooks and Maven plugins (Gradle to follow in future). 