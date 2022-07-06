# What makes this way of test so special ? 

Running GitHub Actions --> Same YAML, Everywhere
- Locally 
- Continuous Build (Shared build on-premises)
- Remote (Global build Cloud)


## Github Action (Workflows) (YAML) runs inside a Docker Container (Isolated)

- No more "It's works on my machine (mindset) "
- No pollutions
- No Sideeffects on local machine environment 
- No maintenance on local machine Dependencies



## How to Test inside a docker container 

```bash
# how to install 'act' ?  
scoop info act
scoop install act


# run the tests job
act --job test 

# run the the entire pipeline
act 

# view the execution graph (List workflows)
act --list
```

