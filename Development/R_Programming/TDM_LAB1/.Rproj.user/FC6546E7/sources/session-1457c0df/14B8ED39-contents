View (iris)
library(modeest)
names(iris)
df1<-iris[,1:3]
plot(df1)
pl<-iris$Petal.Length
pw<-iris$Petal.Width
plot(pl,pw)
#pch means type of marker
?plot
plot(pl,pw,pch=2)
plot(pl,pw,pch=2,col="green")
#convert species to factors with as.factor()
class(iris$Species)
#to convert the species to numeric
speciesID<-as.numeric(iris$Species)
speciesID
plot(pl,pw,pch=speciesID,col="green")
plot(pl,pw,pch=speciesID,col=speciesID)

lines(pl,pw,pch=speciesID,col=speciesID)
plot(pl,pw,
     pch=speciesID,
     col=speciesID,
     xlab="Petal length(cm)",
     ylab="Petal width(cm)",
     main="Petal length vs Petal width")
abline(lm(pw~pl))
#--------------------------------------------------------------------------------------------------------------------------------------------------------

#statistics in R
#1.standard deviation,2.normal distribution,3.variance,4.mean
#normal distribution can be described in 2 parameters:mean,standard deviation
#measures of central tendency:mean,median,mode
#measures of dispersion:range,variance,standard dev
print(mean(iris$Sepal.Length))
print(median(iris$Sepal.Length))
library(modeest)
mode=mfv(iris$Sepal.Length)
print(mode)
print(var(iris$Sepal.Length))
print(sd(iris$Sepal.Length))
summary(iris)
aggregate(Sepal.Length~Species,iris,mean)
cor(iris[,1:4])#correlation matrix
plot(iris[,1:4])
#plot correlated features
y <- iris[,"Petal.Width"]
x <- iris[,"Petal.Length"]
head(x)
head(y)
xycorr <-cor(y,x,method = "pearson") # to find the corelation
xycorr
species_col = as.numeric(iris$Species)
plot(y~x,col = x)
modal1 <- lm(y~x)#to find slope and intercept
modal1 #provides regression line coefficient only
plot(y~x,col = species_col)
abline(modal1,col = "red",lwd = 3)# to draw the line

p1 <- predict(modal1, data.frame("x" = 5))
p1

irdata = iris
str(irdata)
levels(irdata$Species)
sum(is.na(irdata))
irdata <- irdata[1:100,]#taking inly two species setosha
samp <- sample(1:100,80)
irtrain <- irdata[samp,]
str(irtrain)
irtest <- irdata[-samp,]
str(irtest)
y <- irtrain$Species
x <- irtrain$Sepal.Width
glfit <- glm(y~x,family ="binomial")
summary(glfit)
newdata=data.frame(x=2.0)
predicted_val=predict(glfit,newdata,type="response")
predicted_val

newdata<-data.frame(x=ir_test$Sepal.Width)
predicted_val<-predict(glfit,newdata,type="response")
predicted_val

predict_reg<- ifelse(predicted_val>05, print("Versicolor"),print("Setosa")) 
predict_reg <- ifelse(predicted_val > 0.5 ,2,1) 
table(as.numeric(ir_test$Species), predict_reg)
predict_reg

prediction<-data.frame()

