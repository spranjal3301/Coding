v1<-c(1,9.3,4.5,9.5,2)
plot(v1)
v2=rep(1,5,by=2)
length(v2)
length((v1))
plot(v1,v2)

plot(v1,v2,type="l")
v1
print(order(v1))#return index of sorted 
print(order(v1,decreasing = FALSE))
plot(v1[order(v1)],v2[order(v1)],type = "l",col="red")

#histogram plotting 
v3=c(1,1,2,3,3,4,5,6,7,8,9)
hist(v3,
     main="temperture of newyok",
     xlab="temerature",
     col="red",
     border="black")

#box plot
bplo=c(12,23,34,45,56,67,78,89)
boxplot(bplo)
#iris is in bulid data set
df1=iris[,1:5]
plot(df1)
boxplot(df1)
pairs(df1)
stars(df1)

PL=df1$Petal.Length
barplot(PL,xlab="All",ylab="Petal length",main="Petal lenth box plot ")

hist(iris$Petal.Length)
hist(iris$Petal.Length,col = "steelblue", main="Petal lenth histogram",xlab="length",ylab = "frequency")
plot(iris$Petal.Length,iris$Sepal.Width)
#nameof_dataset for columbe name


df1=iris[,1:4]
plot(df1)
PL=iris$Petal.Length
PW=iris$Petal.Width
plot(PL,PW)
?plot
plot(PL,PW,pch=2,type = "p",col="green")

#convert species to factors
class(iris$Species)
#if you read.csv() to read csv file all character coloums() into factors
speciesID=as.numeric(iris$Species)
plot(PL,PW,pch=speciesID,col=speciesID)
abline(lm(PW~PL))#for get line

#variance,range,standard deviation=sepred of curve
library(modeest)
print(mean(iris$Sepal.Length))
print(median(iris$Sepal.Length))
mode=mfv(iris$Sepal.Length)
print(mode)
print(var(iris$Sepal.Length))
print(sd(iris$Sepal.Length))
summary(iris)
aggregate(spe)



