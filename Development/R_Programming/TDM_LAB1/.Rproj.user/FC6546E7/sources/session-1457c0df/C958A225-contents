#Data Structures
# Strings
# Vectors
# Lists
# Array
# Matrices
# Factors
# Data Frames

#vector is homogenies d.s
v1=c(1,2,3,4)
v1*2
v1^2
v2=c(4,3,2,1)
v1+v2
length(v1)

v3=c("red","seagreen","grey","yellow")
v3[c(1,2,3)]
v3[c(-1,-2)]
v4=1:8
v4
v5=seq(1,9,by=2)
v5
v6=letters[1:10]
v6

v7=c(2.4,45,134524,46,-12,-46)
sort(v7)
#if any element is less than 5
any(v1<5)
#if all element is less than 5
all(v1<5)

#Lists in R
l1=list("here","we","go","again","27")
l1
class(l1)
unlist(l1)
l1[3]
l1[1:3]
#name is fn
names(l1)=c("a","b","c","d","e")
l1[["a"]]

l2=list(a=1:27,b=letters[1:5],c=27)
l2$a
l2[1]=NULL
merged=c(l1,l2)
merged

#Matrixes
m1=matrix(c(26:50),nrow=5,byrow = TRUE)
m1
m1[1,2]
dim(m1)
rn=c(1,2,3,4,5)
cn=c("a","b","c","d","e")
m2=matrix(c(1:25),nrow=5,byrow = TRUE,dimnames = list(rn,cn))
m2
length(m1)
length(m2)
m1*m2
m1%*%m2 #This operator is used to multiply a matrix with its transpose.

#array
#3d
a1=array(c("red","seagreen"),dim=c(3,3,2))
a1
dim(a1)
a1[1,2,2]
print(a1[,3,1])
a1[,,2]

#Factors
f=c("m","f","c","o","m","f","c","o","m","f","c","o")
f
f1=factor(f)
f1
nlevels(f1)


# DATAFRAME  --> 6TH DATA STRUCTURE IN R

# X[2] -- > in th context of dataframe would give the column as it
# is more important  but in matrics and all it would give rows 

BMI <- data.frame(
  gender = c("Male","Female","Male"),
  height = c(145,136,157),
  weight = c(56,67,89),
  age = c(23,19,21)
)
print(BMI)
X = BMI
nrow(X)
ncol(X)
dim(X)

names(X)
head(X)
tail(X)


# selecting specific elements
X[2,3]  # second row third col
X[2] # second col gives priority if not in cordinated stuructured form
X[,2] # will not show row only col
X[2,] # will only show row

print(X[,c(2,3)])  # show second and third col 
print(X[, -c(2,3)])  # show all the colummns except the ones removed in this case 2 and 3



# creating a data frame
emp.data <- data.frame(
  empid = c(1:4),
  emp_name = c("Sam", "Rob",
               "Max", "John"
  ),
  emp_dept = c("Sales", "RobMarketing",
               "HR", "R&D")
  
)

emp.newdata <- data.frame(
  empid = c(1:4),
  emp_name = c("Sam", "Rob",
               "Max", "John"
  ),
  emp_dept = c("Sales", "RobMarketing",
               "HR", "R&D")
  
)

# rbind is for row binding only
emp.finaldata <- rbind(emp.data,emp.newdata)
print(emp.finaldata)



# ADDING A NEW COLUMN TO A DATAFRAME

emp.data$salary <- c(27,12,22,4)

print(emp.data)


# MERGING TWO DATAFRAME

# name of merged dataframe <- rbind(olddata.frame1,anotherdata.frme2)

#creating another dataframe to merge 


# creating a data frame
emp.newdata <- data.frame(
  empid = c(1:4),
  emp_location = c("Delhi", "Gurgaon",
                   "Mumbai", "Guwahati"
  ),
  emp_jobtype = c("Remote", "on-site",
                  "Remote", "Remote")
  
)
#print the duplicated 
dup_df<-duplicated(emp.newdata)
dup_df   
dup_rows<-emp.newdata[dup_df,]
print(dup_rows)

#remove the duplicate row 
NO_dup_rows<-emp.newdata(!dup_df)
view(NO_dup_rows)

class(emp.newdata$species)#check the class of columns
table(NO_dup_rows$Species)

