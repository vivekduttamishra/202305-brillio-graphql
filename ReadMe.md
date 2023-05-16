# Lecture Notes

Please follow the instruction to prepare yourself for the course.




## 1. Create Folder Structure

```cmd
c:\>md current-training-name
c:\>md current-training-name\trainers-work
c:\>md current-training-name\my-work
```

#### Folder Structure should be something like this

<pre>
[c drive]
    [current-training-name]
        [trainers-work]
            
        [my-work]
        
</pre>


## 2. Clone Trainer's Repository to trainers-work folder

```cmd
c:\react-native-traing\trainers-work> git clone https://github.com/vivekduttamishra/trainer-repo-name .
```

### Notes

1. Note the command must be executed in trainers-work folder 
2. Note the trailing dot (.) after the url and a blank space
3. If git command fails, download and install git client from 

#### https://gitforwindows.org/
#### https://git-scm.com/downloads 

## 3. Set up your repository to branch

1. Take a Note of your id given from the trainer
    * example:  participant01
2. Clone The Trainer Repository in my-work folder


```cmd
c:\current-training-name\my-work> git clone reposiotory-url .
```
3. Move to your Branch with your id (example: **participan01**)

```cmd
c:\current-training-name\my-work> git checkout -b participant01
```

# Part 2

## To download trainer-work whenever required

```cmd
c:\current-training-name\trainers-work>git pull
```

### Note: 
* Never change anything in this folder. 
* If you need you can copy the content from this folder to your folder 

## To upload your assignments

* Create your own examples in **my-work** folder
* to upload your content 

```cmd
c:\current-training-name\my-work>git-update-branch remark-for-this-update
```



