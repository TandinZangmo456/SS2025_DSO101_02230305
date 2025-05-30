# Practical 4 Report on Jenkins Server for a git repository

## Objectives

The main objective of this practical was to setup jenkins server and implement CI/CD pipeline for a Node.js application. The process involves setting up jenkins with the necessary plugins, configuring Node.js and integrating the git-based workflow on the application. 

## Steps Involved
### 1. **Installation of plugins** 
- NodeJS Plugin (for Node.js tool auto-installation).
- Git Plugin (for SCM integration).
- Pipeline Plugin (for defining pipelines as code).

![alt text](images/1.png)

![alt text](images/2.png)

![alt text](images/3.png)

### 2. **Node.js tool configuration** 
Configured Node.js in Jenkins Global Tool Configuration by specifying the version of Node.js and enabling automatic installation, ensuring the pipeline could use the required runtime.

![alt text](images/10.png)

### 3. **Create Node.js Application** 

![alt text](images/4.png)

### 4. **Create jenkins pipeline job** 

![alt text](images/5.png)

![alt text](images/6.png)

### 5. **Run the pipeline** 

![alt text](images/9.png)


## Challenges Faced and Solutions
- **Challenge:** Jenkins couldn't find a test report because jest-junit wasn't configured.

    - **Solution:** 
    ![alt text](images/11.png)


- **Challenge:** Test failed because it was trying to use a server object that wasn’t exported from app.js.

    - **Solution:** 
    ![alt text](images/12.png)

- **Challenge:** Jenkins couldn't find the correct NodeJS tool, or junit.xml might not be archived.
![alt text](images/e2.png)
    - **Solution:** 
    ![alt text](images/13.png)


## Conclusion
In this practical 4, i implemented jenkins CI/CD pipeline for a node.js application successfully. It can run test, generate test reports, build application and deploy it whenever there is changes made in the repository ensuring streamlined and reliable CI/CD process.