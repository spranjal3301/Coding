View(iris)
plot(iris[,1:4])
cor(iris[ , 1:4])
Y<- iris[,"Petal.Width"] # select Target attribute
X<- iris[,"Petal.Length"] # select Predictor
head(X)
head(Y)
Species_col=as.numeric(iris$Species)
plot(Y~X,col=Species_col)
model1<- lm(Y~X)
model1 # provides regression line coefficients only i.e. slope and y-intercept
abline(model1, col="blue", lwd=2) #add regression line to scatter plot to see relationship between X and Y
#Perform prediction
p1<- predict(model1,data.frame("X"=6))
p1
