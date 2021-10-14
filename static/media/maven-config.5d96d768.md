# Javasemantic Maven Plugin

## Getting started with the Maven plugin

To use the Javasemantic Maven plugin add the following config to you Maven projects pom.xml file: 

```xml
      <plugin>
        <groupId>io.github.javasemantic</groupId>
        <artifactId>javasemantic-maven-plugin</artifactId>
        <!-- Please use latest release available from maven central -->
        <version>${javasemantic-maven-plugin.version}</version>
        <!-- Configuration for versioning -->
        <configuration>
          <!-- Activate the use of a static version instead of calculating it -->
          <activate-override-version>true</activate-override-version>
          <!-- Specify override value to use, default value is 0.0.1-SNAPSHOT -->
          <override-static-version>0.0.1-SNAPSHOT</override-static-version>
          <!-- Specify the branch names that the override value should not be applied too -->
          <override-version-branch-blacklist-items>
            <override-version-branch-blacklist-item>main</override-version-branch-blacklist-item>
            <override-version-branch-blacklist-item>release</override-version-branch-blacklist-item>
          </override-version-branch-blacklist-items>
        </configuration>
        <executions>
          <!-- This plugin will install the hooks required by Javasemantic -->
          <execution>
            <id>install-hook</id>
            <goals>
              <goal>install-hooks</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
```

In the above config:

- Replace '${javasemantic-maven-plugin.version}' with the latest version of the Javasemantic Maven plugin available from Maven Central. 


- Specify the branches you require Javasemantic to perform version calculations on in the 'override-version-branch-blacklist-items'